import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddWorkoutCard = ({ onAddPress }) => {
    return (
        <View style={styles.promoBanner}>
            <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>Start Plan Your Workouts</Text>
                <Text style={styles.promoSubtext}>
                    Unlock advanced analytics and personalized diet plans.
                </Text>
                <TouchableOpacity style={styles.addWorkoutsBtn} onPress={onAddPress}>
                    <Text style={styles.addWorkoutsText}>Add Workouts</Text>
                    <Ionicons name="arrow-forward" size={18} color="#00D09C" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    promoBanner: {
        backgroundColor: '#0A0A0A',
        borderRadius: 12,
        padding: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    promoContent: {
        zIndex: 1,
    },
    promoTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    promoSubtext: {
        color: '#A0A0A0',
        fontSize: 13,
        marginBottom: 15,
        lineHeight: 18,
    },
    addWorkoutsBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    addWorkoutsText: {
        color: '#00D09C',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default AddWorkoutCard;
