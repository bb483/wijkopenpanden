"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModernKeyProps {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  scrollSpeed: React.MutableRefObject<number>;
  reduced: boolean;
}

function buildBowShape(): THREE.Shape {
  const shape = new THREE.Shape();
  const w = 0.52;
  const h = 0.40;
  const r = 0.12;

  shape.moveTo(-w + r, -h);
  shape.lineTo(w - r, -h);
  shape.quadraticCurveTo(w, -h, w, -h + r);
  shape.lineTo(w, h - r);
  shape.quadraticCurveTo(w, h, w - r, h);
  shape.lineTo(-w + r, h);
  shape.quadraticCurveTo(-w, h, -w, h - r);
  shape.lineTo(-w, -h + r);
  shape.quadraticCurveTo(-w, -h, -w + r, -h);

  // Ovaal gat
  const hole = new THREE.Path();
  hole.absellipse(0, 0.04, 0.20, 0.15, 0, Math.PI * 2, false, 0);
  shape.holes.push(hole);

  return shape;
}

export default function ModernKey({ mouseX, mouseY, scrollSpeed, reduced }: ModernKeyProps) {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const rotYRef = useRef(0);
  const tiltXRef = useRef(0);
  const tiltZRef = useRef(0);

  // Bow geometry (ExtrudeGeometry)
  const bowGeo = useMemo(() => {
    const shape = buildBowShape();
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 3,
    });
  }, []);

  // Blade base geometry
  const bladeGeo = useMemo(
    () => new THREE.BoxGeometry(0.22, 1.75, 0.10),
    []
  );

  // Shoulder (stop)
  const shoulderGeo = useMemo(
    () => new THREE.BoxGeometry(0.38, 0.08, 0.13),
    []
  );

  // Teeth geometries: [width, height] — left side of blade
  const teethDefs = useMemo(
    () => [
      { w: 0.14, h: 0.10, y: -0.30 },
      { w: 0.10, h: 0.07, y: -0.52 },
      { w: 0.16, h: 0.13, y: -0.72 },
      { w: 0.08, h: 0.06, y: -0.92 },
      { w: 0.12, h: 0.10, y: -1.10 },
    ],
    []
  );

  const teethGeos = useMemo(
    () => teethDefs.map((t) => new THREE.BoxGeometry(t.w, t.h, 0.10)),
    [teethDefs]
  );

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C4A35A"),
        metalness: 0.82,
        roughness: 0.42,
      }),
    []
  );

  useFrame((_, delta) => {
    if (!groupRef.current || reduced) return;

    timeRef.current += delta;

    // Continuous y-rotation (25s full turn)
    const baseSpeed = (Math.PI * 2) / 25;
    const boost = 1 + scrollSpeed.current * 1.5;
    rotYRef.current += delta * baseSpeed * boost;

    // Float on y-axis (7s cycle, amplitude 0.1)
    const floatY = Math.sin(timeRef.current * ((Math.PI * 2) / 7)) * 0.1;

    // Mouse parallax — lerp toward target tilt
    const targetX = mouseY.current * 0.12;
    const targetZ = -mouseX.current * 0.10;
    tiltXRef.current += (targetX - tiltXRef.current) * 0.05;
    tiltZRef.current += (targetZ - tiltZRef.current) * 0.05;

    groupRef.current.rotation.y = rotYRef.current;
    groupRef.current.rotation.x = tiltXRef.current;
    groupRef.current.rotation.z = tiltZRef.current;
    groupRef.current.position.y = floatY;

  });

  // Center the bow geometry (ExtrudeGeometry starts at z=0 by default)
  const bowOffset = -0.06; // half of depth=0.12

  return (
    <group ref={groupRef} rotation={[0, 0.3, 0]}>
      {/* Bow */}
      <mesh
        geometry={bowGeo}
        material={material}
        position={[0, 0.88, bowOffset]}
      />

      {/* Shoulder */}
      <mesh
        geometry={shoulderGeo}
        material={material}
        position={[0, 0.44, 0]}
      />

      {/* Blade */}
      <mesh
        geometry={bladeGeo}
        material={material}
        position={[0.08, -0.42, 0]}
      />

      {/* Teeth — extend to the left of blade */}
      {teethDefs.map((t, i) => (
        <mesh
          key={i}
          geometry={teethGeos[i]}
          material={material}
          position={[-0.07 - t.w / 2, t.y, 0]}
        />
      ))}
    </group>
  );
}
