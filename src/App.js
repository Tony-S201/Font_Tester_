/**
 * NPM Import
 */
import React, { Component } from 'react';
import { Select } from 'antd';

/**
 * LOCAL Import
 */
import './App.css';
import Arial from './Arial';

/**
 * CODE Here
 */
class App extends Component {
  state = {
    currentFontComponent: undefined,
  }

  // Add the select option value to the state at currentFont
  onChange = value => {
    console.log(`selected ${value}`)
    let currentFontComponent = value.charAt(0).toUpperCase() + value.slice(1);
    this.setState({ currentFontComponent })
  }

  // onTextChange = () => {
  //   this.setState({myText: !this.state.myText})
  // }

  onBlur = () => {
    console.log('blur')
  }

  onFocus = () => {
    console.log('focus')
  }

  onSearch = (val) => {
    console.log('search:', val)
  }


  render () {
    const { Option } = Select
    const { currentFontComponent } = this.state
    return (
      <>

        <h1>Font Tester</h1>
        <h2>A selection of my favorites fonts that you can try !</h2>
        <strong>Choose your font : </strong>
        {/* This is the Select from antd, onChange with option choice execute the onChange function */}
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a font"
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="arial" style={{fontFamily: 'Arial'}}>Arial</Option>
          <Option value="verdana" style={{fontFamily: 'Verdana'}}>Verdana</Option>
          <Option value="courier" style={{fontFamily: 'Courier'}}>Courier</Option>
          <Option value="impact" style={{fontFamily: 'Impact'}}>Impact</Option>
        </Select>

        <h1 style={{fontFamily: `${currentFontComponent}`}}>{currentFontComponent}</h1>

        <Arial currentFontComponent={currentFontComponent} />

      </>
    )
  }
}

 /**
* Export
*/
export default App;
