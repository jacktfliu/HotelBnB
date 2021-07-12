import React from 'react'
import {Link} from 'react-router-dom'


const BackgroundBody = () => {
    return(
        <div className='splash-container'>
            
            <div className='background-word'>Not sure where to go? Perfect.</div>
            <Link to='/listings' className='suprise-me'>Suprise me</Link>
           
        </div>
    )
}

export default BackgroundBody