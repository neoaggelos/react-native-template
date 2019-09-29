import React from 'react';
import { Button as _Button } from 'react-native-paper';

/* Allow extending in the future */
class Button extends React.Component {
    constructor(props) {
      super(props);
      const { mode, color, ...otherProps } = props;

      this.state.mode = mode ? mode : 'contained';
      this.state.color = color ? color : 'blue';
      this.state.props = otherProps
    }

    state = {}

    render() {
      return (
        <_Button
          mode={this.state.mode}
          color={this.state.color}
          {...this.state.props}
        />
      )
    }
}

export default Button;
