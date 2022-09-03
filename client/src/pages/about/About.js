import React from "react";
import styles from "./about.module.css";

function About() {
  const dev_life_cycle = [
    [
      "Requirements Gathering & Analysis",
      "In the First step, We gather and identifies the current problem, after we analysis requirements and customer expectations.",
    ],
    [
      "Software Design",
      "In this design phase of work, the team makes software design decisions regarding the architecture and make of the software solution.",
    ],
    [
      "Software Development",
      "In this stage of work, teams build the software solutions based on the design decisions made",
    ],
    [
      "Test and Integration",
      "In this stage of work, We test different parts of the application to work seamlessly together and the performance.",
    ],
  ];
  return (
    <>
      <div className="d-flex w-50">
        <div>
          <h2>Who Are We?</h2>
          <h3>6amTech - Your Early Bird IT partner</h3>
          <p>
            6amTech is a Bangladeshi technology company that develop web,
            mobile, and computer software for its IT partner. They are selling
            software in partnership with Envato, the world's largest software
            marketplace. 6amTech is one of the fastest-growing software
            providers in codecanyon.
          </p>
          <p>
            6amTech was founded by Sultan Mahamud and Nipon Roy in 2020 to
            develop and sell software licenses for entrepreneurs and start-ups.
            Their main goal was to provide software to entrepreneurs at a low
            cost.
          </p>
          <ul>
            <li>Web application development.</li>
            <li>Mobile application development.</li>
            <li>UI/UX design.</li>
            <li>IT consultancy.</li>
          </ul>
        </div>
        <div className="w-50">
          <img className="overlap-grid" src="about-1-1.jpg" alt="" />
          <img className="overlap-grid-2" src="about-1-2.jpg" alt="" />
        </div>

      </div>

      <h3>HOW WE DO?</h3>
      <h2>Our development lifecycle.</h2>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            {dev_life_cycle.map((element) => (
              <>
                <h4>{element[0]}</h4>
                <p>{element[1]}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
