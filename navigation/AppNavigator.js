import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Homescreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}