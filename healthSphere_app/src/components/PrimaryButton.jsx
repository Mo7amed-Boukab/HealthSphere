import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrimaryButton = ({ title, onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.content}>
                {iconName && <Ionicons name={iconName} size={20} color="#FFFFFF" style={styles.icon} />}
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0d9c80c0',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        shadowColor: '#0d9c80c0',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 8,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PrimaryButton;
