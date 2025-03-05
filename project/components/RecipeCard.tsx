import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Clock, Users } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    prepTime: string;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
  };
  onPress: (id: string) => void;
}

export default function RecipeCard({ recipe, onPress }: RecipeCardProps) {
  const getDifficultyColor = () => {
    switch (recipe.difficulty) {
      case 'Easy':
        return Colors.success;
      case 'Medium':
        return Colors.warning;
      case 'Hard':
        return Colors.error;
      default:
        return Colors.success;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(recipe.id)}
    >
      <Image 
        source={{ uri: recipe.image }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={14} color={Colors.gray} />
            <Text style={styles.metaText}>{recipe.prepTime}</Text>
          </View>
          <View style={styles.metaItem}>
            <Users size={14} color={Colors.gray} />
            <Text style={styles.metaText}>{recipe.servings} servings</Text>
          </View>
        </View>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor() }]}>
          <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
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
    width: '48%',
  },
  image: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 12,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: Colors.darkText,
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.lightText,
    marginLeft: 4,
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  difficultyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: Colors.white,
  },
});