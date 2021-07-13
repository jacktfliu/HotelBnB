import React from 'react'
import { Link } from 'react-router-dom'

const IconCards = () => {
    return (
        <div className='icon-cards'>
            <div className='explore-wrapper'>
                <div className='cities'>Explore cities </div>
                <div className='explore'>
                    <div className='city-row-wrapper'>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-words' to={`listings`}>New York</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-word' to={`listings`}>Philadelphia</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-word' to={`listings`}>Virginia Beach</Link>
                            </div>
                        </div>
                    </div>

                    <div className='city-row-wrapper'>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-word' to={`listings`}>Las Vegas</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-word' to={`listings`}>Boston</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-word' to={`listings`}>Florida</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icon-cards'>
                <div className='live-anywhere-wrapper'>
                    <div className='live-anywhere'>Live Anywhere</div>
                        <div className='anywhere'>
                            <div className='live-anywhere-row'>
                                <div className='second-splash-box'>
                                    <div className='second-splash-image'>
                                    </div>
                                        <Link className='second-splash-word' to={`listings`}>Outdoor getaways</Link>
                                </div>
                                <div className='second-splash-box'>
                                    <div className='second-splash-image'>
                                    </div>
                                        <Link className='second-splash-word' to={`listings`}>Unique Stays</Link>
                                </div>
                                <div className='second-splash-box'>
                                    <div className='second-splash-image'>
                                    </div>
                                        <Link className='second-splash-word' to={`listings`}>Pets allowed</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default IconCards