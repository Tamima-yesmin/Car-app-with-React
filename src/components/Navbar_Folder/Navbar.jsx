import React from 'react'
import { NavLink } from 'react-router-dom';
import navPic from '../Navbar_Folder/NavImages/logo.png';


export default function Navbar() {


    // const burger = document.querySelector('.burger');
    // const nav = document.querySelector('#menuNav li');

    // burger.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    // });



    return (
        <>
            <nav className="navbar  navbar-expand-lg  ">
                {/* <div className="burger  ">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> */}

                {/* <div>
               <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
           </div> */}

                <NavLink className="navbar-brand  m-auto" to="/" >
                    <img src={navPic} className="nav-img " />
                </NavLink>
                <ul className=" navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink class="nav-link" to="#"><i class="fas fa-search  rounded-circle"></i> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#"> <i class="fas fa-shopping-cart rounded-circle"></i> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin"> <i class="far fa-user-circle rounded-circle"></i> </NavLink>
                    </li>
                </ul>



            </nav>

            <hr />

            <nav className="navbar  navbar-expand-lg  " id="menuNav">
                <ul className=" navbar-nav ml-auto">
                    <li className="nav-item  text-center" >
                        <NavLink exact activeClassName="menu-active" className="nav-link" to="/about">About </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink activeClassName="menu-active" className="nav-link" to="/contact"> Contact </NavLink>
                    </li>
                </ul>


            </nav>


        </>
    )

}


