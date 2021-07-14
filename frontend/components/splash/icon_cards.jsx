import React from 'react'
import { Link } from 'react-router-dom'

const IconCards = () => {
    return (
        <div className='icon-cards'>
            <div className='explore-wrapper'>
                <div className='cities'>Explore cities </div>
                <h1 className='explore'>
                    <div className='city-row-wrapper'>
                        <div className='city-content'>
                            <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image1'></div>
                                <div className='first-splash-word'>New York</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image2'></div>
                                <div className='first-splash-word3'>Boston</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image3' ></div>
                                <div className='first-splash-word'>Las Vegas</div>
                            </Link>
                        </div>
                        <div className='city-content'>
                             <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image4'></div>
                                <div className='first-splash-word3'>Florida</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image5'></div>
                                <div className='first-splash-word1'>Philadelphia</div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image6'></div>
                                <div className='first-splash-word2'>Virginia Beach</div>
                            </Link>
                        </div>
                    </div>
                </h1>
            </div>

            <div className='icon-cards'>
                <div className='explore-wrapper'>
                    <div className='cities'>Live anywhere</div>
                    <h1 className='explore'>
                        <div className='city-row-wrapper'>
                            <div className='city-content'>
                                <Link to={`listings`} className='second-splash-box'>
                                    <div className='second-splash-image1'></div>
                                    <div className='second-splash-word'>Unique stays</div>
                                </Link>
                                <Link to={`listings`} className='second-splash-box'>
                                    <div className='second-splash-image2'></div>
                                    <div className='second-splash-word'>Outdoor getaway</div>
                                </Link>
                                <Link to={`listings`} className='second-splash-box'>
                                    <div className='second-splash-image3'></div>
                                    <div className='second-splash-word'>Pets allowed</div>
                                </Link>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>

            <div className='footer-container'>

            </div>
        </div>
    )
}

export default IconCards