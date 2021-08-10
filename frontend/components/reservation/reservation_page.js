import React from 'react';

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchReservation(this.props.currentUser.id).then(
            this.setState({loading: false})
        )
    }

    // componentDidUnmount(){
    //     this.props.deleteReservation()
    // }

    render(){
        if(this.state.loading) return null
        console.log(this.props)
        const {first_name, last_name} = this.props.currentUser
        const reservations = this.props.reservations.map((reservation, i) => {
            <div key={`reservation-${i}`} className="reservations">
                <div>
                    <h1>{reservation.title}</h1>
                    <p>{reservation.check_in_date} to {reservation.check_out_date}</p>
                    <p>Guests: {reservation.number_of_guest}</p>
                </div>
            </div>
        })
        return(

            <div>
                
            </div>
        )
    }
}

export default ReservationPage;