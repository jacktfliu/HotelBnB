import React from 'react'
import {Link} from 'react-router-dom'


const BackgroundBody = () => {
    return(
        <div className='splash-container'>
            <div className='filter-box'>
                <div className='filter-container'>
                    <button className='filter-buttons'>
                    <div>Where are you going?</div></button>
                    <span></span>
                    <input type='date' className='filter-buttons'/>
                    <span></span>
                    <input type='date' className='filter-buttons'/>
                    <span></span>
                    <button className='filter-buttons'>Guest</button>
                    <span></span>
                    <Link to='/listings' className='filter-buttons-search'><i class="far fa-search"></i></Link>
                </div>
            </div>
            <Link to='/listings' className='suprise-me'>Suprise me</Link>
           
        </div>
    )
}

export default BackgroundBody