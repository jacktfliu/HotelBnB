import React from 'react';
import { withRouter } from 'react-router-dom';

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
        if (this.props.currentUser){
            if (this.state.check_out_date < this.state.check_in_date) return null
            const reservations = Object.assign({}, this.state, {listing_id: this.props.listingId})
            this.props.createReservation(reservations).then(this.props.history.push('/reservations')) 
            this.setState(this.newState)
        } else {
            this.props.openModal('login')
        }
    }

    handleInput(field){
        return (e) => {
        this.setState({
            [field]: e.target.value,
            }); 
        };
    }
    
    render(){
        let days = 0;
        const { check_in_date, check_out_date} = this.state;
        if(check_in_date && check_out_date) {
            let diff_time = check_out_date.getTime() - check_in_date.getTime();
            days = diff_time / (1000 * 3600 * 24);
        }

        return (
            <div className='reservation-container'>
                <div className='price-container'>
                    <p className='booking-price'>${this.props.listing.price} / night</p>
                </div>
                <form onSubmit={this.handleSubmit} className='reservation-wrapper'>
                    <div className='date-wrapper'>
                        <input type='date'
                            onChange={this.handleDate('check_in_date')} 
                            className='date-button'
                            min={new Date().toISOString().split('T')[0]}
                        />
                        <input type='date'
                            onChange={this.handleDate('check_out_date')} 
                            className='date-button'
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div> 
                    <select className='guest-button' onChange={this.handleInput('number_of_guest')}>
                        <option value="1" defaultValue>1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                        <option value="5">5 guest</option>
                        <option value="6">6 guest</option>
                        <option value="7">7 guest</option>
                    </select>
                    <div className='total-wrapper'>
                        <div className='total'>
                            Total: ${this.props.listing.price * days}
                        </div>
                    </div>
                    <button type='submit' className='check-ava'>Reserve</button>
                </form>
            </div>
        )
    }
    
}

export default withRouter(ReservationForm)

