// Link replaced with <a> for static export compatibility
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar locale="en" />
      <HomePage />
      <Footer locale="en" />
    </div>
  );
}
