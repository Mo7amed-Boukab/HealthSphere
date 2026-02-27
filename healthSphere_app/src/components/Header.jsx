import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Header = ({ name = "mohamed" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoIconWrapper}>
                        <FontAwesome5 name="heartbeat" size={24} color="#03BD8E" />
                        <View style={styles.miniIconContainer}>
                            <FontAwesome5 name="running" size={12} color="#03BD8E" />
                        </View>
                    </View>
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
        paddingTop: 35,
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
    logoIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: 32,
        height: 32,
    },
    miniIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#32336A', // matches header bg for a 'cutout' effect
        padding: 1,
        borderRadius: 10,
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
