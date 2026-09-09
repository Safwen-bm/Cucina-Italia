import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import Reserve from "@/components/Reserve";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Testimonial />
        <Reserve />
        <Location />
      </main>
      <Footer />
    </>
  );
}
