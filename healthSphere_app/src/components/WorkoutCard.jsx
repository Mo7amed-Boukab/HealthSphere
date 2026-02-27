import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const WorkoutCard = ({ type, title, date, duration, intensity, onPress }) => {
    const getIcon = () => {
        const normalized = (type || '').toLowerCase();
        const iconColor = "#3B3C73";
        switch (normalized) {
            case 'run':
            case 'running':
                return <FontAwesome5 name="running" size={20} color={iconColor} />;
            case 'cycle':
            case 'cycling':
                return <FontAwesome5 name="bicycle" size={20} color={iconColor} />;
            case 'gym':
            case 'weightlifting':
                return <FontAwesome5 name="dumbbell" size={18} color={iconColor} />;
            case 'swim':
            case 'swimming':
                return <FontAwesome5 name="swimmer" size={20} color={iconColor} />;
            case 'yoga':
                return <MaterialCommunityIcons name="yoga" size={24} color={iconColor} />;
            default:
                return <FontAwesome5 name="walking" size={20} color={iconColor} />;
        }
    };

    const getIntensityStyle = () => {
        switch ((intensity || '').toUpperCase()) {
            case 'HIGH':
                return { color: '#663BBA' };
            case 'MEDIUM':
            case 'MED':
                return { color: '#FF7F50' };
            case 'LOW':
                return { color: '#FFD700' };
            default:
                return { color: '#A0A0A0' };
        }
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.iconContainer}>
                {getIcon()}
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <View style={styles.statItem}>
                        <Ionicons name="time-outline" size={14} color="#A0A0A0" />
                        <Text style={styles.statText}>{duration} min</Text>
                    </View>
                    <Text style={styles.dot}>•</Text>
                    <View style={styles.statItem}>
                        <Ionicons name="calendar-outline" size={14} color="#A0A0A0" />
                        <Text style={styles.statText}>{date}</Text>
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
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#d7d3ff34',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    contentContainer: {
        flex: 1,
    },
    headerRow: {
        marginBottom: 6,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1A1A1A',
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
        fontSize: 12,
        color: '#888',
    },
    dot: {
        marginHorizontal: 6,
        color: '#C0C0C0',
        fontSize: 12,
    },
    intensityContainer: {
        marginLeft: 10,
        minWidth: 45,
        alignItems: 'flex-end',
    },
    intensityText: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});

export default WorkoutCard;
