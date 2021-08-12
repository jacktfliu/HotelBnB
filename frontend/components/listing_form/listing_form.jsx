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
                <form onSubmit={this.handleSubmit}>
                    <div className='share'>Share your home</div>
                    <div className='update-edit'>
                        <div className=''>
                            <div>
                                What is your Title?
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('title')} 
                                type='text' 
                                value={this.state.title}
                            />
                        </div>

                        <div className=''>
                            <div>
                                What is your Price per day? 
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('price')} 
                                type='text' 
                                value={this.state.price}
                            />
                        </div>

                        <div>
                             <div>
                                Describe your place
                            </div>
                            <textarea className='create-listing-form' 
                                onChange={this.handleUpdate('description')}  
                                value={this.state.description}
                            />
                        </div>

                        <div>
                            <div>
                                What is your city location?
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('location')} 
                                type='text' 
                                value={this.state.location}
                            />
                        </div>

                        <div>
                            <div>
                                How many bedrooms do you have? 
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('bedroom')} 
                                type='text' 
                                value={this.state.bedroom}
                            />
                        </div>

                        <div>
                            <div>
                                How many bathrooms do you have?

                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('bathroom')} 
                                type='text' 
                                value={this.state.bathroom}
                            />
                        </div>

                        <div>
                            <div>
                                what is your longitude?
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('longitude')} 
                                type='text' 
                                value={this.state.longitude}
                            />
                        </div>

                        <div>
                            <div>
                                What is your latitude?
                            </div>
                            <input className='create-listing-form' 
                                onChange={this.handleUpdate('latitude')} 
                                type='text' 
                                value={this.state.latitude}
                            />
                        </div>
                    </div>
                    
                    <button className='form-button' type='submit'>Submit {this.props.formType}</button>
                </form>
                
            </div>
        )
    }

}

export default ListingForm