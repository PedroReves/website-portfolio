import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg_black">
        <Hero />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
