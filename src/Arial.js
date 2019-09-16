/**
 * NPM Import
 */
import React, { Component } from 'react';
import DOMPurify from 'dompurify'; 

/**
 * LOCAL Import
 */


/**
 * CODE Here
 */

class Arial extends Component {
  state = {
    myText: undefined,
  }

  handleChange = (event) => {
    let writeText = event.target.value;
    this.setState({myText: writeText})
  }

  render() {
    const { currentFontComponent } = this.props
    const { myText } = this.state
    return (
      <>
        <div id="container">
            <div id="left-side">
                <h2>Write your text</h2>
                <textarea 
                  onChange={this.handleChange}
                />
            </div>
            <div id="right-side">
                <h2>See the result</h2>
                <div id="result">
                  {/* Custom p style here directly with font prop (and bold if you want) */}
                  <p style={{fontFamily: `${currentFontComponent}`}}>{DOMPurify.sanitize(myText)}</p>
                </div>
            </div>
        </div>
      </>
    )
  }
}

 /**
* Export
*/
export default Arial;
