import React from "react";
import {
  Image, View, TouchableWithoutFeedback, Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome} from '@expo/vector-icons';

import InitScreen from '../screens/InitScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import EventScreen from '../screens/EventScreen';
import GuestScreen from '../screens/GuestScreen';
import PhotosScreen from '../screens/PhotosScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventDetailScreen from '../screens/EventScreen/EventDetailScreen';
import StyleConfig from "../helper/StyleConfig";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const EventStack = ((props) =>
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name='EventScreen' component={EventScreen} />
    <Stack.Screen options={{ headerShown: false }} name='EventDetailScreen' component={EventDetailScreen} />
  </Stack.Navigator>
)
const TabNavigator = ((props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "birthday-cake";
          if (route.name === 'EventScreen') {
            iconName = "birthday-cake";
          } else if (route.name === 'Photos') {
            iconName = "camera";
          } else if (route.name === 'Guests') {
            iconName = "group";
          } else if (route.name === 'Settings') {
            iconName = "gear";
          }
          return <FontAwesome name={iconName} size={StyleConfig.countPixelRatio(22)} color={color}  />;
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: StyleConfig.COLORS.purple,
        inactiveTintColor: "#333333aa"
      }}
    >
      <Tab.Screen name="Events" component={EventStack} />
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen  name="Guests" component={GuestScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  )
})



const AppNavigator = ({ ...props }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'screen'}
      >
        <Stack.Screen options={{ headerShown: false }} name="Init" component={InitScreen} path={'init'} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OTPVerificationScreen" component={OTPVerificationScreen} />

        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={TabNavigator} />
        
       
      </Stack.Navigator>

    </NavigationContainer >
  );
}

export default AppNavigator ;