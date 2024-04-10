import { View, Text, StyleSheet } from 'react-native';

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
    return (
        <View style={[styles.details, style]} >
            <Text style={[styles.detailItem, textStyle]} >{duration}</Text>
            <Text style={[styles.detailItem, textStyle]} >{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]} >{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: 8,
    },
    detailItem: {
        fontSize: 12,
    },
})