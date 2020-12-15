import React from "react"
import '../style/components/About.scss';
import portrait from '../images/portrait.JPG';

import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProcessBar(props) {
  return (
    <div>
      <div class="row mb-3 mb-md-0">
        <div class="col-md-2">
          <p class="content-text-on-white">{props.name}</p>
        </div>
        <div class="col-md-10 pt-2">
          <ProgressBar animated now={props.percentage} variant={"black"} />
        </div>
      </div>
    </div>
  )
}

function About(props) {
  return (
    <div class="About" id="about">
      <div class="m-5">
        <h2 class="title-text-on-white">About Me</h2>
      </div>

      <div class="row m-5">
        <div class="col-md-3 p-5 p-md-3">
          <img src={portrait} class="img-fluid" alt="Portrait" />
        </div>

        <div class="col-md-8 offset-md-1">
          <p class="content-text-on-white">
            I am a developer from Winnipeg, Canada, a recent BIT Program Red River College graduate. <br />
            I have serious passion for solving problems and bringing products to life. I spent past 3+ years learning and doing accross different technology. <br />
          </p>

          <ProcessBar name="HTML" percentage="75" />
          <ProcessBar name="SCSS" percentage="75" />
          <ProcessBar name="JavaScript" percentage="80" />
          <ProcessBar name="React" percentage="60" />
          <ProcessBar name="Ruby on Rails" percentage="80" />
          <ProcessBar name="Java" percentage="70" />
          <ProcessBar name="PHP" percentage="70" />
          <ProcessBar name="C# / .NET" percentage="60" />
          <ProcessBar name="Python" percentage="60" />

          <p class="content-text-on-white mt-5">
            Out of the office I play piano, workout, take photos, and read fiction books.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About;