import React from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {

    const myState = useSelector((state) => state.handleCart);

    console.log(myState);
    console.log(myState.length);

    var totalQty=0;

    myState.map((product)=>{
        totalQty+=product.qty;
    });


    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm bg-white py-3">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">Shopify</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    </ul>

                    <div className="buttons">
                       
                        <NavLink to="/cart" className='btn btn-outline-dark'>
                        <i className="fa fa-shopping-cart me-1"></i>
                        {/* Cart({myState.length}) */}
                        Cart{{totalQty}}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
