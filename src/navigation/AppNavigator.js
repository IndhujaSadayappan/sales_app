import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Placeholder screens for non-Home tabs (replace with real ones later)
const LikesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Favorites</Text>
  </View>
);

const MessagesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Messages</Text>
  </View>
);

const CartScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cart</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile</Text>
  </View>
);

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
       
        height: 60,
        paddingTop: 0,
        paddingBottom: 8,
        marginBottom: 8,
        elevation: 8,
        
      },
      tabBarActiveTintColor: '#0066ff',
      tabBarInactiveTintColor: '#757575',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={25}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Likes"
      component={LikesScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'heart' : 'heart-outline'}
            size={25}
            color={color}
          />
        ),
        tabBarBadgeStyle: { backgroundColor: '#ff3b30', fontSize: 10 },
      }}
    />

    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'chatbubble' : 'chatbubble-outline'}
            size={25}
            color={color}
          />
        ),
        tabBarBadgeStyle: { backgroundColor: '#ff3b30', fontSize: 10 },
      }}
    />

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'cart' : 'cart-outline'}
            size={25}
            color={color}
          />
        ),
        tabBarBadgeStyle: { backgroundColor: '#ff3b30', fontSize: 10 },
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
            size={25}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;