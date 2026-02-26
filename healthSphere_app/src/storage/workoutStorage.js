import AsyncStorage from '@react-native-async-storage/async-storage';

const WORKOUTS_KEY = '@workouts';

/**
 * Save a new workout to AsyncStorage
 * @param {Object} workout - The workout object to save
 */
export const saveWorkout = async (workout) => {
    try {
        const existingWorkoutsJson = await AsyncStorage.getItem(WORKOUTS_KEY);
        const existingWorkouts = existingWorkoutsJson ? JSON.parse(existingWorkoutsJson) : [];

        // Add unique ID if not provided
        const newWorkout = {
            ...workout,
            id: workout.id || Date.now().toString(),
        };

        const updatedWorkouts = [newWorkout, ...existingWorkouts];
        await AsyncStorage.setItem(WORKOUTS_KEY, JSON.stringify(updatedWorkouts));
        return true;
    } catch (error) {
        console.error('Error saving workout:', error);
        throw error;
    }
};

/**
 * Get all workouts from AsyncStorage
 */
export const getAllWorkouts = async () => {
    try {
        const workoutsJson = await AsyncStorage.getItem(WORKOUTS_KEY);
        return workoutsJson ? JSON.parse(workoutsJson) : [];
    } catch (error) {
        console.error('Error getting workouts:', error);
        return [];
    }
};

/**
 * Clear all workouts (utility function)
 */
export const clearWorkouts = async () => {
    try {
        await AsyncStorage.removeItem(WORKOUTS_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing workouts:', error);
        return false;
    }
};
