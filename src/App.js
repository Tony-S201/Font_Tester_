/**
 * NPM Import
 */
import React, { Component } from 'react';
import { Select, Switch } from 'antd';
import { SketchPicker } from 'react-color';
import { InputNumber } from 'antd';
/**
 * LOCAL Import
 */
import './App.css';
import Arial from './Arial';
import { FontList } from './FontList';

/**
 * CODE Here
 */
class App extends Component {
  state = {
    currentFontComponent: undefined,
    currentFontWeight : undefined,
    themeFontColor : undefined,
    inputBackgroundColor: undefined,
    colorPicker: undefined,
    currentSize : undefined,
  }  
  
  // Add the select option value to the state at currentFont
  onChangeFont = value => {
    console.log(`selected ${value}`)
    let currentFontComponent = value.charAt(0).toUpperCase() + value.slice(1);
    this.setState({ currentFontComponent })
  }
  
  onChangeFontWeight = value => {
    let currentFontWeight = value;
    this.setState({ currentFontWeight })
  }

  
  onChangeTheme = checked => {
    if (checked === false) {
      document.body.style.backgroundColor = '#FFFFFF';
      this.setState({themeFontColor: '#000000', inputBackgroundColor: '#FFFFFF'});
    } else {
      document.body.style.backgroundColor = '#2F2E33';
      this.setState({themeFontColor: '#FFFFFF', inputBackgroundColor: '#2F2E33'});
    }
  }

  onPickerChange = (color) => {
    this.setState({colorPicker: color.hex})
  }

  onSizeChange = (value) => {
    this.setState({currentSize: value})
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
    const { currentFontWeight } = this.state
    const { themeFontColor } = this.state
    const { inputBackgroundColor } = this.state
    const { colorPicker } = this.state
    const { currentSize } = this.state
    
    return (
      <>

        <h1 style={{color: themeFontColor}}>Font Tester</h1>
        <strong style={{color: themeFontColor}}>Switch to dark mode</strong>
        <Switch onChange={this.onChangeTheme} />
        <h2 style={{color: themeFontColor}}>A selection of my favorites fonts that you can try !</h2>
        <strong style={{color: themeFontColor}}>Font : </strong>
        {/* This is the Select from antd, onChange with option choice execute the onChange function */}
        <Select
          showSearch
          style={{ width: 200}}
          dropdownStyle={{backgroundColor: inputBackgroundColor}}
          placeholder="Select a font"
          optionFilterProp="children"
          onChange={this.onChangeFont}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {FontList.map(thefont => (
            <Option key={thefont.font} value={thefont.font} style={{fontFamily: `${thefont.font}, sans-serif`, fontWeight: `${currentFontWeight}`, color: themeFontColor}}>{thefont.font}</Option>
          ))}
        </Select>

        <strong style={{color: themeFontColor}}>Font-weight : </strong>  
        <Select
          showSearch
          style={{ width: 200 }}
          dropdownStyle={{backgroundColor: inputBackgroundColor}}
          placeholder="Select a font-weight"
          optionFilterProp="children"
          onChange={this.onChangeFontWeight}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="normal" style={{fontWeight: 'normal', color: themeFontColor}}>Normal</Option>
          <Option value="bold" style={{fontWeight: 'bold', color: themeFontColor}}>Bold</Option>
        </Select>

        <strong style={{color: themeFontColor}}>Size (1 to 48) : </strong>
        <InputNumber min={1} max={48} onChange={this.onSizeChange} />
        
        <strong style={{color: themeFontColor}}>Color : </strong>
        <SketchPicker onChangeComplete={this.onPickerChange} color={colorPicker} disableAlpha />

        <h1 style={{fontFamily: `${currentFontComponent}, sans-serif`, color: themeFontColor}}>{currentFontComponent}</h1>

        <Arial currentFontComponent={currentFontComponent} currentFontWeight={currentFontWeight} themeFontColor={themeFontColor} colorPicker={colorPicker} currentSize={currentSize} />

      </>
    )
  }
}

 /**
* Export
*/
export default App;
