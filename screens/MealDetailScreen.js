import { useLayoutEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite, addFavorite } from '../store/favorites';

import { MEALS } from '../data/dummy-data';

import MealDetails from '../Components/MealDetails';
import Subtitle from '../Components/MealDetail/Subtitle';
import List from '../Components/MealDetail/List';
import IconButton from '../Components/IconButton';

const MealDetailScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const favoriteMealIds = useSelector((state) => state.favorites.ids);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavouriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }))
        } else {
            dispatch(addFavorite({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color={"white"} onPress={changeFavouriteStatusHandler} />
            }
        })
    }, [navigation, changeFavouriteStatusHandler])


    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title} >{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer} >
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>

    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listContainer: {
        width: "80%",
    },
    listOuterContainer: {
        alignItems: "center",
    }
})