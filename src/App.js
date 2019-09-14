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
    currentFont: undefined,
    currentFontComponent: undefined,
  }

  // Add the select option value to the state at currentFont
  onChange = value => {
    console.log(`selected ${value}`)
    let currentFont = `/${value}`;
    let currentFontComponent = value.charAt(0).toUpperCase() + value.slice(1);
    this.setState({ currentFont, currentFontComponent })
  }

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
    const { Option } = Select;
    return (
      <>

        <h1>Hello World</h1>

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
          <Option value="arial">Arial</Option>
          <Option value="verdana">Verdana</Option>
        </Select>


        <Arial prop={this.state.currentFont} />

      </>
    )
  }
}

 /**
* Export
*/
export default App;
