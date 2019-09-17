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
    const { currentFontComponent, currentFontWeight, themeFontColor, colorPicker, currentSize, currentFontStyle } = this.props
    const { myText } = this.state
    return (
      <>
        <div id="rightSide">
            <div id="resultLeft">
                <h2 style={{color: themeFontColor, fontFamily: 'Roboto, sans-serif'}}>Write your text</h2>
                <textarea 
                  onChange={this.handleChange}
                />
            </div>
            <div id="resultRight">
                <h2 style={{color: themeFontColor, fontFamily: 'Roboto, sans-serif'}}>Your text in <span style={{fontFamily: `${currentFontComponent}, sans-serif`, color: themeFontColor}}>{currentFontComponent}</span></h2>
                <div id="result" style={{fontFamily: `${currentFontComponent}, sans-serif`, fontWeight: currentFontWeight, color: colorPicker, fontSize: `${currentSize}px`, fontStyle: currentFontStyle}}>
                  {/* Custom p style here directly with font prop (and bold if you want) */}
                  {DOMPurify.sanitize(myText)}
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
