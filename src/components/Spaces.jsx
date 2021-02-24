import React, { Component } from 'react';

class Spaces extends Component {
    asyncSpaces = () => {
        if(window.boundAsync){
            window.boundAsync.space().then(function (res) {
                console.log(res)
            })
        } else {
            console.log('no boundasync found')
        }

    }
    render() {
        return (
            <div>
                <button onClick={this.asyncSpaces}>JS</button>
            </div>
        );
    }
}

export default Spaces;