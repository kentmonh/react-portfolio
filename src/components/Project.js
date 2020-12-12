import React from "react"
import jsaBubble from '../images/jsa-bubble.png';
import '../style/components/Project.scss';


function Project(props) {
  return (
    <div id="project">

      <div class="row">

        <div class="col-lg-6 order-lg-2 project-img">
          <img src={jsaBubble} class="img-fluid" alt="JSA Bubble Game" />
        </div>

        <div class="col-lg-6 order-lg-1 my-auto">
          <h2 class="display-4">Project 1</h2>
          <p class="lead">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>

      </div>

    </div>
  )
}

export default Project;