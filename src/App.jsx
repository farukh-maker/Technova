import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Advantages from "./sections/Advantages";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import ContactForm from "./sections/ContactForm";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Advantages />
        <Stats />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
