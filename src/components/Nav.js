import React from "react"
import '../style/components/Nav.scss';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

function Item(props) {
    return (
        <div>
            <li class="nav-item">
                <Link class="nav-link lead" to={props.link} spy={true} smooth={true} offset={50} duration={500}>/{props.name}</Link>
            </li>
        </div>
    )
}

function Nav(props) {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-sm justify-content-center">
                <ul class="navbar-nav">
                    <Item link="x" name="about" />
                    <Item link="project" name="projects" />
                    <Item link="z" name="download-resume" />
                </ul>
            </nav>
        </div>
    )
}

export default Nav;