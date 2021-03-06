import React from "react"
import '../style/components/Nav.scss';
import { Link } from 'react-scroll';

function Item(props) {
    return (
        <div>
            <li class="nav-item">
                <a href="/#" class="nav-link content-text-on-black">
                    <Link to={props.link} spy={true} smooth={true} offset={50} duration={500}>/{props.name}</Link>
                </a>
            </li>
        </div>
    )
}

function Nav(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-sm justify-content-center">
                <ul class="navbar-nav">
                    <Item link="hero" name="home" />
                    <Item link="about" name="about" />
                    <Item link="experience" name="experience" />
                    <Item link="project" name="projects" />
                    <a href="resume/Minh Nguyen - Resume.pdf" download="Minh Nguyen - Resume.pdf" class="nav-link content-text-on-black">
                        /download-resume
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;