import React from 'react';
import {StyleSheet, View} from 'react-native';

const Box = ({rounded, size, color}) => {
  // 삼항 연산자
  // return <View style={[styles.box, props.rounded ? styles.rounded : null]} />;

  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: '#222',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

Box.defaultProps = {
  size: 'medium',
  color: 'red',
};

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
