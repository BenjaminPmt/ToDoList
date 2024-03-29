
import Home from './pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FormAddTask from './pages/FormAddTask';

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
        tabBarLabelStyle:{color:'#FFFF', fontSize: 13, padding : 1},
        headerShown: false,
        tabBarIcon: ({ focused, color, size, }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = 'home';
            return <Ionicons name="home" size={24} color={'#FFFF'} />;
          }else if(route.name === "Ajout"){
            iconName = 'plus';
            return <FontAwesome name="plus" size={24} color={'#FFFF'} />;
          }
        },
      })}
    >
      
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name='Ajout' component={FormAddTask} />
      {/* Ajoute d'autres écrans de la Tab.Navigator si nécessaire */}
    </Tab.Navigator>
     );
    }
