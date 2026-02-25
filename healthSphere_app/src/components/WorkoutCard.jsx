import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const WorkoutCard = ({ type, title, date, duration, calories, intensity }) => {
    const getIcon = () => {
        switch (type.toLowerCase()) {
            case 'running':
                return <FontAwesome5 name="running" size={20} color="#3B3C73" />;
            case 'swimming':
                return <FontAwesome5 name="swimmer" size={20} color="#3B3C73" />;
            case 'gym':
            case 'weightlifting':
                return <FontAwesome5 name="dumbbell" size={18} color="#3B3C73" />;
            case 'yoga':
                return <MaterialCommunityIcons name="yoga" size={24} color="#3B3C73" />;
            default:
                return <FontAwesome5 name="walking" size={20} color="#3B3C73" />;
        }
    };

    const getIntensityStyle = () => {
        switch (intensity.toUpperCase()) {
            case 'HIGH':
                return { color: '#663BBA' };
            case 'MED':
                return { color: '#FF7F50' };
            case 'LOW':
                return { color: '#FFD700' };
            default:
                return { color: '#A0A0A0' };
        }
    };

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.iconContainer}>
                {getIcon()}
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <View style={styles.statItem}>
                        <Ionicons name="time-outline" size={16} color="#A0A0A0" />
                        <Text style={styles.statText}>{duration} min</Text>
                    </View>
                    <Text style={styles.dot}>•</Text>
                    <View style={styles.statItem}>
                        <MaterialCommunityIcons name="fire" size={16} color="#FF7F50" />
                        <Text style={styles.statText}>{calories} kcal</Text>
                    </View>
                </View>
            </View>
            <View style={styles.intensityContainer}>
                <Text style={[styles.intensityText, getIntensityStyle()]}>{intensity}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e0e0e088',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F0F2F7',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    contentContainer: {
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    date: {
        fontSize: 12,
        color: '#A0A0A0',
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statText: {
        fontSize: 13,
        color: '#666',
    },
    dot: {
        marginHorizontal: 8,
        color: '#A0A0A0',
    },
    intensityContainer: {
        marginLeft: 10,
        minWidth: 40,
        alignItems: 'flex-end',
    },
    intensityText: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});

export default WorkoutCard;
