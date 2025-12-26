import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const dummyJustForYou = Array.from({ length: 12 }, (_, i) => ({
  id: `jfy-${i}`,
  name: `Recommended Product ${i + 1}`,
   name2: ` ${i + 1}`,
  price: 699 + i * 120,
  image: `https://picsum.photos/seed/jfy${i}/200/260`,
}));

const JustForYouSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just For You</Text>

      <FlatList
        data={dummyJustForYou}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.size}>Size: {item.name2}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingBottom: 80,
    padding:8
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 6,
    marginBottom: 12,
    color: '#111',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  size: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e91e63',
  },
});

export default JustForYouSection;