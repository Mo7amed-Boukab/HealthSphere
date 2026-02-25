import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GlobalStatCard = ({ workouts = 42, minutes = "1,250", status = "Today", onViewReport }) => {
    return (
        <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
                <Text style={styles.summaryTitle}>Weekly Summary</Text>
                <TouchableOpacity onPress={onViewReport}>
                    <Text style={styles.viewReport}>View Report</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statsRow}>
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>WORKOUTS</Text>
                    <Text style={styles.statValue}>{workouts}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>MINUTES</Text>
                    <Text style={styles.statValue}>{minutes}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>ACTIVE</Text>
                    <Text style={styles.statValue}>{status}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    summaryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10, // Adjusted to match user's preference for smaller radius
        padding: 20,
        marginBottom: 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    summaryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    viewReport: {
        color: '#32336A',
        fontSize: 13,
        fontWeight: '600',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statBox: {
        alignItems: 'center',
        flex: 1,
    },
    statLabel: {
        fontSize: 10,
        color: '#A0A0A0',
        fontWeight: '600',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    statValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: '#F0F0F0',
    },
});

export default GlobalStatCard;
