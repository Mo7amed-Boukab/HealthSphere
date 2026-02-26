import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        color: '#74777dff', // Using the dark blue-grey from the theme
        fontSize: 16,
        fontWeight: '500',
        opacity: 0.7,
    },
});

export default SecondaryButton;
