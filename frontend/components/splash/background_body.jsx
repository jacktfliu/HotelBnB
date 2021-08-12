import React from 'react'
import {Link} from 'react-router-dom'


const BackgroundBody = () => {
    return(
        <div className='splash-container'>
            <div className='filter-box'>
                <div className='filter-container'>
                    <button className='filter-button-search'>
                        <span>Where are you going?</span>
                    </button>
                    <span></span>
                    <input type='date' className='filter-buttons'/>
                    <span></span>
                    <input type='date' className='filter-buttons'/>
                    <span></span>
                    <button className='filter-button-guest'>Guest</button>
                    <span></span>
                    <Link to='/listings' className='filter-buttons-search'><i className="fas fa-search"></i></Link>
                </div>
            </div>
            <div className='suprise-me-container'> 
                <Link to='/listings' className='suprise-me'>Suprise me</Link>
            </div>
        </div>
    )
}

export default BackgroundBody