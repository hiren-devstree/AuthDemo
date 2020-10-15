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
import PreviewPhoto from '../screens/PreviewPhoto';
import EventDetailScreen from '../screens/EventScreen/EventDetailScreen';
import StyleConfig from "../helper/StyleConfig";
import {NK_INIT, NK_REGISTER, NK_LOGIN, NK_OTP_VERIFICATION, NK_DASHBOARD, NK_PREVIEW_PHOTO,
  NK_EVENTS, NK_EVENT_DETAILS, NK_PHOTOS, NK_GUESTS, NK_SETTINGS} from 'src/helper/constant' 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const EventStack = ((props) =>
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name={NK_EVENTS} component={EventScreen} />
    <Stack.Screen options={{ headerShown: false }} name={NK_EVENT_DETAILS} component={EventDetailScreen} />
  </Stack.Navigator>
)
const TabNavigator = ((props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "birthday-cake";
          if (route.name === NK_EVENTS) {
            iconName = "birthday-cake";
          } else if (route.name === NK_PHOTOS) {
            iconName = "camera";
          } else if (route.name === NK_GUESTS) {
            iconName = "group";
          } else if (route.name === NK_SETTINGS) {
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
      <Tab.Screen name={NK_EVENTS} component={EventStack} />
      <Tab.Screen name={NK_PHOTOS} component={PhotosScreen} />
      <Tab.Screen  name={NK_GUESTS} component={GuestScreen} />
      <Tab.Screen name={NK_SETTINGS} component={SettingsScreen} />
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
        <Stack.Screen options={{ headerShown: false }} name="PreviewPhoto" component={PreviewPhoto} />
                
       
      </Stack.Navigator>

    </NavigationContainer >
  );
}

export default AppNavigator ;