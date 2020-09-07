import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AllActivityScreen from '../screens/AllActivityScreen'
import AddAttainmentScreen from '../screens/AddAttainmentScreen'
import AllPrizeScreen from '../screens/AllPrizeScreen'
import HallFameScreen from '../screens/HallFameScreen'
import TasksScreen from '../screens/TasksScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/EvilIcons';
import MailScreen from '../screens/MailScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
      <Tab.Navigator tabBarOptions={{activeTintColor: "#6F51ED"}}>
        <Tab.Screen name="Афиша" component={AllActivityScreen} options={{tabBarIcon: () => (<Icon name='calendar' color={'#373B54'} size={35}></Icon>)}} />
        <Tab.Screen name="Призы" component={AllPrizeScreen}  options={{tabBarIcon: () => (<Icon name='trophy' color={'#373B54'} size={35}></Icon>)}} />
        <Tab.Screen name="Зал славы" component={HallFameScreen}  options={{tabBarIcon: () => (<Icon name='star' color={'#373B54'} size={35}></Icon>)}} />
        <Tab.Screen name="Активность" component={TasksScreen}  options={{tabBarIcon: () => (<MaterialCommunityIcons name="beaker-outline" color={'#373B54'} size={28} />)}} />
        <Tab.Screen name="Добавить" component={AddAttainmentScreen} options={{tabBarIcon: () => (<Icon name='plus' color={'#373B54'} size={35}></Icon>)}} />
        <Tab.Screen name="Почта" component={MailScreen} options={{tabBarIcon: () => (<Icon name='bell' color={'#373B54'} size={35}></Icon>)}} />
        <Tab.Screen name="Профиль" component={ProfileScreen} options={{tabBarIcon: () => (<Icon name='user' color={'#373B54'} size={35}></Icon>)}} />
      </Tab.Navigator>
  )
}

export default MainTabNavigator