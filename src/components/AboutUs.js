import { useState } from "react";
import useOnline from "../hooks/useOnline";
import AccordianCard from "./AccordianCard";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  const [showCard, setShowCard] = useState("acc1");
  const isOnline = useOnline();

  return isOnline ? (
    <>
      <div className="aboutus-container">
        <h1>About Us</h1>
        <h3>
          Hi this is the about us page of food delivering app demo website
        </h3>
      </div>
      <div>
        <UserContext.Provider
          value={{ username: "sam", email: "sam@xyz.com", phoneNo: "237474" }}
        >
          <AccordianCard
            isVisible={showCard === "acc1"}
            showAccordian={(name) => setShowCard(name)}
            accName="acc1"
          >
            “I'm selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can't handle
            me at my worst, then you sure as hell don't deserve me at my best.”
            ― Marilyn Monroe
          </AccordianCard>
          <AccordianCard
            isVisible={showCard === "acc2"}
            showAccordian={(name) => setShowCard(name)}
            accName="acc2"
          >
            “Two things are infinite: the universe and human stupidity; and I'm
            not sure about the universe.”
          </AccordianCard>
          <AccordianCard
            isVisible={showCard === "acc3"}
            showAccordian={(name) => setShowCard(name)}
            accName="acc3"
          >
            “You've gotta dance like there's nobody watching, Love like you'll
            never be hurt, Sing like there's nobody listening, And live like
            it's heaven on earth.”
          </AccordianCard>
        </UserContext.Provider>
      </div>
    </>
  ) : (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>Please check your internet connection</p>
    </div>
  );
};

export default AboutUs;
