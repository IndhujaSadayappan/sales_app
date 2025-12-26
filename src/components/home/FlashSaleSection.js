import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CountdownTimer from './CountdownTimer';

const dummyFlashItems = Array.from({ length: 6}, (_, i) => ({
  id: `flash-${i}`,
  name: `Flash Deal ${i + 1}`,
  originalPrice: 1499 + i * 300,
  discount: 35 + (i % 5) * 5,
  image: `https://picsum.photos/seed/flash${i}/220/300`,
}));

const FlashSaleSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Flash Sale</Text>
        <View style={styles.timerContainer}>
          <Ionicons name="time-outline" size={18} color="#d32f2f" />
          <CountdownTimer durationSeconds={3 * 3600 + 45 * 60 + 12} />
        </View>
      </View>

      <View style={styles.grid}>
        {dummyFlashItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{item.discount}%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  card: {
    width: '31.5%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffcccc',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ff1744',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default FlashSaleSection;