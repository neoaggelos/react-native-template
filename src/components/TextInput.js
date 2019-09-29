import React from 'react';
import { TextInput as _TextInput, StyleSheet } from 'react-native';

import { Text } from 'react-native';

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
    height: 40,
    borderColor: 'blue',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 300,
  }
})

export default TextInput
