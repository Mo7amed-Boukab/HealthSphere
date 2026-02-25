import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const NavigationMenu = ({ activeTab = 'Home' }) => {
    const tabs = [
        { name: 'Home', icon: 'home', type: 'Ionicons' },
        { name: 'Workouts', icon: 'dumbbell', type: 'FontAwesome5' },
        { name: 'Progress', icon: 'bar-chart', type: 'Ionicons' },
        { name: 'Profile', icon: 'person-outline', type: 'Ionicons' },
    ];

    const renderIcon = (tab) => {
        const color = activeTab === tab.name ? '#1A1A1A' : '#A0A0A0';
        const size = 24;

        if (tab.type === 'Ionicons') {
            return <Ionicons name={activeTab === tab.name && tab.icon === 'home' ? 'home' : tab.icon} size={size} color={color} />;
        } else if (tab.type === 'FontAwesome5') {
            return <FontAwesome5 name={tab.icon} size={20} color={color} />;
        }
    };

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity key={tab.name} style={styles.tabItem}>
                    {renderIcon(tab)}
                    <Text style={[styles.tabLabel, activeTab === tab.name && styles.activeTabLabel]}>
                        {tab.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20, // For safe area/modern look
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 11,
        marginTop: 4,
        color: '#A0A0A0',
    },
    activeTabLabel: {
        color: '#1A1A1A',
        fontWeight: '500',
    },
});

export default NavigationMenu;
