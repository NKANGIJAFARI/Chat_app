import React from 'react';
import ChatScreen from './Screens/Chat/ChatScreen';
import MessageScreen from './Screens/Message/MessageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='chat' component={ChatScreen} />
      <Stack.Screen name='Message' component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
