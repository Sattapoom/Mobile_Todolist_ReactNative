import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import AddingTodo from '../screens/AddingTodo';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            headerShown: false,
            title: 'Todo list'
        }
    },
    AddingTodo: {
        screen :AddingTodo ,
        navigationOptions:{
            headerShown: false,
            title: 'Addtodo'
        }
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);


// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import Home from '../screens/Home';
// import Addtodo from '../screens/Addtodo';

// const Stack = createStackNavigator()

// export default function Navigator() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Home'>
//           <Stack.Screen name='Home' component={Home} />
//           <Stack.Screen name='Addtodo' component={Addtodo} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }