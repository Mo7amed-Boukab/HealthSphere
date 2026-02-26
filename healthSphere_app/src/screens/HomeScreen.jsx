import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import WorkoutCard from '../components/WorkoutCard';
import GlobalStatCard from '../components/GlobalStatCard';
import AddWorkoutCard from '../components/AddWorkoutCard';
import NavigationMenu from '../components/NavigationMenu';

const HomeScreen = () => {
    const router = useRouter();
    const recentWorkouts = [
        { id: '1', type: 'running', title: 'Morning Run', date: 'Today, 7:00 AM', duration: 45, calories: 320, intensity: 'HIGH' },
        { id: '2', type: 'swimming', title: 'Swimming', date: 'Yesterday', duration: 30, calories: 210, intensity: 'MED' },
        { id: '3', type: 'weightlifting', title: 'Weightlifting', date: 'Mon, 12 Oct', duration: 60, calories: 450, intensity: 'HIGH' },
        { id: '4', type: 'yoga', title: 'Yoga Flow', date: 'Sun, 11 Oct', duration: 20, calories: 80, intensity: 'LOW' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header name="mohamed" />

                <View style={styles.fixedCardContainer}>
                    <GlobalStatCard
                        workouts={42}
                        minutes="1,250"
                        status="Today"
                        onViewReport={() => console.log('View Report')}
                    />
                </View>

                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {/* Recent Activities Section */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Activities</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.workoutList}>
                        {recentWorkouts.map(item => (
                            <WorkoutCard
                                key={item.id}
                                type={item.type}
                                title={item.title}
                                date={item.date}
                                duration={item.duration}
                                calories={item.calories}
                                intensity={item.intensity}
                            />
                        ))}
                    </View>

                    {/* Promo Banner */}
                    <AddWorkoutCard onAddPress={() => router.push('/add-workout')} />

                    <View style={{ height: 100 }} />
                </ScrollView>

                <View style={styles.navContainer}>
                    <NavigationMenu activeTab="Home" />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#32336A',
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F9FB',
    },
    fixedCardContainer: {
        paddingHorizontal: 20,
        zIndex: 1,
        marginTop: -20,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    seeAll: {
        color: '#A0A0A0',
        fontSize: 14,
    },
    workoutList: {
        marginBottom: 20,
    },
    navContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default HomeScreen;
