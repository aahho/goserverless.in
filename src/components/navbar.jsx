import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                <Link to='/'>Link2</Link>
                <Link to='/blog'>Link2</Link>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
                <a href="#">Link4</a>
            </div>
        )
    }
}

export default Navbar