import React from 'react'

import './Editor.css'

export default class Editor extends React.Component{
    constructor(){
        super()
        this.state={
            value:''
        }
    }
    handleChange = (e)=>{
        this.setState({value: e.target.value});
    }

    render(){
        return <div className="container">
        <div className="Input   ">
            <h3>Input</h3>
            <textarea className="input-text text" onChange={this.handleChange} defaultValue={this.state.value} placeholder='Type Here....'/>
        </div>
        <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text text">{this.state.value}</div>
        </div>                
    </div>
    }

}
