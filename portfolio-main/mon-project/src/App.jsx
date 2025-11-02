import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./Components/Nav.jsx";
import Header from "./Components/Header.jsx";
import Skils from "./Components/Skils.jsx";
import Proficiency from "./Components/Proficiency.jsx";
import Project from "./Components/Project.jsx";
import Footer from "./Components/Footer.jsx";
import Spinner from "./Components/Spinner.jsx"; // ✅ اللودر الجديد
import ScrollToTop from "./Components/ScrollToTop.jsx";


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // يخليه يختفي بسلاسة
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            transition: "opacity 0.5s ease",
            opacity: fadeOut ? 0 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background: "#f0f0f0",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div>
          <Nav />
          <Header />
          <Skils />
          <Proficiency />
          <Project />
          <Footer />
        </div>
      )}
      {!loading && <ScrollToTop />}
    </>
  );
}

export default App;
