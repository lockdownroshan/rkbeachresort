import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="delux rooms starting at Rs.2799"
        >
          <Link to="/rooms" className="btn-primary">
            R0$H@N'S room
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      
    </>
  );
}
