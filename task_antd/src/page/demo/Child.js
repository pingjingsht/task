import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    componentWillMount(){
        console.log('WillMount');
    }

    componentDidMount(){
        console.log('didMount');
    }

    componentWillReceiveProps(newProps){
        console.log('ReceiveProps'+newProps.name);
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(){
        console.log('WillUpdate');
    }

    componentDidUpdate(){
        console.log('DidUpdate');
    }

    render(){
        return <div>
            <p>子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}