import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Hero>
      <Banner title="Oopsie.." subtitle="Not In Roshan's Data :-(">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
}
