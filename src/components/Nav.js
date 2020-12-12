import React from "react"

function Item(props) {
    return (
        <div>        
            <li class="nav-item">
                <a class="nav-link lead" href={props.link}>/{props.name}</a>
            </li>
        </div>
    )
}
 
function Nav(props) {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-sm justify-content-center">
                <ul class="navbar-nav">
                    <Item link="#" name="about" />
                    <Item link="#" name="projects" />
                    <Item link="#" name="download-resume" />
                </ul>
            </nav>
        </div>
    )
}
 
export default Nav;