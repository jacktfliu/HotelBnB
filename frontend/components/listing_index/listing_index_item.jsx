import React from "react";


class ListingIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.history.push(`/listings/${this.props.spot.id}`)
    }

    render(){
        return(
            <div className='listing-index-item' onClick={this.handleClick}>
                <div></div>

            </div>
        )
    }
}

export default ListingIndexItem
