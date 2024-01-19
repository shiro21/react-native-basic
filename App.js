import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [counter, setCounter] = useState(0);
  const onIncrease = () => setCounter(prev => prev + 1);
  const onDecrease = () => setCounter(prev => prev - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter
        counter={counter}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
