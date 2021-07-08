import React, { Fragment } from "react"
import {Link} from 'react-router-dom'
import IconCards from "./icon_cards"
import BackgroundBody from "./background_body"

class SplashPage extends React.Component{
    render(){
        return (
            <Fragment>
                <BackgroundBody/>
                <IconCards/>
            </Fragment>
        )
    }   
}  


export default SplashPage