import React, { useCallback, useState } from "react";
import Hero from "./Hero";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ReviewSection from "./ReviewSection";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);
  return (
    <main className="w-full">
      <Header toggleMenu={toggleMenu} />

      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />

      {/* Hero Section */}
      <Hero />

      <SecondSection />
      <ThirdSection />
      <ReviewSection />
    </main>
  );
};

export default Home;
