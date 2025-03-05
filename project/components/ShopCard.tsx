import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MapPin, Star } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ShopCardProps {
  shop: {
    id: string;
    name: string;
    image: string;
    rating: number;
    distance: string;
    address: string;
  };
  onPress: (id: string) => void;
  horizontal?: boolean;
}

export default function ShopCard({ shop, onPress, horizontal = false }: ShopCardProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        horizontal ? styles.horizontalContainer : {}
      ]} 
      onPress={() => onPress(shop.id)}
    >
      <Image 
        source={{ uri: shop.image }} 
        style={[
          styles.image,
          horizontal ? styles.horizontalImage : {}
        ]} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{shop.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color={Colors.warning} fill={Colors.warning} />
          <Text style={styles.rating}>{shop.rating}</Text>
          <Text style={styles.distance}>• {shop.distance}</Text>
        </View>
        <View style={styles.addressContainer}>
          <MapPin size={14} color={Colors.gray} />
          <Text style={styles.address} numberOfLines={1}>{shop.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
    width: '100%',
  },
  horizontalContainer: {
    width: 220,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 150,
  },
  horizontalImage: {
    height: 120,
  },
  content: {
    padding: 12,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.darkText,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.darkText,
    marginLeft: 4,
  },
  distance: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.lightText,
    marginLeft: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.lightText,
    marginLeft: 4,
    flex: 1,
  },
});