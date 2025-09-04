import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ApartmentTypes from "@/components/ApartmentTypes";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ApartmentTypes />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;