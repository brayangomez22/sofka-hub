import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Link className="logo" to="/"><img src="" alt=""/></Link>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Abaut</a></li>
            </ul>
        </header>
    )
}


export default Header;