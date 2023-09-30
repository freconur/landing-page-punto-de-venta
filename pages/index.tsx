import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Information from "@/components/Information";
import InformationAbout from "@/components/Information-about";
import Maps from "@/components/Maps";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Information/>
      <InformationAbout/>
      <Pricing />
      <Beneficios />
      <Maps/>
      <Footer/>
    </div>
  )
}
