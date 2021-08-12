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
                                <div className='first-splash-image1'></div>
                                <div className='first-splash-word'>New York City</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image2'></div>
                                <div className='first-splash-word'>Miami Beach</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image3' ></div>
                                <div className='first-splash-word'>Las Vegas</div>
                            </Link>
                        </div>
                        <div className='city-content'>
                             <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image4'></div>
                                <div className='first-splash-word'>Los Angeles</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image5'></div>
                                <div className='first-splash-word'>Atlantic City</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image6'></div>
                                <div className='first-splash-word'>Chicago</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IconCards