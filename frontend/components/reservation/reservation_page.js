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
            <div key={`reservation-${i}`}>
                    <div>
                        <p>{reservation.title}</p>
                        <p>{reservation.check_in_date} to {reservation.check_out_date}</p>
                        <p>Number of Guests: {reservation.number_of_guest}</p>
                    </div>

                    <button onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button> 
            </div>
        ))

        return(
            <div>
                <div>
                    <h2>Welcome to your reservations</h2>
                </div>
                <div>
                    {reservations}
                </div>
            </div>

        )
    }
}

export default ReservationPage;