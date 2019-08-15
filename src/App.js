import React,{Component} from 'react';
import './App.css';
import SetTimer from './SetTimer';
import Timer from './Timer';
import Controls from './Controls'
import './SetTimer.css';
import moment from 'moment/moment.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        breakValue:5,
        sessionValue: 25,
        mode: 'session',
        time: 25*60*1000,
        active: false,
        touched: false
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.time===0 && prevState.mode==='session'){
      this.setState({
        time: this.state.breakValue*60*1000,
        mode:'break'
      })
      this.audio.play();
    }
    if(prevState.time===0 && prevState.mode==='break'){
      this.setState({
        time: this.state.sessionValue*60*1000,
        mode:'session'
      })
      this.audio.play();
    }
  }

  handleSetTimers=(inc,type)=>{
    if(this.state[type]===60 && inc) return
    if(this.state[type]===1 && !inc) return
    this.setState({[type]: this.state[type]+(inc?1:-1)})  
  }
  handleReset=()=>{
    this.setState({
      breakValue:5,
      sessionValue:25,
      time: 25*60*1000,
      mode:'session',
      touched: false,
      active: false
    })
    this.audio.pause();
    this.audio.currentTime=0;
    clearInterval(this.pomodoro)
  }
  handlePlayPause=()=>{
    if(this.state.active){
      clearInterval(this.pomodoro)
      this.setState({
        active: false
      })
    }
    else{
      if(this.state.touched){
        this.pomodoro=setInterval(()=>this.setState({time: this.state.time-1000}),1000)
        this.setState({active: true})
      }
      else{
          this.setState({time:this.state.sessionValue*60*1000, 
            touched: true,
            active:true}
          
          )
          this.pomodoro=setInterval(()=>this.setState({time: this.state.time-1000}),1000)
      }
 
      
    }
    
  
  }
render(){
  return(
    <div>
      <div className="header">
      Pomodoro Clock
      </div>
      <div className="pos">
      <div className="settings">
        <SetTimer type='break' value={this.state.breakValue} handleClick={this.handleSetTimers}/>
        <SetTimer type='session' value={this.state.sessionValue} handleClick={this.handleSetTimers}/>
      </div>
      <div className="ses">
        <Timer mode={this.state.mode} time={moment(this.state.time).utcOffset(120).format('mm:ss')}/>
        <Controls active={this.state.active} handleReset={this.handleReset} handlePlayPause={this.handlePlayPause}/>
        <audio id='beep' src='https://goo.gl/65cBl1' ref={ref=>this.audio=ref}></audio>
        </div>
      </div>
    </div>
  )
}
}

export default App;
