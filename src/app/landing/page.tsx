import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Landing() {
    return (
        <>
            <section className="min-h-screen min-w-screen flex overflow-hidden">
                <Navbar />
                <Hero />
            </section>
            <section>
            </section>
        </>
    );
  }