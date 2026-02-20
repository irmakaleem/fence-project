import React, { useCallback, useState } from "react";

import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import HeroHomeTwo from "./HeroHomeTwo";
import ReadyToStartHome2 from "./ReadyToStartHome2";

const HomeTwo: React.FC = () => {
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
      <HeroHomeTwo />
      <ReadyToStartHome2 />
      {/* <ReviewSection /> */}
      <Footer />
    </main>
  );
};

export default HomeTwo;
