import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    state =  {
        collapse : false
    }

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light mx-auto text-center'>
                <Link className='navbar-brand' to="/"></Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle="collapse" 
                    data-target="#navbarNav"
                    aria-controls='navbarNav'
                    aria-expanded="true"
                    aria-label='Toggle navigation'
                >
                    <span 
                        className="navbar-toggler-icon"
                        onClick={()=>{
                            this.setState({
                                collapse : !this.state.collapse
                            });
                            console.log(this.state.collapse)
                        }}></span>

                </button>
                <div className={this.state.collapse?'collapse navbar-collapse show text-center pt-3':'collapse navbar-collapse'}></div>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link className='nav-link' to="/">All Student</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/add">Add Student</Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Header;
