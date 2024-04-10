// import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
// import { useRoute } from '@react-navigation/native';



import MealsList from '../Components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0)
    // const route = useRoute(); can be used likke this
    // to use route prop like here we need to have component registered like 'screen' in app component

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    return (
        <MealsList items={displayedMeals} />
    )
}

export default MealsOverviewScreen;

