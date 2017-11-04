import React, {Component} from 'react';
import backgroundJpeg from './background.jpg';
import backgroundMp4 from './background.mp4';
import backgroundOgv from './background.ogv';
import backgroundWebM from './background.webm';
import './background.css';

class Background extends Component {

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight,
            clientWidth = width + 0,
            clientHeight = height + 0;

            if(width/height > (1280/720)) {
                height = width/(1280/720);
            }

        this.setState({width, height, clientWidth, clientHeight});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div style={{width: this.state.clientWidth, height: this.state.clientHeight}} className="backgroundGroup">
                <img alt="background image" height={this.state.height} className="backgroundImage" src={backgroundJpeg}/>
                <video muted={true} height={this.state.height} poster={backgroundJpeg} loop={true} autoPlay={true} controls={false} className="backgroundVideo">
                    <source src={backgroundMp4}/>
                    <source src={backgroundOgv}/>
                    <source src={backgroundWebM}/>
                </video>
                <div style={{width: this.state.clientWidth, height: this.state.clientHeight}} className="backgroundFon"/>
            </div>
        );
    }
}

export default Background;
