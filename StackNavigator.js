import React from 'react';
import ChatScreen from './Screens/Chat/ChatScreen';
import MessageScreen from './Screens/Message/MessageScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name='chat' component={ChatScreen} />
    <Stack.Screen name='messages' component={MessageScreen} />
  </Stack.Navigator>;
};

export default StackNavigator;
