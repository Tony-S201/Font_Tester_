/**
 * NPM Import
 */
import React, { Component } from 'react';
import { Select, Switch, Slider, Icon } from 'antd';
import { SketchPicker } from 'react-color';
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
    themeFontColor : '#000000',
    inputBackgroundColor: '#FFFFFF',
    colorPicker: undefined,
    currentSize : undefined,
    currentFontStyle: undefined,
    currentLogo: 'on',
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
      this.setState({themeFontColor: '#000000', inputBackgroundColor: '#FFFFFF', currentLogo: 'on'});
    } else {
      document.body.style.backgroundColor = '#2F2E33';
      this.setState({themeFontColor: '#FFFFFF', inputBackgroundColor: '#2F2E33', currentLogo: 'off'});
    }
  }

  onChangeFontStyle = value => {
    let currentFontStyle = value;
    this.setState({ currentFontStyle })
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
    const { currentFontComponent, currentFontWeight, themeFontColor, inputBackgroundColor, colorPicker, currentSize, currentFontStyle, currentLogo } = this.state    
    return (
      <div id="big-wrapper">
        <div className="switchTheme">
          <strong id="switchTheme" style={{color: themeFontColor, fontFamily: 'Roboto, sans-serif'}}>Switch theme </strong>
          <Switch onChange={this.onChangeTheme} />
        </div>
        
        {currentLogo === 'on' ? (<img src="/fontwhite.png" className="bigImage" alt="website logo" />) : <img src="/fontdark.png" className="bigImage" alt="website logo" />}

        <h2 id="subtitle" style={{color: themeFontColor, fontFamily: 'Roboto, sans-serif'}}>A selection of my favorites fonts !</h2>

        <div id="selectList">
          <div className="selectElement">
            <strong style={{color: themeFontColor}}><Icon type="medium" /></strong>
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
          </div>
          <div className="selectElement">
            <strong style={{color: themeFontColor}}><Icon type="bold" /></strong>  
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
          </div>
          <div className="selectElement">
            <strong style={{color: themeFontColor}}><Icon type="italic" /></strong>  
            <Select
              showSearch
              style={{ width: 200 }}
              dropdownStyle={{backgroundColor: inputBackgroundColor}}
              placeholder="Select a font-style"
              optionFilterProp="children"
              onChange={this.onChangeFontStyle}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
              filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="normal" style={{fontStyle: 'normal', color: themeFontColor}}>None</Option>
              <Option value="italic" style={{fontStyle: 'italic', color: themeFontColor}}>Italic</Option>
            </Select>
          </div>
        </div>

        <div id="sizeElement">
          <strong style={{color: themeFontColor}}><Icon type="font-size" /></strong>
          <Slider defaultValue={14} max={48} onChange={this.onSizeChange} />
        </div>
  
        <div id="bottomZone">
          <div id="leftSide">
            <span style={{color: themeFontColor, fontFamily: 'Roboto, sans-serif'}}>Pick a color</span>
            <SketchPicker onChangeComplete={this.onPickerChange} color={colorPicker} disableAlpha />
          </div>
          <Arial currentFontComponent={currentFontComponent} currentFontWeight={currentFontWeight} themeFontColor={themeFontColor} colorPicker={colorPicker} currentSize={currentSize} currentFontStyle={currentFontStyle} /> 
        </div>

      </div>
    )
  }
}

 /**
* Export
*/
export default App;
