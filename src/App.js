import React, { Component } from 'react';
import './App.css';
import  marked from 'marked';

const initialState = `
# This is a heading 1
## This is a heading 2

This is a Paragraph with **bolded text**

- list item 1
- list item 2
- list item 3

[Visit my website](https://github.com/bishalmallick)

This is an inline \`<div></div>\`

This is a block of code

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

This is an Image

![React Logo](http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png)
`;


class App extends Component {
  constructor(){
    super()
    this.state = {
      text: initialState
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text);
    
    return(
    <div className="App">
      <h1 className="header">MarkDown Previewer</h1>

      <div className="container">

        <div className="editor">
          <h2>Editor</h2>
          <textarea value={text} className="textarea" onChange={this.handleChange}/>
        </div>

        <div className="previewer">
          <h2>Preview</h2>
          <div className="preview" dangerouslySetInnerHTML={{__html: markdown}}></div>
        </div>

      </div>

      <div className="footer">
        <footer>
          <p className="footer__text">
          © 2021 - Website developed by <a href="https://github.com/bishalmallick" target="_blank" rel="noopener noreferrer"> Bishal Mallick</a>
          </p>
        </footer>
      </div>

    </div>)
  }
}

export default App;
