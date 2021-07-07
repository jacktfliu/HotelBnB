export const fetchListings = listing => (
    $.ajax({
        method: 'get',
        url: 'api/listings',
        data: {listing}
    })
).then(response => console.log(response))

export const fetchListing = id => (
    $.ajax({
        method: 'get',
        url: `api/listings/${id}`
    })
)

export const createListing = listing => (
    $.ajax({
        method: 'post',
        url: 'api/listings',
        data: {listing}
    })
)
