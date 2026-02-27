import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import AddWorkoutScreen from '../screens/AddWorkoutScreen';
import WorkoutDetailsScreen from '../screens/WorkoutDetailsScreen';
import { WorkoutProvider } from '../context/WorkoutContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <WorkoutProvider>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#F8F9FB' }
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Workouts" component={WorkoutsScreen} />
                <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} />
                <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
            </Stack.Navigator>
        </WorkoutProvider>
    );
};

export default AppNavigator;
