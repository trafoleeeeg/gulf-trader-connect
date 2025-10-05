import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Calculator from "@/components/Calculator";
import Reviews from "@/components/Reviews";
import HowToStart from "@/components/HowToStart";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Calculator />
        <Reviews />
        <HowToStart />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
