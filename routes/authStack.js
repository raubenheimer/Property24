import { createStackNavigator } from 'react-navigation-stack';
import LogIn from '../screens/login';
import SignUp from '../screens/signup';

const screens = {
    Home: {
        screen: LogIn,
        navigationOptions: {
            title: 'Login'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up'
        }
    }
}

const AuthStack = createStackNavigator(screens);

export default AuthStack;

