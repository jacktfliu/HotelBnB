import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

class ListingShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMOunt(){

    }

    render(){
        return(
            <div>
                <h1>ALL THE LISTINGS ARE HERE</h1>

            </div>
        )
    }
}

export default withRouter(ListingShow)