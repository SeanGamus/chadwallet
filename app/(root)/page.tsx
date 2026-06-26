import Features from "@/component/Features";
import HeaderComponent from "@/component/HeaderComponent";
import Hero from "@/component/Hero";
import Testimonial from "@/component/Testimonial";
import Web from "@/component/Web";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-cyan-500 to-green-400 ">
      <header className="z-5 max-sm:hidden">
        <HeaderComponent />
      </header>
      <main className="z-5">
        <Hero />
        <Web />
        <Features />
        <Testimonial />
      </main>
      <footer className="z-5">
        <div className=" flex bg-linear-to-b from-green-400 to-gray-900 pt-40 pb-10 pl-20 w-full">
          <p className="text-amber-100">Created by Aditya Singh</p>
        </div>
      </footer>
    </div>
  );
}
