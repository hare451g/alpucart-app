import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import CategoryCard from '../../components/CatergoryCard';

import {categoryListMock} from './categories.mock';

function CategoryListContainer(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [isFetchingCategory, setFetchingCategory] = useState(false);

  useEffect(() => {
    const mockFetchCategory = () => {
      setFetchingCategory(true);
      setTimeout(() => {
        setCategoryList(categoryListMock);
        setFetchingCategory(false);
      }, 2000);
    };
    mockFetchCategory();
  }, []);

  const onSelectCategory = category => setSelectedCategory(category);

  if (isFetchingCategory) {
    return (
      <View>
        <Text>Fetching Categories . . . </Text>
      </View>
    );
  }

  if (categoryList && categoryList.length > 0) {
    return (
      <ScrollView horizontal>
        {categoryList.map(category => (
          <View style={{padding: 8}}>
            <CategoryCard
              {...category}
              onPress={category => onSelectCategory(category)}
            />
          </View>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>Category is empty! </Text>
      </View>
    );
  }
}

export default CategoryListContainer;
