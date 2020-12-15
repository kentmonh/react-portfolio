import React from "react"
import jsa1 from '../images/jsa-1-7.5.png';
import '../style/components/Experience.scss';
import '../style/main/text.scss';


function Experience(props) {
  return (
    <div id="experience">

      <div class="mb-5">
        <h2 class="title-text">Experience</h2>
      </div>

      <div class="row">

        <div class="col-lg-6 order-lg-2">
          <img src={jsa1} class="img-fluid" alt="JSA Bubble Game" />
        </div>

        <div class="col-lg-6 order-lg-1 my-auto">
          <h2 class="display-4">Jeux Sam Amuse</h2>
          <p class="text">
            Jeux Sam Amuse is a French learning website used by Kindergarten to Grade 4 students and teachers of French all over Canada. <br />
            I was transfer 2 games from Flash to HTML5 for the site. I also create some new games and tools for teachers. I used JavaSciprt and Pixi.js Engine to transfer the games.
          </p>
          <code>JavaScript, PixiJs</code>
        </div>

      </div>

    </div>
  )
}

export default Experience;