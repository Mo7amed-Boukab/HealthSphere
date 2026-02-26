import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const CategorieOptionButton = ({ title, icon, iconType = 'FontAwesome5', isActive, onPress }) => {
    const renderIcon = () => {
        const color = isActive ? '#FFFFFF' : '#3B3C73';
        const size = 16;

        if (iconType === 'MaterialCommunityIcons') {
            return <MaterialCommunityIcons name={icon} size={size + 2} color={color} />;
        }
        return <FontAwesome5 name={icon} size={size} color={color} />;
    };

    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
            onPress={onPress}
        >
            {renderIcon()}
            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
    },
    activeButton: {
        backgroundColor: '#0d9c80c0',
        borderColor: '#0d9c80c0',
    },
    inactiveButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#F0F2F7',
    },
    text: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '600',
    },
    activeText: {
        color: '#FFFFFF',
    },
    inactiveText: {
        color: '#3B3C73',
    },
});

export default CategorieOptionButton;
