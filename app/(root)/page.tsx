import Features from "@/component/Features";
import HeaderComponent from "@/component/HeaderComponent";
import Hero from "@/component/Hero";
import Orbit from "@/component/Orbit";
import Testimonial from "@/component/Testimonial";
import Web from "@/component/Web";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-r from-cyan-500 to-blue-500">
      <header className="z-5">
        <HeaderComponent />
      </header>
      <main className="z-5">
        <Hero />
        <Web />
        <Features />
        <Testimonial />
      </main>

      <footer className="z-5"></footer>
    </div>
  );
}
