import React from "react"
import '../style/components/Hero.scss';
import '../style/main/link.scss';


function SocialMediaItem(props) {
  return (
    <div class="m-4">
      <a href={props.link} target="_blank">
        <i className={props.className} />
      </a>
    </div>
  )
}

function Hero(props) {
  return (
    <div id="hero">
      <div class="Hero">
        <p class="display-4">Hi, I'm Minh Nguyen</p>
        <p class="display-4">I do not just code. I solve problems.</p>

        <div class="mt-4">
          <div class="row">
            <SocialMediaItem link="mailto:mnguyen2606@gmail.com" className="fa fa-envelope fa-2x" />
            <SocialMediaItem link="https://www.linkedin.com/in/mnguyen43/" className="fa fa-linkedin fa-2x" />
            <SocialMediaItem link="https://github.com/kentmonh" className="fa fa-github fa-2x" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;