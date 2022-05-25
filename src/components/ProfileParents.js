import React, { Component } from 'react'
import Profile from './Profile'
import {Button} from 'react-bootstrap'
export default class ProfileParents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Person: { fullName:'Thor',bio:' Thor (/θɔr/; from Old Norse: Þórr [θor]) is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility. Besides Old Norse Þórr, the deity occurs in Old English as Þunor, in Old Frisian as Thuner, in Old Saxon as Thunar, and in Old High German as Donar, all ultimately stemming from the Proto-Germanic theonym *Þun(a)raz, meaning Thunder |', imgSrc:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fheros.fandom.com%2Ffr%2Fwiki%2FThor_(MCU)&psig=AOvVaw2s1kNG4AHRj-9P02gMtF8W&ust=1653503754780000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiE9NPj-PcCFQAAAAAdAAAAABAD', profession:' | God of Thunder'},
            show: false
        }
    }

    toShow = () => {
        this.setState({ show: !this.state.show})
    }
    render() {
        return (
            <div>
                <Button className="d-flex mybtn" variant="primary" onClick={this.toShow}>
                {this.state.show ? 'Hide  ' : 'Show '}
                </Button>
                {this.state.show && <Profile person={this.state.Person}/>}
            </div>
        )
    }
}
