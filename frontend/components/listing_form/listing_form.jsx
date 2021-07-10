import React from 'react'

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.listing          
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createListing(this.state).then(
            (list) => this.props.history.push(`/listings/${list.listing.id}`)
        )
    }

    handleUpdate(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create A Listing!</h1>
                    <div>


                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('title')} 
                        type='text' 
                        value={this.state.title}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('price')} 
                        type='text' 
                        value={this.state.price}
                    />

                    <textarea className='create-listing-form' 
                        onChange={this.handleUpdate('description')}  
                        value={this.state.description}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('location')} 
                        type='text' 
                        value={this.state.location}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('bedroom')} 
                        type='text' 
                        value={this.state.bedroom}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('bathroom')} 
                        type='text' 
                        value={this.state.bathroom}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('longitude')} 
                        type='text' 
                        value={this.state.longitude}
                    />

                    <input className='create-listing-form' 
                        onChange={this.handleUpdate('latitude')} 
                        type='text' 
                        value={this.state.latitude}
                    />
                    <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default ListingForm