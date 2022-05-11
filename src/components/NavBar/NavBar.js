import React from "react";
import {Link} from "react-router-dom";

function NavBar() {

    let userId = 1;

    return( // Buradaki linkler index.js deki linklerle aynı olmalı
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{pathname : '/users/' + userId}}>User</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;