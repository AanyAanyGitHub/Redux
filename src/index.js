import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


class ExampleRedux extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rootreducer = function (state, action) {
            if (action.type === "ACTION1") {
                return action.payload;
            }
            if (action.type === "ACTION2") {
                return action.payload;
            }
            return state;
        }

        //create store
        const store = createStore(rootreducer, "Initial State");      

        //Trigger The action
        store.dispatch({type:'ACTION7',payload:'Action 1 Payload'});

        //Store Listenerer
        store.subscribe(() => console.log("Current store is", store.getState()));

        

        return (
            <div>
                    <p>Welcome to Basic Redux</p>
            </div>
        );
    }
}

export default ExampleRedux;

ReactDOM.render(<ExampleRedux />, document.getElementById('root'));

