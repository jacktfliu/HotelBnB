import React from 'react';
import { Link } from 'react-router-dom'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchReservations().then(
            this.setState({loading: false})
        )
    }

    compononetDidUpdate(){
        this.props.fetchReservations()
    }

    render(){
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`} className='reservation-container'>
                <img className='reservation-img'></img>
                <div className='reservation-wrapper'>
                    <h1>{reservation.title}</h1>
                    <h2>Reservation dates: {reservation.check_in_date.split('T')[0]} to {reservation.check_out_date.split('T')[0]}</h2>
                    <p>Number of Guests: {reservation.number_of_guest}</p>
                </div>
                <div className='cancel-reservation-container'>
                    <button onClick={() => this.props.history.push(`./listings/${this.props.reservations.i.listing_id}`)} className='back-to-link'>Reservation listing</button> 
                    <button onClick={() => this.props.deleteReservation(reservation.id)} className='cancel-reservation'>Cancel Reservation</button>
                </div>
            </div>
        ))

        return(
            <div>
                <div className='reservation-header'>
                    <p>Welcome to your reservations</p>
                </div>
                <div className='reservation-whole'>
                    <div className='reservations'>
                        {reservations}
                    </div>
                </div>
            </div>

        )
    }
}

export default ReservationPage;