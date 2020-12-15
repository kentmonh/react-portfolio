import React from "react"
import '../style/components/Project.scss';


function Project(props) {
  return (
    <div id="project">

      <div class="row">

        <div class="col-lg-6 order-lg-1 my-auto">
          <h2 class="display-4">Jeux Sam Amuse</h2>
          <p class="lead">
            Jeux Sam Amuse is a French learning website used by Kindergarten to Grade 4 students and teachers of French all over Canada.
            I was transfer 2 games from Flash to HTML5 for the site. I also create some new games and tools for teachers. I used JavaSciprt and Pixi.js Engine to transfer the games.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Project;