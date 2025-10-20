import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactForm />
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
