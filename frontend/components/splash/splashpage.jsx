import React from "react"
import {Link} from 'react-router-dom'

class SplashPage extends React.Component{
    render(){
        return (
        <div>
            <div className='splashpage'>
                <div className="background-image"></div>
            </div>
            
            <div>
                <div className='cities'>Explore cities </div>
                <div className='explore'>
                    <div className='first-splash'>
                        <Link className='splash-newyork' onClick={() => click}>New York</Link>
                        <Link className='splash-philly'>Philadelphia</Link>
                        <Link className='splash-virginia'>Virginia Beach</Link>
                        <Link className='splash-vegas'>Las Vegas</Link>
                        <Link className='splash-boston'>Boston</Link>
                        <Link className='splash-florida'>Florida</Link>
                    </div>
                </div>
            </div>

            <div>
                <div className='live-anywhere'>Live Anywhere</div>
                <div className='anywhere'>
                    <div className='second-splash'>
                        <Link className='splash-outdoor'>Outdoor getaways</Link>
                        <Link className='splash-unique'>Unique Stays</Link>
                        <Link className='splash-pets'>Pets allowed</Link>
                    </div>
                </div>
            </div>

            
        </div>
        )
    }   
}  


export default SplashPage