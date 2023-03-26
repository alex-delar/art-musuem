import React from "react"
import { NavLink} from "react-router-dom"
import "./GalleryNavigation.css"

function GalleryNavigation ({ galleries }) {
  
    return(
        <nav>
            <h2>Galleries</h2>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>

                {galleries.map(gallery => (
                <li key={gallery.id}>
                <NavLink activeClassName='active'  to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                </li>))}
            </ul>
        </nav>
    )
}

export default GalleryNavigation