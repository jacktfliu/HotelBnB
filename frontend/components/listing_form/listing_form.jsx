import React from 'react'

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.listing          
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createListing(this.state)
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create A Listing!</h1>

                    <input className='create-listing-form' 
                        onChange={this.update('title')} 
                        type='text' 
                        value={this.state.title}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('price')} 
                        type='text' 
                        value={this.state.price}
                    />

                    <textarea className='create-listing-form' 
                        onChange={this.update('description')}  
                        value={this.state.description}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('location')} 
                        type='text' 
                        value={this.state.location}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('bedroom')} 
                        type='text' 
                        value={this.state.bedroom}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('bathroom')} 
                        type='text' 
                        value={this.state.bathroom}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('longitude')} 
                        type='text' 
                        value={this.state.longitude}
                    />

                    <input className='create-listing-form' 
                        onChange={this.update('latitude')} 
                        type='text' 
                        value={this.state.latitude}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default ListingForm