import React, { Component } from 'react';

class Spaces extends Component {
    state = {
        msg: ''
    }
    asyncSpaces = () => {
        if(window.boundAsync){
            window.boundAsync.space().then(function (res) {
                this.setState({ msg: res });
            })
        } else {
            console.log('no boundasync found')
        }

    }
    render() {
        return (
            <div>
                <button onClick={this.asyncSpaces}>JS</button>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

export default Spaces;