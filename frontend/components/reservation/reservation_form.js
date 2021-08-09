import React from 'react';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);

        this.newState = Object.assign({}, this.props.reservation)
        this.state = this.props.reservation
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleDate(field) {
        return (e) => {
            let date = new Date(e.target.value)   
            let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
            this.setState({
                [field]: new Date(utc + (3600000 * 10))
            });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.check_in_date < this.state.check_out_date) return null;
        const reservation = Object.assign({}, this.state, {listing_id: this.props.listing_id})
        this.props.createReservation(reservation).then(this.props.ownProps.history.push('./reservation'))
        this.setState(this.newState)
    }

    handleInput(){
        
    }
    
    render(){

        return (
            <form onSubmit={this.handleSubmit}>      

                <div className='price-container'>
                    <p className='booking-price'>${this.props.listing.price} / night</p>
                </div>
                <div className='date-wrapper'>
                    <input onChange={this.handleDate} type='date' className='date-button'/>
                    <input onChange={this.handleDate} type='date' className='date-button'/>
                </div>
                <button className='guest-button'>1 Guest</button>
                <button className='check-ava'>Reserve</button>

            </form>
        )
    }
    
}

export default ReservationForm

