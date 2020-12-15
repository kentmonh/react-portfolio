import React from "react"
import jsa1 from '../images/jsa-1-7.5.png';
import '../style/components/Experience.scss';


function Experience(props) {
  return (
    <div id="experience">
      <div class="Experience">

        <div class="m-5">
          <h2 class="title-text-on-white">Experience</h2>
        </div>

        <div class="row m-5">

          <div class="col-lg-6 order-lg-2">
            <img src={jsa1} class="img-fluid" alt="JSA Bubble Game" />
          </div>

          <div class="col-lg-6 order-lg-1 my-auto">
            <h2 class="title-text-on-white m-5">Jeux Sam Amuse</h2>
            <p class="content-text-on-white">
              Jeux Sam Amuse is a French learning website used by Kindergarten to Grade 4 students and teachers of French all over Canada. <br />
            I was transfer 2 games from Flash to HTML5 for the site. I also create some new games and tools for teachers. I used JavaSciprt and Pixi.js Engine to transfer the games.
          </p>
            <p class="content-text-on-white mt-5">
              Techologies used: <br />
            JavaScript, PixiJs
          </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience;