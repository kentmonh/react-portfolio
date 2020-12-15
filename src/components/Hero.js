import React from "react"
import '../style/components/Hero.scss';
import '../style/main/link.scss';
import '../style/main/text.scss';


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
        <p class="title-text">Hi, I'm Minh Nguyen <br />
          I do not just code. I solve problems.</p>

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