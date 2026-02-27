import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const NavigationMenu = ({ activeTab: propActiveTab }) => {
    const navigation = useNavigation();
    const route = useRoute();

    // Determine active tab based on current route if not provided explicitly
    const activeTab = propActiveTab || route.name;

    const tabs = [
        { name: 'Home', icon: 'home', type: 'Ionicons', route: 'Home' },
        { name: 'Workouts', icon: 'dumbbell', type: 'FontAwesome5', route: 'Workouts' },
        { name: 'Add', icon: 'add', type: 'Ionicons', route: 'AddWorkout', isSpecial: true },
        { name: 'Progress', icon: 'bar-chart', type: 'Ionicons', route: '' },
        { name: 'Profile', icon: 'person-outline', type: 'Ionicons', route: '' },
    ];

    const renderIcon = (tab) => {
        if (tab.isSpecial) {
            return (
                <View style={styles.specialAddButton}>
                    <Ionicons name="add" size={32} color="#FFFFFF" />
                </View>
            );
        }

        const color = activeTab === tab.name ? '#1A1A1A' : '#A0A0A0';
        const size = 24;

        if (tab.type === 'Ionicons') {
            return <Ionicons name={activeTab === tab.name && tab.icon === 'home' ? 'home' : tab.icon} size={size} color={color} />;
        } else if (tab.type === 'FontAwesome5') {
            return <FontAwesome5 name={tab.icon} size={20} color={color} />;
        }
    };

    const handlePress = (tab) => {
        if (tab.route) {
            navigation.navigate(tab.route);
        }
    };

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.name}
                    style={[styles.tabItem, tab.isSpecial && styles.specialTabContainer]}
                    onPress={() => handlePress(tab)}
                >
                    {renderIcon(tab)}
                    {!tab.isSpecial && (
                        <Text style={[styles.tabLabel, activeTab === tab.name && styles.activeTabLabel]}>
                            {tab.name}
                        </Text>
                    )}
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
        paddingBottom: 12, // For safe area/modern look
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 10,
        marginTop: 4,
        color: '#A0A0A0',
    },
    activeTabLabel: {
        color: '#1A1A1A',
        fontWeight: '500',
    },
    specialTabContainer: {
        marginTop: -30,
    },
    specialAddButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#02c493ff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 2,
    },
});

export default NavigationMenu;
