import React from 'react';

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
                <div className='reservation-wrapper'>
                    <p>{reservation.title}</p>
                    <p>{reservation.check_in_date.split('T')[0]} to {reservation.check_out_date.split('T')[0]}</p>
                    <p>Number of Guests: {reservation.number_of_guest}</p>
                </div>

                <button onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button> 
                {/* <Link to={}></Link> */}
            </div>
        ))

        return(
            <div className='reservation-whole'>
                <div className='reservation-header'>
                    <p>Welcome to your reservations</p>
                </div>
                <div className='reservations'>
                    {reservations}
                </div>
            </div>

        )
    }
}

export default ReservationPage;