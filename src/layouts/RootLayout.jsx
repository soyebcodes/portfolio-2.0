import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";

const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default RootLayout;
