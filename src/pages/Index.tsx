import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ApartmentTypes from "@/components/ApartmentTypes";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FeaturedCustomerProjects from "@/components/FeaturedCustomerProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import QuoteGenerator from "@/components/QuoteGenerator";
import ProjectLocationsMap from "@/components/ProjectLocationsMap";
import Contact from "@/components/Contact";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
        <FeaturedCustomerProjects />
        <WhyChooseUs />
        <Testimonials />
        <ProjectLocationsMap />
        <div id="quote-generator">
          <QuoteGenerator />
        </div>
        <Contact />
        <FindUs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;