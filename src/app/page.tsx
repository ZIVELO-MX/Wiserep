import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTACard from "@/components/CTACard";
import GymossSection from "@/components/GymossSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <CTACard />
        <GymossSection />
      </main>
      <Footer />
    </>
  );
}
