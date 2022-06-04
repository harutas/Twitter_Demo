import React from "react"
import TextArea from "./TextArea"
import TweetImage from "./TweetImage"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet : {
        name : "",
        id : "",
        content : "",
        icon : "images/Twitter.jpg"
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = Object.assign({}, this.state.tweet, {[name] : target.value});

    this.setState({
        tweet : value
    });
  }

  renderTextArea() {
    return (
      <TextArea
        value={this.state.tweet}
        onChange={(e) => this.handleChange(e)}
      />
    )
  }

  renderTweetImage() {
    return (
      <TweetImage
        value={this.state.tweet}
      />
    )
  }

  render(){
    return (
      <div className='conttainer mt-3'>
        <div  className='d-flex flex-column align-items-center px-3'>
          {this.renderTextArea()}
          {this.renderTweetImage()}
        </div>
      </div>
    )
  }
}

export default MainPage