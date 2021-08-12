import React from 'react'
import { Link } from 'react-router-dom'

const IconCards = () => {
    return (
        <div className='icon-cards'>

            <div className='cities'>Explore cities </div>
            <div className='explore-wrapper'>
                <div className='explore'>
                    <div className='city-row-wrapper'>
                        <div className='city-content'>
                            <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image'>
                                    <div className='newyork'></div>
                                </div>
                                <span className='first-splash-word'>New York</span>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <span className='first-splash-image'></span>
                                <span className='first-splash-word'>Boston</span>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <span className='first-splash-image' ></span>
                                <span className='first-splash-word'>Las Vegas</span>
                            </Link>
                        </div>
                        <div className='city-content'>
                             <Link to={`listings`} className='first-splash-box'>
                                <span className='first-splash-image'></span>
                                <span className='first-splash-word'>Florida</span>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <span className='first-splash-image'></span>
                                <span className='first-splash-word'>Philadelphia</span>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <span className='first-splash-image'></span>
                                <span className='first-splash-word'>Virginia Beach</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IconCards