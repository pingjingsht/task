import React from 'react'
import Child from './Child'
import './Life.less'
import {Button} from 'antd'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    handleAdd=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    handleClick(){
        this.setState({
            count: this.state.count+2
        })
    }

    render(){
        return <div className="content">
            <p>react生命周期</p>
            <Button onClick={this.handleAdd}>点击一下</Button>
            <Button onClick={this.handleClick.bind(this)}>点击一下</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}