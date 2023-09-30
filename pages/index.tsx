import AboutMyposs from "@/components/AboutMyposs";
import Beneficios from "@/components/Beneficios";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Funcionalidades from "@/components/Funcionalidades";
import Header from "@/components/Header";
import Information from "@/components/Information";
import InformationAbout from "@/components/Information-about";
import Maps from "@/components/Maps";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import QueNecesito from "@/components/QueNecesito";
import ShowProduct from "@/components/ShowProduct";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <AboutMyposs/>
      <Information/>
      <Funcionalidades/>
      <ShowProduct/>
      <InformationAbout/>
      <QueNecesito/>
      <Pricing />
      <Beneficios />
      <Demo/>
      <Maps/>
      <Footer/>
    </div>
  )
}
