// Write your code here

import {Component} from 'react'
import './App.css'

class Welcome extends Component {
  state = {isSubscribe: true}
  render() {
    const {isSubscribe} = this.state
    return (
      <div className="mainContainer">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="button">Subscribed</button>
        ) : (
          <button className="button">Subscribe</button>
        )}
      </div>
    )
  }
}

export default Welcome
