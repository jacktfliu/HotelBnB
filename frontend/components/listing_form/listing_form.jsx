import React from 'react'

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listing: this.props.listing,
            photos: []
        },
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {photos} = this.state
        const formData = new FormData();
        formData.append('listing[title]', this.state.listing.title);
        formData.append('listing[price]', this.state.listing.price);
        formData.append('listing[description]', this.state.listing.description);
        formData.append('listing[location]', this.state.listing.location);
        formData.append('listing[bedroom]', this.state.listing.bedroom);
        formData.append('listing[bathroom]', this.state.listing.bathroom);
        formData.append('listing[longitude]', this.state.listing.longitude);
        formData.append('listing[latitude]', this.state.listing.latitude);
        formData.append('listing[owner_id]', this.state.listing.owner_id);
        formData.append('listing[host_name]', this.state.listing.host_name);
        formData.append('listing[city]', this.state.listing.city);

        if (this.state.photos){
            for (let i = 0; i < photos.length; i++){
                formData.append('listing[photos][]', photos[i].photoFile)
            }
        }
        // debugger
        // if (this.state.photoFile){
        //     formData.append('listing[photos]', this.state.photoFile)
        // }
        
        this.props.action(formData, this.props.listing.id).then(
            (list) => this.props.history.push(`/listings/${list.listing.id}`)
        )
    }

    // handleUpdate(field){
    //     return (e) => {
    //         this.setState({[field]: e.target.value})
    //     }
    // }

    handleFile(e){
        const files = e.currentTarget.files
        const that = this
        for(let i = 0; i < files.length; i++){
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                let photo = {photoFile: files[i], photoUrl: fileReader.result}
                that.state.photos.push(photo)
            }

            if (files[i]){
                fileReader.readAsDataURL(files[i])  
            }
        }
    }

    handleUpdate(field) {
    return e => {
        let nextListing = Object.assign({}, this.state.listing);
        nextListing[field] = e.currentTarget.value;
        this.setState({ listing: nextListing });
        };
    }


    render(){
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : '' 
        // console.log(this.props.listingId)
        return(
            <div className='border-box-form'>
                {/* <h1>{this.props.formType}</h1> */}
                <div className='share'>Host your place</div>
                <form onSubmit={this.handleSubmit}>
                    <div className='update-edit'>
                        <div className='create-listing-name-container'>
                            <i className="fab fa-square-info"></i>
                            <p>Host name</p>
                            <h1>
                                What is your name?
                            </h1>
                            <input className='create-listing-name' 
                                type='text' 
                                onChange={this.handleUpdate('host_name')} 
                                value={this.state.listing.host_name}
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
                                value={this.state.listing.title}
                            />
                        </div>

                        <div className='create-listing-price-container'>
                            <p>Price</p>
                            <h1>
                                Please enter the amount you would like to charge per night.
                            </h1>
                            <input className='create-listing-price' 
                                onChange={this.handleUpdate('price')} 
                                type='text' 
                                value={this.state.listing.price}
                            />
                        </div>

                        <div className='create-listing-description-container'>
                            <p>Describe your place</p>
                            <h1>
                                Give a little description of your place. 
                            </h1>
                            <textarea className='create-listing-description' 
                                onChange={this.handleUpdate('description')}  
                                value={this.state.listing.description}
                            />
                        </div>

                        <div className='create-listing-location-container'>
                            <p>City</p>
                            <h1>
                                What city is your listing located in?
                            </h1>
                            <input className='create-listing-location' 
                                onChange={this.handleUpdate('city')} 
                                type='text' 
                                value={this.state.listing.city}
                            />
                        </div>

                        <div className='create-listing-city-container'>
                            <p>Location</p>
                            <h1>
                                Please choose a location
                            </h1>
                            <select className='create-listing-city' 
                                onChange={this.handleUpdate('location')} 
                                value={this.state.listing.location}>
                                <option selected disabled> </option>
                                <option value='NewYorkCity'>New York City</option>
                                <option value='Miami'>Miami</option>
                                <option value='Vegas'>Las Vegas</option>
                                <option value='LosAngeles'>Los Angeles</option>
                                <option value='AtlanticCity'>Atlantic City</option>
                                <option value='Chicago'>Chicago</option>
                            </select>
                        </div>

                        <div className='create-listing-bedroom-container'>
                            <p>Bedrooms</p>
                            <h1>
                                How many bedrooms does this place have?
                            </h1>
                            <input className='create-listing-bedroom' 
                                onChange={this.handleUpdate('bedroom')} 
                                type='text' 
                                value={this.state.listing.bedroom}
                            />
                        </div>

                        <div className='create-listing-bathroom-container'>
                            <p>Bathrooms</p>
                            <h1>
                                How many bathrooms does this place have?
                            </h1>
                            <input className='create-listing-bathroom' 
                                onChange={this.handleUpdate('bathroom')} 
                                type='text' 
                                value={this.state.listing.bathroom}
                            />
                        </div>

                        <div className='create-listing-longitude-container'>
                            <p>Longitude</p>
                            <h1>
                                What is the longitude of this place? 
                            </h1>
                            <input className='create-listing-longitude' 
                                onChange={this.handleUpdate('longitude')} 
                                type='text' 
                                value={this.state.listing.longitude}
                            />
                        </div>

                        <div className='create-listing-latitude-container'>
                            <p>Latitude</p>
                            <h1>
                                What is the latitude of this place?
                            </h1>
                            <input className='create-listing-latitude' 
                                onChange={this.handleUpdate('latitude')} 
                                type='text' 
                                value={this.state.listing.latitude}
                            />
                        </div>
                        <div className="listing-image-container">
                            <p>Listing Image</p>
                            <h1>
                                Upload an image to promote your Listing.
                            </h1>
                            <input
                                type="file"
                                name="listing image"
                                accept="image/*"
                                className="listing-image-wrapper"
                                onChange={this.handleFile}
                                multiple
                            />
                            <h3>Image Preview</h3>
                            <div>
                                {preview}
                            </div>
                        </div>
                    </div>
                    <div className='create-buttons'>
                        <button className='form-button' onClick={() => this.props.history.push(`/listings/${this.props.listing.id}`)}>Cancel</button>
                        <button className='form-button' type='submit'>Submit {this.props.formType}</button>
                    </div>
                </form>
                
            </div>
        )
    }

}

export default ListingForm