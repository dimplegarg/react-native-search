import React from 'react';
import { createAppContainer, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './home';
import List from './list';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContentComponent = props => {
  return (
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={{ justifyContent: "center", paddingVertical: 100, paddingHorizontal: 25 }}>
          <TouchableOpacity activeOpacity={.4}
            onPress={() => { props.navigation.closeDrawer(); props.navigation.navigate('Home') }}
            style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
            <Ionicons
              name="home-outline"
              size={20}
              style={{ marginRight: 10 }}
            />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.4} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
            <Ionicons
              name="log-out-outline"
              size={20}
              style={{ marginRight: 10 }}
            />
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


const DrawerStack = createDrawerNavigator({
  Home,
  List
}, {
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
});

const AppNavigator = createSwitchNavigator({
  DrawerStack,
  List
})

export default createAppContainer(AppNavigator);