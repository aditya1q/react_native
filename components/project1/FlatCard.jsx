import { StyleSheet, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    const Card = ({ bg }) => (
        <View style={[styles.flatContainer, { backgroundColor: bg }]} />
    )
    return (
        <View style={styles.container}>
            <Card bg="#000" />
            <Card bg="#534" />
            <Card bg="#233" />
        </View>
    )
}
export default FlatCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // flex: 1, // Use flex to fill the available space
        flexDirection: 'row', // Distribute cards horizontally
        // flexWrap: 'wrap', // Allow wrapping of items when space is constrained
        // justifyContent: 'space-between', // Space between items
        padding: 5, // Padding for the container
        gap: 2
    },
    flatContainer: {
        width: '100%', // Use percentage width for responsiveness
        height: 100, // Fixed height for the cards
        borderRadius: 10, // Rounded corners
        // marginBottom: 10, // Space between cards vertically
    }
})