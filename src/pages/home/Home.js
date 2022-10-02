import React from "react";

import homeImage from "../../assests/images/home-page-image.svg";
import { CreateEventButton, HomeContainer } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <div className="show-on-desktop">
        <img src={homeImage} alt="event-details" />
      </div>
      <div>
        <header>
          <h1 className="text-center">
            Imagine if <br />
            <span>Snapchat</span> <br />
            had events.
          </h1>
          <p className="text-center">
            Easily host and share events with your friends across any social
            media.
          </p>
        </header>
        <section className="home-page-image">
          <img src={homeImage} alt="event-details" />
        </section>
        <section className="create-event">
          <CreateEventButton>🎉 Create my event</CreateEventButton>
        </section>
      </div>
    </HomeContainer>
  );
};

export default Home;
