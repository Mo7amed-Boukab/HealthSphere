import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Header = ({ name = "mohamed" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.logoContainer}>
                    <Ionicons name="heart-half-outline" size={28} color="#00D09C" />
                    <Text style={styles.logoText}>HealthSphere</Text>
                </View>
                <TouchableOpacity style={styles.notificationBtn}>
                    <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
                    <View style={styles.notificationDot} />
                </TouchableOpacity>
            </View>
            <View style={styles.greetingSection}>
                <Text style={styles.greetingText}>Good Morning, {name}!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#32336A',
        paddingTop: 55,
        paddingHorizontal: 20,
        paddingBottom: 35,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    notificationBtn: {
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 8,
        height: 8,
        backgroundColor: '#00D09C',
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#32336A',
    },
    greetingSection: {
        marginTop: 20,
    },
    greetingText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'serif',
        opacity: 0.9,
    },
});

export default Header;
