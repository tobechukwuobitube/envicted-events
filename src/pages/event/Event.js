import React from "react";
import { ImCalendar } from "react-icons/im";
import { BsChevronCompactRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import EventImage from "../../assests/images/event-image.svg";
import {
  EventContainer,
  EventDetails,
  EventImageContainer,
  EventInfo,
  EventTimeIcon,
  EventTitle,
} from "./EventStyles";

const Event = () => {
  return (
    <EventContainer>
      <EventImageContainer className="event-image-container">
        <img src={EventImage} alt="event" />
      </EventImageContainer>
      <EventDetails>
        <EventTitle>
          <h1 className="color-primary-1">Birthday Bash</h1>
          <p>
            Hosted by <strong>Elysia</strong>
          </p>
        </EventTitle>

        <EventInfo>
          <div style={{ display: "flex" }}>
            <EventTimeIcon>
              <ImCalendar />
            </EventTimeIcon>
            <div>
              <p>
                18 August 6:00PM <br />
                <span>
                  to <strong>19 August 1:00PM </strong>UTC+10
                </span>
              </p>
            </div>
          </div>
          <div>
            <BsChevronCompactRight />
          </div>
        </EventInfo>

        <EventInfo>
          <div style={{ display: "flex" }}>
            <EventTimeIcon>
              <IoLocationOutline />
            </EventTimeIcon>
            <div>
              <p>
                Street name <br />
                <span>Suburb, State, PostCode</span>
              </p>
            </div>
          </div>
          <div>
            <BsChevronCompactRight />
          </div>
        </EventInfo>
      </EventDetails>
    </EventContainer>
  );
};

export default Event;
