import React from 'react';
import { TextInput as _TextInput, StyleSheet } from 'react-native';

class TextInput extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <_TextInput
        style={[styles.textInput, style]}
        clearButtonMode='always'
        {...otherProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: 'darkgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    width: '80%'
  }
})

export default TextInput
