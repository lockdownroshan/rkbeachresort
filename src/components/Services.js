import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "We provide free cocktails 24X7. Each and every day!!!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "The whole place is surrounded by Valley and river. In Roshan's property, Enjoy the endless beauty of nature",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Ride",
        info: "Within 30 km of radius, We provide free ride around the city. ",
      },
      {
        icon: <FaBeer />,
        title: "Any Beverage",
        info:
          "Tea, Coffee, Snacks ... Have them all, Anytime ,In any proportion you like.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
