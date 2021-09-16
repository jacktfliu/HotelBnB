import React, { Fragment } from "react"
import {Link, withRouter} from 'react-router-dom'
import Search from "./search_container"

class SplashPage extends React.Component{
    constructor(props) {
        super(props)
    }

    redirectListing(location){
        this.props.updateFilter('location', location)
        this.props.history.push(`/listings`) 
    }

    render(){
        return (  
            <div>
                <Search/>
                <div className='icon-cards'>
                    <div className='cities'>Explore cities </div>
                        <div className='explore-wrapper'>
                            <div className='explore'>
                                <div className='city-row-wrapper'>
                                    <div className='city-content'>
                                        <div onClick={this.redirectListing.bind(this, "NewYorkCity")} className='first-splash-box'>
                                            <div className='first-splash-image1'></div>
                                            <div className='first-splash-word'>
                                                <h1>New York City</h1>
                                                <p>The big apple</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectListing.bind(this, "Miami")} className='first-splash-box'>
                                            <div className='first-splash-image2'></div>
                                            <div className='first-splash-word'>
                                                <h1>Miami</h1>
                                                <p>Miami's for Me</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectListing.bind(this, "LasVegas")} className='first-splash-box'>
                                            <div className='first-splash-image3' ></div>
                                            <div className='first-splash-word'>
                                                <h1>Las Vegas</h1>
                                                <p>What happens in vegas</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div  className='city-content'>
                                        <div onClick={this.redirectListing.bind(this, "LosAngeles")} className='first-splash-box'>
                                            <div className='first-splash-image4'></div>
                                            <div className='first-splash-word'>
                                                <h1>Los Angeles</h1>
                                                <p>The city of angels</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectListing.bind(this, "AtlanticCity")} className='first-splash-box'>
                                            <div className='first-splash-image5'></div>
                                            <div className='first-splash-word'>
                                                <h1>Atlantic City</h1>
                                                <p>The world's playground</p>
                                            </div>
                                        </div>
                                        <div  onClick={this.redirectListing.bind(this, "Chicago")} className='first-splash-box'>
                                            <div className='first-splash-image6' ></div>
                                            <div className='first-splash-word'>
                                                <h1>Chicago</h1>
                                                <p>The windy city</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>        
            </div>    
        )
    }   
}  


export default withRouter(SplashPage)