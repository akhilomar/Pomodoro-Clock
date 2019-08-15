import React,{Component} from 'react';
import './Timer.css'
class Timer extends Component{

    render(){
        return(
            <div className="Timer">
                <h1 id='timer-label'>{this.props.mode==='session'?'Session':'Break'}</h1>
                <h1 id="time-left">{this.props.time}</h1>
            </div>
        )
    }
}
export default Timer;