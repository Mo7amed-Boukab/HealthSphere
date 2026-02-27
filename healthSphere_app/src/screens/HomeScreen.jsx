import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import WorkoutCard from '../components/WorkoutCard';
import GlobalStatCard from '../components/GlobalStatCard';
import AddWorkoutCard from '../components/AddWorkoutCard';
import NavigationMenu from '../components/NavigationMenu';
import { useWorkouts } from '../context/WorkoutContext';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { workouts, isLoading, totalWorkouts, totalMinutes, refreshWorkouts } = useWorkouts();

    const renderWorkout = ({ item }) => {
        const d = new Date(item.date);
        const dateString = d.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        return (
            <WorkoutCard
                type={item.type.toLowerCase()}
                title={`${item.type} Session`}
                date={dateString}
                duration={item.duration}
                intensity={item.intensity.toUpperCase()}
                onPress={() => navigation.navigate('WorkoutDetails', {
                    id: item.id,
                    type: item.type,
                    title: `${item.type} Session`,
                    date: dateString,
                    duration: item.duration,
                    intensity: item.intensity,
                    notes: item.notes || ""
                })}
            />
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header name="mohamed" />

                <View style={styles.fixedCardContainer}>
                    <GlobalStatCard
                        workouts={totalWorkouts}
                        minutes={totalMinutes.toString()}
                        status="All Time"
                        onViewReport={() => console.log('View Report')}
                    />
                </View>

                <View style={styles.fixedHeaderInner}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Activities</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Workouts')}>
                            <Text style={styles.seeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>
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
                                <Text style={styles.emptySubtext}>Tap below to start your fitness journey!</Text>
                            </View>
                        )
                    }
                />

                {/* Fixed Bottom CTA */}
                <View style={styles.fixedBottomContainer}>
                    <AddWorkoutCard onAddPress={() => navigation.navigate('AddWorkout')} />
                </View>

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
    fixedHeaderInner: {
        paddingHorizontal: 20,
        backgroundColor: '#F8F9FB',
        paddingTop: 15,
    },
    promoContainer: {
        marginTop: 15,
        marginBottom: 10,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
    fixedBottomContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#F8F9FB',
        paddingTop: 18,
        paddingBottom: 70, // Space above navigation menu
    },
    navContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    listContent: {
        paddingBottom: 100,
    },
    loader: {
        marginTop: 40,
    },
    emptyContainer: {
        paddingVertical: 40,
        alignItems: 'center',
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
    footerContainer: {
        marginTop: 10,
    },
});

export default HomeScreen;
