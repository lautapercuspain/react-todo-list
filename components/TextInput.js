import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

 constructor(props, context){
   super(props, context)
   this.state = {
    inputText: ''
  }
}

handleChange(e){
  /*console.log(e.target.value)*/
  this.setState({
    inputText: e.target.value
  })
}
render() {
  return (
  <div>
    <input 
        type="text" 
        placeholder="This is going to be text" 
        onChange={this.handleChange.bind(this)} 
        value={this.state.inputText}
    />
    <TextDisplay text={this.state.inputText} />
  </div>
  ) 
}

}

export default TextInput


