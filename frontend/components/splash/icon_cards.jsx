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
                                <div className='first-splash-word'>
                                    <h1>New York City</h1>
                                    <p>The big apple</p>
                                </div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image2'></div>
                                <div className='first-splash-word'>
                                    <h1>Miami</h1>
                                    <p>Miami's for Me</p>
                                </div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image3' ></div>
                                <div className='first-splash-word'>
                                    <h1>Las Vegas</h1>
                                    <p>What happens in vegas</p>
                                </div>
                            </Link>
                        </div>
                        <div className='city-content'>
                             <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image4'></div>
                                <div className='first-splash-word'>
                                    <h1>Los Angeles</h1>
                                    <p>The city of angels</p>
                                </div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image5'></div>
                                <div className='first-splash-word'>
                                    <h1>Atlantic City</h1>
                                    <p>The world's playground</p>
                                </div>
                            </Link>
                           <Link to={`listings`} className='first-splash-box'>
                                <div className='first-splash-image6'></div>
                                <div className='first-splash-word'>
                                    <h1>Chicago</h1>
                                    <p>The windy city</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IconCards