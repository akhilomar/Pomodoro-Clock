import React,{Component} from 'react';
import './Controls.css';  

class Controls extends Component{
    render(){
        return(
            <div className="Controls">
                <button id='start_stop' onClick={this.props.handlePlayPause}>
                    { this.props.active? <span>&#10074;&#10074;</span>:<span>&#9658;</span>}
                </button>
                <button id="reset" onClick={this.props.handleReset}>&#8635;</button>
            </div>
        );
    }
}
export default Controls;