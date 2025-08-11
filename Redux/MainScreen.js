


import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../store/slices/counterSlice';
import { increment, decrement } from '../Redux/counterSlice';

const MainScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />

         <Button title="Expr !" onPress={() => {console.log(increment())}} />
    </View>
  );
};

export default MainScreen;
