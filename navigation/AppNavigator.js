import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import EnterScreen from '../screens/EnterScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import NewProfileScreen from '../screens/NewProfileScreen'
import MainTabNavigator from './TabNavigator'
import SignUpSecondScreen from '../screens/SignUpSecondScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import NewPasswordSecondScreen from '../screens/NewPasswordSecondScreen'
import NewPasswordEndScreen from '../screens/NewPasswordEndScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Enter' component={EnterScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignUpSecond' component={SignUpSecondScreen} />
          <Stack.Screen name='Profile' component={MainTabNavigator} />
          <Stack.Screen name='NewProfile' component={NewProfileScreen} />
          <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
          <Stack.Screen name='NewPasswordSecond' component={NewPasswordSecondScreen} />
          <Stack.Screen name='NewPasswordEnd' component={NewPasswordEndScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default MainStackNavigator