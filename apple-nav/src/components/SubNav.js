import React from 'react';
import { NavLink } from 'react-router-dom';

class SubNav extends React.Component {

    render() {
        return(
            <div className="sub-nav">
                <ul className="sub-nav-bar">
                    <li>
                        <NavLink exact to="/macbook">MacBook</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SubNav;