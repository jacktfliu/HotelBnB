export const fetchListings = location => {
    // debugger
    return $.ajax ({
        method: 'get',
        url: '/api/listings',
        data: {location}
    })
}

export const fetchListing = id => (
    $.ajax({
        method: 'get',
        url: `/api/listings/${id}`
    })
)

export const createListing = listing => {
    return $.ajax({
        method: 'post',
        url: '/api/listings',
        data: listing,
        contentType: false,
        processData: false
    })
}

export const updateListing = (formData, listingId) => (
    $.ajax({
        method: 'patch',
        url: `/api/listings/${listingId}`,
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deleteListing = listingId => (
    $.ajax({
        method: 'delete',
        url: `/api/listings/${listingId}`
    })
)

export const uploadPhoto = photo => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
)

