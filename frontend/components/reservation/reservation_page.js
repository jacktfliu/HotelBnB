import React from 'react';

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchReservation(this.props.currentUser.id).then(
            this.setState({loading: false})
        )
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.deleteReservation(this.props.reservation.id)
    }

    render(){
        
        const reservations = this.props.reservations.map((reservation, i) => (
            <div key={`reservation-${i}`}>
                    <div>
                        <h1>{reservation.title}</h1>
                        <p>{reservation.check_in_date} to {reservation.check_out_date}</p>
                        <p>Number of Guests: {reservation.number_of_guest}</p>
                    </div>

                    <button  onClick={(this.handleSubmit)}>Cancel Reservation</button> 
            </div>
        ))
        return(
            <div>
                {reservations}
            </div>

        )
    }
}

export default ReservationPage;