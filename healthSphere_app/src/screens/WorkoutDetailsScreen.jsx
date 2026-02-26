import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const WorkoutDetailsScreen = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const workout = {
        id: params.id,
        type: params.type || '',
        intensity: params.intensity || '',
        date: params.date || '',
        duration: params.duration || '',
        notes: params.notes || ""
    };

    // Helper to get category icon
    const getIcon = () => {
        switch (workout.type.toLowerCase()) {
            case 'run': return 'running';
            case 'cycle': return 'bicycle';
            case 'gym': return 'dumbbell';
            case 'swim': return 'swimmer';
            default: return 'walking';
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Session Details</Text>
                <TouchableOpacity style={styles.headerBtn}>
                    <Text style={styles.editBtn}>Edit</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarMain}>
                            <FontAwesome5 name={getIcon()} size={60} color="#00D09C" style={{ opacity: 0.8 }} />
                        </View>
                        <View style={styles.avatarBadge}>
                            <FontAwesome5 name={getIcon()} size={14} color="#00D09C" />
                        </View>
                    </View>
                    <Text style={styles.workoutTitle}>{workout.type}</Text>
                    <Text style={styles.workoutCategory}>{workout.intensity} Intensity</Text>
                    <View style={styles.dateBadge}>
                        <Ionicons name="calendar-outline" size={16} color="#8089B2" />
                        <Text style={styles.dateText}>{workout.date}</Text>
                    </View>
                </View>

                {/* Duration Card */}
                <View style={styles.durationCard}>
                    <View style={styles.cardHeader}>
                        <View style={styles.labelGroup}>
                            <Ionicons name="time-outline" size={20} color="#8089B2" />
                            <Text style={styles.cardLabel}>DURATION</Text>
                        </View>
                        <Text style={styles.cardValueBig}>{workout.duration} min</Text>
                    </View>
                    <View style={styles.progressBarTrack}>
                        <View style={[styles.progressBarFill, { width: `${Math.min((parseInt(workout.duration) / 60) * 100, 100)}%` }]} />
                    </View>
                </View>

                {/* Statistics Cards Area - Intensity and Time Only as requested */}
                <View style={styles.statsGrid}>
                    <View style={styles.statRow}>
                        <View style={styles.statCard}>
                            <View style={styles.statLeft}>
                                <Text style={styles.statLabel}>Intensity</Text>
                                <View style={styles.statValueRow}>
                                    <Text style={styles.statValue}>{workout.intensity}</Text>
                                </View>
                            </View>
                            <View style={[styles.statIcon, { backgroundColor: '#F0F2F7' }]}>
                                <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color="#3B3C73" />
                            </View>
                        </View>
                        <View style={styles.statCard}>
                            <View style={styles.statLeft}>
                                <Text style={styles.statLabel}>Time Spent</Text>
                                <View style={styles.statValueRow}>
                                    <Text style={styles.statValue}>{workout.duration}</Text>
                                    <Text style={styles.statUnit}>min</Text>
                                </View>
                            </View>
                            <View style={[styles.statIcon, { backgroundColor: '#F0F2F7' }]}>
                                <Ionicons name="stopwatch-outline" size={20} color="#3B3C73" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Notes Section */}
                <View style={styles.notesCard}>
                    <View style={styles.notesHeader}>
                        <Ionicons name="reader-outline" size={18} color="#8089B2" />
                        <Text style={styles.notesLabel}>Notes</Text>
                    </View>
                    <Text style={styles.notesText}>
                        {workout.notes && workout.notes !== "" ? workout.notes : "No notes added for this session."}
                    </Text>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>

            {/* Fixed Bottom Action */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.deleteBtn}>
                    <Ionicons name="trash-outline" size={20} color="#00D09C" />
                    <Text style={styles.deleteBtnText}>Delete Workout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#F8F9FB',
    },
    headerBtn: {
        width: 40,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    editBtn: {
        fontSize: 16,
        color: '#00D09C',
        fontWeight: '600',
        textAlign: 'right',
    },
    scrollContent: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    avatarMain: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#E0F9F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        shadowColor: '#00D09C',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
    },
    avatarBadge: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0F9F2',
        elevation: 2,
    },
    workoutTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    workoutCategory: {
        fontSize: 16,
        color: '#8089B2',
        marginBottom: 15,
    },
    dateBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E9F0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        gap: 6,
    },
    dateText: {
        fontSize: 13,
        color: '#3B3C73',
        fontWeight: '600',
    },
    durationCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 20,
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    labelGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    cardLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: '#8089B2',
    },
    cardValueBig: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    progressBarTrack: {
        height: 6,
        backgroundColor: '#F0F2F7',
        borderRadius: 3,
        width: '100%',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00D09C',
        borderRadius: 3,
    },
    statsGrid: {
        width: '100%',
        gap: 12,
        marginBottom: 15,
    },
    statRow: {
        flexDirection: 'row',
        gap: 12,
    },
    statCard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statLeft: {
        flex: 1,
    },
    statLabel: {
        fontSize: 12,
        color: '#8089B2',
        marginBottom: 4,
    },
    statValueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    statUnit: {
        fontSize: 12,
        color: '#8089B2',
    },
    statIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notesCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 15,
        marginBottom: 20,
    },
    notesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10,
    },
    notesLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    notesText: {
        fontSize: 14,
        color: '#505050',
        lineHeight: 20,
    },
    deleteBtn: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 56,
        borderRadius: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#F0F2F7',
    },
    deleteBtnText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00D09C',
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 55,
        paddingTop: 20,
        backgroundColor: '#F8F9FB',
    },
});

export default WorkoutDetailsScreen;
