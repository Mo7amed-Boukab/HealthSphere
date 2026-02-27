import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getAllWorkouts, saveWorkout, deleteWorkout as deleteWorkoutFromStorage } from '../storage/workoutStorage';

// Create the context
const WorkoutContext = createContext(null);

// Custom hook to consume the context
export const useWorkouts = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error('useWorkouts must be used inside a WorkoutProvider');
    }
    return context;
};

// Provider component
export const WorkoutProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load all workouts from storage
    const refreshWorkouts = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await getAllWorkouts();
            setWorkouts(data);
        } catch (error) {
            console.error('WorkoutContext: Error loading workouts', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Add a new workout
    const addWorkout = useCallback(async (workout) => {
        try {
            await saveWorkout(workout);
            await refreshWorkouts(); // Refresh the list after adding
            return true;
        } catch (error) {
            console.error('WorkoutContext: Error adding workout', error);
            throw error;
        }
    }, [refreshWorkouts]);

    // Delete a workout by ID
    const deleteWorkout = useCallback(async (id) => {
        try {
            await deleteWorkoutFromStorage(id);
            // Optimistic update: remove from state immediately
            setWorkouts(prev => prev.filter(w => w.id !== id));
            return true;
        } catch (error) {
            console.error('WorkoutContext: Error deleting workout', error);
            throw error;
        }
    }, []);

    // Computed stats
    const totalWorkouts = workouts.length;
    const totalMinutes = workouts.reduce((acc, w) => acc + (parseInt(w.duration) || 0), 0);

    // Load on mount
    useEffect(() => {
        refreshWorkouts();
    }, [refreshWorkouts]);

    const value = {
        workouts,
        isLoading,
        totalWorkouts,
        totalMinutes,
        addWorkout,
        deleteWorkout,
        refreshWorkouts,
    };

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    );
};
