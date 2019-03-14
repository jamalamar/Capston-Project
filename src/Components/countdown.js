import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sold from '../assets/sold.png';


const imgStyle = {
  width: '100px', 
  height: '100px',
  opacity: '1'
}


class CountDown extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 10, price: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.newBid = this.newBid.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  newBid() {
    if (this.state.seconds > 0) {
    this.setState({ 
      seconds: 11,
      price: Math.round((this.state.price + 0.01) * 1e12) / 1e12
    })}
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {

    return(
      <div style={{'font-size': '25px'}}>
        <div style={{color: 'green', margin: '0'}}>
            ${this.state.price}
        </div>
          
          {
            this.state.time.s == 0 ? <img src={Sold} style={imgStyle}/> : 
            <div>

                <p style={{margin: '0'}}>{this.state.time.s}</p>
              <div>
                {this.timer == 0 ? <Button onClick={this.startTimer}>Start</Button> : <Button onClick={this.newBid}>Add Bid</Button>}
              </div>

            </div>
          }
      </div>
    );
  }
}


export default CountDown;