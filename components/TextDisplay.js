import React, { Component } from 'react'

class TextDisplay extends Component {


render() {
  return (
  <div>I'm displaying text from myparent: {this.props.text} </div>
  ) 
}

}

export default TextDisplay


