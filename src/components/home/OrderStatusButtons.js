import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OrderStatusButtons = () => {
  const statuses = [
    { title: 'To Pay', count: 3 },
    { title: 'To Receive', count: 0 },
    { title: 'To Review', count: 1 },
  ];

  return (
    <View style={styles.container}>
      {statuses.map(item => (
        <TouchableOpacity key={item.title} style={styles.button}>
          <Text style={styles.title}>{item.title}</Text>
          {/* {item.count > 0 && (
            // <View style={styles.badge}>
            //   <Text style={styles.badgeText}>{item.count}</Text>
            // </View>
          )} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    minWidth: 90,
    position: 'relative',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
});

export default OrderStatusButtons;