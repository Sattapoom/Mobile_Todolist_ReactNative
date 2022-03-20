import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import AddingTodo from '../screens/AddingTodo';
import EditingTodo from '../screens/EditingTodo';

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
    },
    EditingTodo: {
        screen :EditingTodo ,
        navigationOptions:{
            headerShown: false,
            }
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);