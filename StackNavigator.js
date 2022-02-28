import React from 'react';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name='Message' component={HomeScreen} />
    <Stack.Screen name='Chat' component={NotificationScreen} />
  </Stack.Navigator>;
};

export default StackNavigator;
