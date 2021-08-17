import React from 'react'

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.listing          
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.action(this.state).then(
            (list) => this.props.history.push(`/listings/${list.listing.id}`)
        )
        // const formData = new FormData();
        // formData.append('post[title]', this.state.title);
        // if (this.state.photoFile) {
        //     formData.append('post[photo]', this.state.photoFile);
        // }
    }

    handleUpdate(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return(
            <div className='border-box-form'>
                <h1>{this.props.formType}</h1>
                <div className='share'>Host your place</div>
                <form onSubmit={this.handleSubmit}>
                    <div className='update-edit'>
                        <div className='create-listing-name-container'>
                            <p>Host name</p>
                            <h1>
                                What is your name?
                            </h1>
                            <input className='create-listing-name' 
                                onChange={this.handleUpdate('host_name')} 
                                type='text' 
                                value={this.state.host_name}
                            />
                        </div>
                        <div className='create-listing-title-container'>
                            <p>Title</p>
                            <h1>
                                Give your place a title.
                            </h1>
                            <input className='create-listing-title' 
                                onChange={this.handleUpdate('title')} 
                                type='text' 
                                value={this.state.title}
                            />
                        </div>

                        <div className='create-listing-price-container'>
                            <p>Price</p>
                            <h1>
                                What is your Price per day? 
                            </h1>
                            <input className='create-listing-price' 
                                onChange={this.handleUpdate('price')} 
                                type='text' 
                                value={this.state.price}
                            />
                        </div>

                        <div className='create-listing-description-container'>
                            <p>Describe your place</p>
                            <h1>
                                Give a little description of your place. 
                            </h1>
                            <textarea className='create-listing-description' 
                                onChange={this.handleUpdate('description')}  
                                value={this.state.description}
                            />
                        </div>

                        <div className='create-listing-location-container'>
                            <p>Location</p>
                            <h1>
                                What is your city location?
                            </h1>
                            <input className='create-listing-location' 
                                onChange={this.handleUpdate('location')} 
                                type='text' 
                                value={this.state.location}
                            />
                        </div>

                        <div className='create-listing-city-container'>
                            <p>City</p>
                            <h1>
                                What is your city?
                            </h1>
                            <input className='create-listing-city' 
                                onChange={this.handleUpdate('city')} 
                                type='text' 
                                value={this.state.city}
                            />
                        </div>

                        <div className='create-listing-bedroom-container'>
                            <p>Bedrooms</p>
                            <h1>
                                How many bedrooms do you have? 
                            </h1>
                            <input className='create-listing-bedroom' 
                                onChange={this.handleUpdate('bedroom')} 
                                type='text' 
                                value={this.state.bedroom}
                            />
                        </div>

                        <div className='create-listing-bathroom-container'>
                            <p>Bathrooms</p>
                            <h1>
                                How many bathrooms do you have?

                            </h1>
                            <input className='create-listing-bathroom' 
                                onChange={this.handleUpdate('bathroom')} 
                                type='text' 
                                value={this.state.bathroom}
                            />
                        </div>

                        <div className='create-listing-longitude-container'>
                            <p>Longitude</p>
                            <h1>
                                what is your longitude?
                            </h1>
                            <input className='create-listing-longitude' 
                                onChange={this.handleUpdate('longitude')} 
                                type='text' 
                                value={this.state.longitude}
                            />
                        </div>

                        <div className='create-listing-latitude-container'>
                            <p>Latitude</p>
                            <h1>
                                What is your latitude?
                            </h1>
                            <input className='create-listing-latitude' 
                                onChange={this.handleUpdate('latitude')} 
                                type='text' 
                                value={this.state.latitude}
                            />
                        </div>

                        
                    </div>
                    <div className='create-buttons'>
                        <button className='form-button' onClick={() => this.props.history.push('/listings')}>Cancel</button>
                        <button className='form-button' type='submit'>Submit {this.props.formType}</button>
                    </div>
                </form>
                
            </div>
        )
    }

}

export default ListingForm