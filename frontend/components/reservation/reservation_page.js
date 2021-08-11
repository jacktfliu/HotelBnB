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

    render(){
        const {first_name, last_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`}>
                
                    <div>
                        <h1>{reservation.title}</h1>
                        <p>{reservation.check_in_date} to {reservation.check_out_date}</p>
                        <p>Number of Guests: {reservation.number_of_guest}</p>
                    </div>

                    <button onClick={() => this.props.deleteReservation(reservation.id)}>Cancel Reservation</button> 
            </div>
        ))
        return(
            <div>
                <div>
                    <h1>Hey there {first_name, last_name}</h1>
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