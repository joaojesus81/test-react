import React, { Component } from 'react';
import {getSomething} from './cefsharp'

class Spaces extends Component {
    state = {
        msg: ''
    }
    asyncSpaces = () => {
        console.log(getSomething());
        this.setState({msg: getSomething()});
        /* let result = getSomething();
        if(typeof result === 'string'){
            this.setStage({msg: result})
        } else {
            this.setStage({msg: (typeof result)})
        } */

        // if(window.boundAsync){
        //     window.boundAsync.space().then(function (res) {
        //         this.setState({ msg: res });
        //     })
        // } else {
        //     console.log('no boundasync found')
        // }

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