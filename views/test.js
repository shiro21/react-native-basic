import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const [num, setNum] = useState(0);

  const onPress = () => {
    setVisible(prev => !prev);
  };

  const numUpdate = number => {
    setNum(prev => prev + number);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Greeting name="Jun" />
          <Box rounded={visible} size="large" color="blue" />

          <Button title="버튼 클릭" onPress={onPress} />
          {/* 삼항 연산자 */}
          {visible ? <Box rounded={visible} size="large" color="blue" /> : null}
          {/* && 연산자 */}
          {visible && <Box rounded={visible} size="large" color="blue" />}
        </View>

        <View>
          <Text>{num}</Text>
          <Button title="+1" onPress={() => numUpdate(1)} />
          <Button title="-1" onPress={() => numUpdate(-1)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
