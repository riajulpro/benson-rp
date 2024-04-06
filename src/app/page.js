import About from "@/components/ui/About";
import Buy from "@/components/ui/Buy";
import Dex from "@/components/ui/Dex";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Note from "@/components/ui/Note";
import Token from "@/components/ui/Token";

const Home = () => {
  return (
    <main className="overflow-x-auto">
      <Header />
      <About />
      <Note />
      <Buy />
      <Token />
      <Dex />
      <Footer />
    </main>
  );
};

export default Home;
