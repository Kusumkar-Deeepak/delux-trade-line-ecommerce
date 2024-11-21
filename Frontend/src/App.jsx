import EcommerceNavbar from "./component/EcommerceNavbar"; // Adjust the path as per your folder structure
import HeroSection from "./component/Hero"; // Adjust the path as per your folder structure
import EcommerceFooter from "./component/EcommerceFooter"; // Adjust the path as per your folder structure

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <EcommerceNavbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center">
        <HeroSection />
      </main>

      {/* Footer */}
      <EcommerceFooter />
    </div>
  );
};

export default Home;
