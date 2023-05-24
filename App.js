import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import AddScreen from './src/views/screens/AddPropertyToRent';
import AddScreen2 from './src/views/screens/AddPropertyToRent2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
       <Stack.Screen name="AddScreen" component={AddScreen}/>
       <Stack.Screen name="AddScreen2" component={AddScreen2}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
