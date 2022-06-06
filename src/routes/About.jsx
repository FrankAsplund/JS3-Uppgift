import React from "react";
import "./routes.css";
import Card from "../components/Card/Card";

import bollHome from "../components/assets/bollHome.JPG";
import CVSkaparenIndex from "../components/assets/CVSkaparenIndex.JPG";
import teamAIndex from "../components/assets/teamAIndex.JPG";

function About() {
  return (
    <div className="postContainer">
      <div>
        <h1 style={{ color: "black", padding: "2rem" }}>
          Här är ett par av mina projekt, och lite om mig
        </h1>

        <Card
          title="Boll.se"
          imageUrl={bollHome}
          body="Gruppuppgift för Javascript 2. Mycket Javascript, en del HTML och självklart responsiv CSS. 
          Single-page application."
          link="https://github.com/FrankAsplund/JS2Grupp9"
        />
        <Card
          title="CV-skaparen.se"
          imageUrl={CVSkaparenIndex}
          body="Individuell uppgift för HTML och CSS-kursen. Består av en del Javascript, samt HTML och CSS."
        />
        <Card
          title="TeamA.se"
          imageUrl={teamAIndex}
          body="Gruppuppgift för Arbetsmetodik 2. Består av mycket Javascript, HTML och CSS."
        />
      </div>
    </div>
  );
}

export default About;
