import React, { Component } from 'react'

export default class Contact extends Component {
    state = {phoneValue: '', nameValue: 'aaa', messageValue: ''};

    handleChange = (event) => {
        this.setState({nameValue: event.target.value});
    }

    handleSubmit = (event) => {
        alert('was submitted: ' + this.state.nameValue);
        event.preventDefault();
    }
    render() {
        return (
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-container__contact-us-container">Cointact Us</div>
                    <div className="contact-container__mail-container">by mail</div>
                    <div className="contact-container__phone-container">by phone</div>
                    <div className="contact-container__form-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.nameValue} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}
