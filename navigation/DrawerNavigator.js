import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AddAttainmentScreen from '../screens/AddAttainmentScreen'
import MailScreen from '../screens/MailScreen'
import AllActivityScreen from '../screens/AllActivityScreen'
import AllPrizeScreen from '../screens/AllPrizeScreen'
import HallFameScreen from '../screens/HallFameScreen'
import TasksScreen from '../screens/TasksScreen'
import ProfileScreen from '../screens/ProfileScreen' 
import MainTabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

function MainDrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Мероприятия" component={MainTabNavigator} />
            <Drawer.Screen name="Призы" component={AllPrizeScreen} />
            <Drawer.Screen name="Зал славы" component={HallFameScreen} />
            <Drawer.Screen name="Активность" component={TasksScreen} />
            <Drawer.Screen name="Добавить достижение" component={AddAttainmentScreen} />
            <Drawer.Screen name="Почта" component={MailScreen} />
            <Drawer.Screen name="Профиль" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator