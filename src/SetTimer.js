import React, {Component} from 'react';
import './SetTimer.css';

class SetTimer extends Component{
    render(){
        return(
        <div className="SetTimer">
            <h1 id={`${this.props.type}-label`}>{`${this.props.type==='session'?'Session' : 'Break'} Length`}</h1>
            <div className='SetTimer-controls'>
            <button id={`${this.props.type}-decrement`} onClick={()=>this.props.handleClick(false, `${this.props.type}Value`)}>&darr;</button>
            <h1 id={`${this.props.type}-length`}>{this.props.value}</h1>
            <button id={`${this.props.type}-increment`} onClick={()=>this.props.handleClick(true, `${this.props.type}Value`)}>&uarr;</button>
            </div>
          </div>
        )
    }
}


export default SetTimer;