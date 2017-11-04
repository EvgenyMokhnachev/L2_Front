import React, {Component} from 'react';
import './auth-form.css';

class AuthForm extends Component {

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight,
            clientWidth = width + 0,
            clientHeight = height + 0;

        this.setState({clientWidth, clientHeight}, this.updateOffsetTop);
    }

    updateOffsetTop(){
        this.setState({
            offsetTop: this.state.clientHeight/2 - this.refs.form.offsetHeight/2
        });
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", ()=>{
            this.updateDimensions();
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", ()=>{
            this.updateDimensions();
        });
    }

    render() {
        return (
            <form style={{top: this.state.offsetTop}} ref="form" className="auth-form">
                <div className="blur"/>
                {this.props.children}
            </form>
        );
    }

}

export default AuthForm;
