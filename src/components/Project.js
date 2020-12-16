import React from "react"
import '../style/components/Project.scss';



function Item(props) {
  return (
    <div class="row m-5">
      <div className={`col-lg-6 ${props.index}`}>
        <img src={require(`../images/${props.image}.png`).default} class="img-fluid" alt={props.image} />
      </div>

      <div class="col-lg-6">
        <h2 class="title-text-on-black mb-5">{props.title}</h2>
        <p class="content-text-on-black">
          {props.content1} <br />
          {props.content2}
        </p>
        <p class="content-text-on-black mt-5">
          Techologies used: <br />
          {props.technology}
        </p>

        <div class="row">
          <div class="m-3">
            <a href="https://github.com/kentmonh/ecommer" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning" role="button" aria-pressed="true">Github</a>
          </div>
          <div class="m-3">
            <a href="https://fragrance-ecommer.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning" role="button" aria-pressed="true">Live Preview</a>
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

        <div class="m-5">
          <h2 class="title-text-on-black">Projects</h2>
        </div>

        <Item title="Ecommer Fragrance Site" index="order-lg-2" image="project1"
          content1="Developed an full features ecommerce website from scratch using Ruby on Rails."
          content2="The functions of website are using devise to manage admin and back end stuff, users register, search products, create the cart for every customer, create and pay order using Stripe."
          technology="Ruby on Rails, HTML, Bootstrap, Stripe" />

      </div>
    </div>
  )
}

export default Project;