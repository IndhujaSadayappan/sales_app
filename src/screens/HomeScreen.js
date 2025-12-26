import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../context/AuthContext';

import Header from '../components/home/Header';
import OrderStatusButtons from '../components/home/OrderStatusButtons';
import StoriesSection from '../components/home/StoriesSection';
import NewItemsSection from '../components/home/NewItemsSection';
import FlashSaleSection from '../components/home/FlashSaleSection';
import JustForYouSection from '../components/home/JustForYouSection';

const HomeScreen = () => {
  const { logout } = useAuth();

  const sections = [
    {
      id: 'logout',
      component: (
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    { id: 'header', component: <Header /> },
    { id: 'orders', component: <OrderStatusButtons /> },
    { id: 'stories', component: <StoriesSection /> },
    { id: 'new-items', component: <NewItemsSection /> },
    { id: 'flash-sale', component: <FlashSaleSection /> },
    { id: 'just-for-you', component: <JustForYouSection /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  contentContainer: {
    paddingBottom: 100, // space for bottom tab bar
  },

  logoutContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },

  logoutText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default HomeScreen;
