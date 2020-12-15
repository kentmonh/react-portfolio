import React from "react"
import '../style/components/Hero.scss';


function SocialMediaItem(props) {
  return (
    <div class="m-4">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className={props.className} />
      </a>
    </div>
  )
}

function Hero(props) {
  return (
    <div id="hero">
      <div class="Hero">
        <p class="title-text-on-black">Hi, I'm <span class="yellow-text">Minh Nguyen</span> <br />
          I do not just code. I <span class="yellow-text">solve problems.</span></p>

        <div class="mt-4">
          <div class="row">
            <SocialMediaItem link="mailto:mnguyen2606@gmail.com" className="fa fa-envelope fa-2x icon" />
            <SocialMediaItem link="https://www.linkedin.com/in/mnguyen43/" className="fa fa-linkedin fa-2x icon" />
            <SocialMediaItem link="https://github.com/kentmonh" className="fa fa-github fa-2x icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;