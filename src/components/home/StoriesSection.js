import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const dummyStories = Array.from({ length: 12 }, (_, i) => ({
  id: `story-${i}`,
  name: `User ${i + 1}`,
avatar: `https://picsum.photos/seed/clothing${i}/200/300`,
}));

const StoriesSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <FlatList
        data={dummyStories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 16,
    marginBottom: 12,
    color: '#111',
  },
  list: {
    paddingHorizontal: 16,
  },
  story: {
    alignItems: 'center',
    marginRight: 2,
    width: 90,
  },
  avatar: {
    width: 90,
    height: 140,
    borderRadius: 12,
    borderWidth: 3,
    borderColor:'#fff'
  },
  
});

export default StoriesSection;