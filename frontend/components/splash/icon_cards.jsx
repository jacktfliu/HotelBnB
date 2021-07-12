import React from 'react'
import { Link } from 'react-router-dom'

const IconCards = () => {
    return (
        <div className='icon-cards'>
            <div>
                <div className='cities'>Explore cities </div>
                <div className='explore'>
                    <div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-words' to={`listings`}>New York</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-image' to={`listings`}>Philadelphia</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-image' to={`listings`}>Virginia Beach</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-image' to={`listings`}>Las Vegas</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-image' to={`listings`}>Boston</Link>
                            </div>
                        </div>
                        <div className='first-splash-box'>
                            <div className='first-splash-image'>
                                <Link className='first-splash-image' to={`listings`}>Florida</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icon-cards'>
                <div className='live-anywhere'>Live Anywhere</div>
                <div className='anywhere'>
                    <div>
                        <div className='second-splash-box'>
                            <div className='second-splash-image'>
                                <Link to={`listings`}>Outdoor getaways</Link>
                            </div>
                        </div>
                         <div className='second-splash-box'>
                            <div className='second-splash-image'>
                                <Link to={`listings`}>Unique Stays</Link>
                            </div>
                        </div>
                         <div className='second-splash-box'>
                            <div className='second-splash-image'>
                                <Link to={`listings`}>Pets allowed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IconCards