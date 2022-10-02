import React from "react";

import homeImage from "../../assests/images/home-page-image.svg";
import { CreateEventButton, HomeContainer } from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
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
      <section>
        <img src={homeImage} alt="event photo" />
      </section>
      <section>
        <CreateEventButton>🎉 Create my event</CreateEventButton>
      </section>
    </HomeContainer>
  );
};

export default Home;
