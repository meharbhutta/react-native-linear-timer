'use strict';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ViewPropTypes } from 'react-native';

const ViewPropTypesStyle = ViewPropTypes ? ViewPropTypes.style : View.propTypes.style;

export default class LinearTimer extends React.Component {
  static propTypes = {
    min: PropTypes.number.isRequired,
    height: PropTypes.number,
    rermainingEndThreshold: PropTypes.number,
    elapsedIndicatorColor: PropTypes.string,
    remainingIndicatorColor: PropTypes.string,
    rermainingEndIndicatorColor: PropTypes.string,
    style: ViewPropTypesStyle,
    textStyle: Text.propTypes.style,
    onTimeElapsed: PropTypes.func
  };

  static defaultProps = {
    height: 38,
    rermainingEndThreshold: 10,
    elapsedIndicatorColor: '#A8C3BC',
    remainingIndicatorColor: '#0E3657',
    rermainingEndIndicatorColor: '#cc0000',
    style: null,
    textStyle: null,
    onTimeElapsed: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      width: '100%',
      remainingTime: props.min * 60
    };
  }

  componentDidMount() {
    this.timeWidth = undefined;
    this.widthCheck = undefined;

    this.timer = setInterval(() => {
      const { min, onTimeElapsed } = this.props,
        { remainingTime: previousTime } = this.state,
        remainingTime = previousTime - 1;

      this.setState(
        {
          remainingTime,
          width: `${((remainingTime / (min * 60)) * 100).toFixed(1)}%`
        },
        () => {
          if (remainingTime === 0) {
            clearInterval(this.timer);
            onTimeElapsed();
          }
        }
      );
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    const {
        height: containerHeight,
        style,
        textStyle,
        rermainingEndThreshold,
        elapsedIndicatorColor,
        remainingIndicatorColor,
        rermainingEndIndicatorColor
      } = this.props,
      { width, remainingTime } = this.state,
      height = containerHeight / 2 - 4;

    return (
      <View
        style={{
          ...__styles.container,
          ...style,
          height: containerHeight
        }}
      >
        <View
          style={{
            ...__styles.timerView,
            width: this.widthCheck ? this.timeWidth : width
          }}
          onLayout={({ nativeEvent }) => {
            if (!this.widthCheck) this.widthCheck = nativeEvent.layout.width <= this.timeWidth;
          }}
        >
          <Text
            style={{
              ...__styles.time,
              ...textStyle,
              alignSelf: this.widthCheck ? 'flex-start' : 'flex-end'
            }}
            onLayout={({ nativeEvent }) => {
              if (!this.timeWidth) this.timeWidth = nativeEvent.layout.width + 4;
            }}
          >
            {`${Math.ceil(remainingTime / 60)} min`}
          </Text>
        </View>
        <View
          style={{
            ...__styles.elapsedIndicator,
            backgroundColor: elapsedIndicatorColor,
            height
          }}
        >
          <View
            style={{
              backgroundColor:
                parseFloat(width) < rermainingEndThreshold ? rermainingEndIndicatorColor : remainingIndicatorColor,
              width,
              height
            }}
          />
        </View>
      </View>
    );
  }
}

const __styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 2,
    backgroundColor: 'transparent'
  },
  timerView: {
    marginVertical: 4,
    justifyContent: 'center'
  },
  time: {
    paddingHorizontal: 6,
    fontSize: 12,
    lineHeight: 14
  },
  elapsedIndicator: {
    flex: 1,
    overflow: 'hidden'
  }
});
