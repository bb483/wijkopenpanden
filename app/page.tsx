import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCtaButton from "@/components/StickyCtaButton";
import Hero from "@/components/home/Hero";
import Beloftes from "@/components/home/Beloftes";
import VoorWie from "@/components/home/VoorWie";
import ZoWerktHet from "@/components/home/ZoWerktHet";
import WaaromOns from "@/components/home/WaaromOns";
import BlijvenWonen from "@/components/home/BlijvenWonen";
import EerlijkPrijs from "@/components/home/EerlijkPrijs";
import RecenteAankopen from "@/components/home/RecenteAankopen";
import FAQ from "@/components/home/FAQ";
import Formulier from "@/components/home/Formulier";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Beloftes />
        <VoorWie />
        <ZoWerktHet />
        <WaaromOns />
        <BlijvenWonen />
        <EerlijkPrijs />
        <RecenteAankopen />
        <FAQ />
        <Formulier />
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
