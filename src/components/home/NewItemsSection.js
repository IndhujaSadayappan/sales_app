import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyNewItems = Array.from({ length: 10 }, (_, i) => ({
  id: `new-${i}`,
  name: `New Item ${i + 1}`,
  price: 299 + i * 150,
  image: `https://picsum.photos/seed/new${i}/200/280`,
}));

const NewItemsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Items</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAll}>See All</Text>
          <Ionicons name="chevron-forward" size={16} color="#0066ff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummyNewItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  seeAll: {
    color: '#0066ff',
    fontWeight: '600',
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    width: 140,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    margin: 8,
    marginBottom: 4,
    color: '#222',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e91e63',
    marginLeft: 8,
    marginBottom: 8,
  },
});

export default NewItemsSection;