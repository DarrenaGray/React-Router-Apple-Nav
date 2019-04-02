import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubNav from './SubNav';

class NavWrapper extends React.Component {


    render() {
        return (
            <div className="nav-wrapper">
                <ul className="nav-bar">
                <FontAwesomeIcon icon={['fab', 'apple']} color="white" size="lg" />
                    <li>
                        <NavLink to="/mac">Mac</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ipad">iPad</NavLink>
                    </li>
                    <li>
                        <NavLink to="/iphone">iPhone</NavLink>
                    </li>
                    <li>
                        <NavLink to="/watch">Watch</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv">TV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/support">Support</NavLink>
                    </li>
                </ul>
                <Route path='/' component={SubNav}/>
            </div>
        )
    }
}

export default NavWrapper;