import * as APIUtil from '../util/reservation_util'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATIONS'

export const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const fetchReservations = () => dispatch => (
    APIUtil.fetchReservations().then(reservations => (
        dispatch(receiveReservations(reservations))
    ))
)

export const fetchReservation = (reservation) => dispatch => (
    APIUtil.fetchReservation(reservation).then(reservation => (
        dispatch(receiveReservation(reservation))
    ))
)

export const createResevation = (reservation) => dispatch => (
    APIUtil.fetchReservation(reservation).then(reservation => (
        dispatch(receiveReservation(reservation))
    ))
)

export const deleteReservation = reservationId => dispatch (
    APIUtil.deleteReservation(reservationId).then(reservationId => (
        dispatch(removeReservation(reservationId))
    ))
)