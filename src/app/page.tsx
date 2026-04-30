import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
