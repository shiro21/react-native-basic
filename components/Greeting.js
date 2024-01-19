import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <View>
      <Text>{props.name}</Text>

      <Text>{getDifference(5, 4)}</Text>
    </View>
  );
};

const getDifference = (a, b) => {
  return a - b;
};

export default Greeting;
