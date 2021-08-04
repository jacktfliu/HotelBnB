export const fetchReservations = reservation => {
    $.ajax({
        method: 'get',
        url: '/api/reservation',
        data: {reservation}
    })
}

export const fetchReservation = id => {
    $.ajax({
        method: 'get',
        url: `/api/reservation/${id}`,
    })
}

export const createReservation = reservation => {
    $.ajax({
        method: 'post',
        url: '/api/reservations',
        data: {reservation}
    })
}

export const deleteReservation = reservationId => {
    $.ajax({
        method: 'delete',
        url: `/api/reservation/${reservationId}`,
    })
}