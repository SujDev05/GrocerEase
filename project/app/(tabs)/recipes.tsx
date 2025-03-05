import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import SearchBar from '@/components/SearchBar';
import RecipeCard from '@/components/RecipeCard';
import TipCard from '@/components/TipCard';
import { recipes, sustainabilityTips } from '@/data/mockData';
import Colors from '@/constants/Colors';

export default function RecipesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('recipes');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  };

  const handleRecipePress = (id: string) => {
    Alert.alert('Recipe Details', `Viewing recipe ID: ${id}`);
  };

  const renderRecipesContent = () => (
    <>
      <Text style={styles.sectionTitle}>Recommended Recipes</Text>
      <Text style={styles.sectionSubtitle}>Based on your pantry items</Text>
      
      <View style={styles.recipesGrid}>
        {filteredRecipes.map(recipe => (
          <View key={recipe.id} style={styles.recipeCardContainer}>
            <RecipeCard recipe={recipe} onPress={handleRecipePress} />
          </View>
        ))}
      </View>
    </>
  );

  const renderTipsContent = () => (
    <>
      <Text style={styles.sectionTitle}>Sustainability Tips</Text>
      <Text style={styles.sectionSubtitle}>Reduce waste and live sustainably</Text>
      
      {sustainabilityTips.map(tip => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={activeTab === 'recipes' ? "Search recipes..." : "Search tips..."}
        value={searchQuery}
        onChangeText={handleSearch}
        onClear={() => handleSearch('')}
      />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'recipes' && styles.activeTab
          ]}
          onPress={() => setActiveTab('recipes')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'recipes' && styles.activeTabText
          ]}>
            Recipes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'tips' && styles.activeTab
          ]}
          onPress={() => setActiveTab('tips')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'tips' && styles.activeTabText
          ]}>
            Sustainability Tips
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'recipes' ? renderRecipesContent() : renderTipsContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: Colors.lightGray,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: Colors.white,
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.darkGray,
  },
  activeTabText: {
    color: Colors.primary,
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.darkText,
    marginHorizontal: 16,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.lightText,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  recipeCardContainer: {
    width: '48%',
  },
});