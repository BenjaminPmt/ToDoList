import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FormTask from './components/FormTask';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
 
}
function BottomTabNavigator() {
  return (
<Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle : {backgroundColor: '#1F2D5C'},
        tabBarLabelStyle:{color:'#AAAA', fontSize: 13, paddingBottom:2},
        headerShown: false,
        tabBarIcon: ({ focused, color, size, }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home';
            return <Ionicons name="home" size={28} color={'#FFFF'} />;
          }else if(route.name === "Ajout"){
            iconName = 'plus';
            return <FontAwesome name="plus" size={24} color={'#FFFF'} />;
          }
        },
      })}
    >
      
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name='Ajout' component={FormTask} />
      {/* Ajoute d'autres écrans de la Tab.Navigator si nécessaire */}
    </Tab.Navigator>
     );
    }
