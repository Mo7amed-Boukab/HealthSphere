import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import WorkoutCard from '../components/WorkoutCard';
import NavigationMenu from '../components/NavigationMenu';
import { getAllWorkouts } from '../storage/workoutStorage';
import { Ionicons } from '@expo/vector-icons';

const WorkoutsScreen = () => {
    const router = useRouter();
    const [workouts, setWorkouts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const fetchWorkouts = async () => {
                try {
                    setIsLoading(true);
                    const data = await getAllWorkouts();
                    setWorkouts(data);
                } catch (error) {
                    console.error('Error fetching workouts', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchWorkouts();
        }, [])
    );

    const renderWorkout = ({ item }) => {
        const estCalories = Math.round(item.duration * 7.5);

        const d = new Date(item.date);
        const dateString = d.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        return (
            <WorkoutCard
                type={item.type.toLowerCase()}
                title={`${item.type} Session`}
                date={dateString}
                duration={item.duration}
                calories={estCalories}
                intensity={item.intensity.toUpperCase()}
                onPress={() => router.push({
                    pathname: '/workout-details',
                    params: {
                        id: item.id,
                        type: item.type,
                        title: `${item.type} Session`,
                        date: dateString,
                        duration: item.duration,
                        calories: estCalories,
                        intensity: item.intensity,
                        notes: item.notes || ""
                    }
                })}
            />
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Workouts</Text>
                </View>

                <FlatList
                    data={workouts}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    renderItem={renderWorkout}
                    ListEmptyComponent={
                        isLoading ? (
                            <ActivityIndicator size="large" color="#00D09C" style={styles.loader} />
                        ) : (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No workouts logged yet.</Text>
                                <Text style={styles.emptySubtext}>Tap the + icon or Add Workout below to start!</Text>
                            </View>
                        )
                    }
                />

                <View style={styles.navContainer}>
                    <NavigationMenu activeTab="Workouts" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    addBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0F9F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    listContent: {
        paddingBottom: 100,
    },
    navContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    loader: {
        marginTop: 40,
    },
    emptyContainer: {
        paddingVertical: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3B3C73',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#8089B2',
    },
});

export default WorkoutsScreen;
