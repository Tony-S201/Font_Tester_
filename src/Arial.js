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
    const { currentFontWeight } = this.props
    const { themeFontColor } = this.props
    const { colorPicker } = this.props
    const { myText } = this.state
    const { currentSize } = this.props
    return (
      <>
        <div id="container">
            <div id="left-side">
                <h2 style={{color: themeFontColor}}>Write your text</h2>
                <textarea 
                  onChange={this.handleChange}
                />
            </div>
            <div id="right-side">
                <h2 style={{color: themeFontColor}}>See the result</h2>
                <div id="result">
                  {/* Custom p style here directly with font prop (and bold if you want) */}
                  <p style={{fontFamily: `${currentFontComponent}, sans-serif`, fontWeight: currentFontWeight, color: colorPicker, fontSize: `${currentSize}px`}}>{DOMPurify.sanitize(myText)}</p>
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
