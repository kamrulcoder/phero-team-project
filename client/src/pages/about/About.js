import React from "react";
import HeaderSecion from "../../components/customComponents/headerSection/HeaderSecion";
import Header from "../../components/home/header-hasan/Header";
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
      <Header></Header>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="about-1-1.jpg"
              class="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Who Are We?</h1>
            <h3 class="fw-bold lh-1 mb-3">
              6amTech - Your Early Bird IT partner
            </h3>

            <p class="lead">
              6amTech is a Bangladeshi technology company that develop web,
              mobile, and computer software for its IT partner. They are selling
              software in partnership with Envato, the world's largest software
              marketplace. 6amTech is one of the fastest-growing software
              providers in codecanyon.
            </p>
            <ul>
              <li class="lead">Web application development.</li>
              <li class="lead">Mobile application development.</li>
              <li class="lead">UI/UX design.</li>
              <li class="lead">IT consultancy.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="about-2.png"
              class="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h3 class="fw-bold lh-1 mb-3">HOW WE DO?</h3>
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Our development lifecycle.
            </h1>
            <div class="lead">
              {dev_life_cycle.map((element) => (
                <>
                  <h4>{element[0]}</h4>
                  <p>{element[1]}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
