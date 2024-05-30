import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { selectCartTotalItems } from '../../../redux/cartSlice';
import { useSelector } from 'react-redux';

function Navbar() {
    const totalItems = useSelector(selectCartTotalItems);
    function submitSearch(e) {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="logo">ShopArea</h2>
                <ul className="menu d-flex">
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} >Contact</Link>
                    </li>
                    <li>
                        <Link to={"/login"} >Login</Link>
                    </li>
                    <li className='cart-icon'>
                        <span>{totalItems}</span>
                        <div className="nav-cart">
                             <Link to={'cart'}><FaCartShopping /></Link>
                        </div>
                    </li>
                </ul>
                <form onSubmit={submitSearch}>
                    <input type="search" name="" id="" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar;