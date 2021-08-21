import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = {minGuest: 1}
    }
    

    handleSubmit() {
        this.props.history.push('/listing')
    }

    handleChange(filter) {
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    }

    listingPage(location) {
        this.props.updateFilter('location', location)
        this.props.history.push('/listings')
    }

    randomListing(){
        let locations = ["NewYorkCity", "Miami", "Chicago", "LosAngeles", "LasVegas", "AtlanticCity"]
        let location = locations[Math.floor(Math.random() * locations.length)]
        this.props.updateFilter('location', location)
        this.props.history.push('/listings')
    }

    render() {
        return (
        <div className='splash-container'>
            <div className='filter-box'>
                <form onSubmit={this.handleSubmit.bind(this)} className='filter-container'>
                    <select className='filter-button-search'>
                        <option disabled selected>Where are you going?</option>
                        <option value='NewYorkCity' onClick={this.listingPage.bind(this, "NewYorkCity")}>New York City</option>
                        <option value='Miami' onClick={this.listingPage.bind(this, "Miami")}>Miami</option>
                        <option value='LasVegas' onClick={this.listingPage.bind(this, "LasVegas")}>Las Vegas</option>
                        <option value='LosAngeles' onClick={this.listingPage.bind(this, "LosAngeles")}>Los Angeles</option>
                        <option value='AtlanticCity' onClick={this.listingPage.bind(this, "AtlanticCity")}>Atlantic City</option>
                        <option value='Chicago' onClick={this.listingPage.bind(this, "Chicago")}>Chicago</option>
                    </select>           
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <select className='filter-button-guest'>
                        <option disabled selected>Guest</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                        <option value="5">5 guest</option>
                        <option value="6">6 guest</option>
                        <option value="7">7 guest</option>        
                    </select>
                    <span></span>
                    <div value='NewYorkCity' onClick={this.listingPage.bind(this, 'NewYorkCity')} className='filter-buttons-search'><i className="fas fa-search"></i></div>
                </form>
            </div>
            <div className='suprise-me-container'> 
                <div onClick={this.randomListing.bind(this)} className='suprise-me'>Suprise me</div>
            </div>
        </div>     
        )
    }
}

export default withRouter(Search);

