import React from "react"
import '../style/components/Project.scss';


function Item(props) {
  return (
    <div class="row">
      <div className={`col-lg-6 ${props.background} ${props.index}`}>
        <div class="m-5">
          <img src={require(`../images/${props.image}.png`).default} class="img-fluid" alt={props.image} />
        </div>

      </div>

      <div className={`col-lg-6 ${props.background}`}>
        <div class="m-5">
          <h2 className={`mb-5 ${props.titleText}`}>{props.title}</h2>
          <p className={`${props.contentText}`}>
            {props.content1} <br />
            {props.content2}
          </p>
          <p className={`mt-5 ${props.contentText}`}>
            Techologies used: <br />
            {props.technology}
          </p>

          <div class="row">
            <div class="m-3">
              <a className={`btn ${props.button}`} href="https://github.com/kentmonh/ecommer" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="true">Github</a>
            </div>
            <div class="m-3">
              <a className={`btn ${props.button}`} href="https://fragrance-ecommer.herokuapp.com/" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="true">Live Preview</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

function Project(props) {
  return (
    <div id="project">
      <div class="Project">

        <div class="mt-5">
          <h2 class="title-text-on-black">Projects</h2>
        </div>

        <Item background="background-black" 
          index="order-lg-2" 
          image="project1" 
          titleText="title-text-on-black"
          contentText="content-text-on-black"
          button="btn-outline-warning"
          title="Ecommer Fragrance Site"
          content1="Developed an full features ecommerce website from scratch using Ruby on Rails."
          content2="The functions of website are using devise to manage admin and back end stuff, users register, search products, create the cart for every customer, create and pay order using Stripe."
          technology="Ruby on Rails, HTML, Bootstrap, Stripe" />

        <Item background="background-yellow"
          image="project1" 
          titleText="title-text-on-white"
          contentText="content-text-on-white"
          button="btn-outline-dark"
          title="Ecommer Fragrance Site"  
          content1="Developed an full features ecommerce website from scratch using Ruby on Rails."
          content2="The functions of website are using devise to manage admin and back end stuff, users register, search products, create the cart for every customer, create and pay order using Stripe."
          technology="Ruby on Rails, HTML, Bootstrap, Stripe" />

      </div>
    </div>
  )
}

export default Project;