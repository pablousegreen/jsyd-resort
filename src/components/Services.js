import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam nobis facilis quisquam, aspernatur itaque officiis at corrupti illum ea deleniti ex, perspiciatis sequi non pariatur ut. Corrupti, adipisci doloribus."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam nobis facilis quisquam, aspernatur itaque officiis at corrupti illum ea deleniti ex, perspiciatis sequi non pariatur ut. Corrupti, adipisci doloribus."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Bear",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam nobis facilis quisquam, aspernatur itaque officiis at corrupti illum ea deleniti ex, perspiciatis sequi non pariatur ut. Corrupti, adipisci doloribus."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam nobis facilis quisquam, aspernatur itaque officiis at corrupti illum ea deleniti ex, perspiciatis sequi non pariatur ut. Corrupti, adipisci doloribus."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
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
