import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {korSelect} from "../../redux/korzinaSlice.js";

const NavBar = () => {
    const {korzina} = useSelector(korSelect)
    return (
        <div style={{display: 'flex', columnGap: '100px'}}>
            <div>
                <NavLink className='link' to={'/'}>Home</NavLink>
            </div>
            <div>
                <NavLink className='link' to={'/korzina'}>Korzina  {korzina.length}</NavLink>
            </div>
        </div>
    );
};

export default NavBar;