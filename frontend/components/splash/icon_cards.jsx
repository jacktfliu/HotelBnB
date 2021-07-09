import React from 'react'
import { Link } from 'react-router-dom'

const IconCards = () => {
    return (
        <div>
            <div>
                <div className='cities'>Explore cities </div>
                <div className='explore'>
                    <div className='first-splash'>
                        <Link to={`listings`} className='splash-newyork'>New York</Link>
                        <Link to={`listings`} className='splash-philly'>Philadelphia</Link>
                        <Link to={`listings`} className='splash-virginia'>Virginia Beach</Link>
                        <Link to={`listings`} className='splash-vegas'>Las Vegas</Link>
                        <Link to={`listings`} className='splash-boston'>Boston</Link>
                        <Link to={`listings`} className='splash-florida'>Florida</Link>
                    </div>
                </div>
            </div>

            <div>
                <div className='live-anywhere'>Live Anywhere</div>
                <div className='anywhere'>
                    <div className='second-splash'>
                        <Link to={`listings`} className='splash-outdoor'>Outdoor getaways</Link>
                        <Link to={`listings`} className='splash-unique'>Unique Stays</Link>
                        <Link to={`listings`} className='splash-pets'>Pets allowed</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IconCards