/**
 * NPM Import
 */
import React from 'react';

/**
 * LOCAL Import
 */


/**
 * CODE Here
 */
const Arial = ({ prop }) => {
    return (
      <>
        <h1>{prop}</h1>
        <div id="container">
            <div id="left-side">
                <h2>Write your text</h2>
                <textarea 
                />
            </div>
            <div id="right-side">
                <h2>See the result</h2>
                <div id="result">
                  {/* Custom p style here directly with font prop (and bold if you want) */}
                  <p></p>
                </div>
            </div>
        </div>
      </>
    )
}

 /**
* Export
*/
export default Arial;
