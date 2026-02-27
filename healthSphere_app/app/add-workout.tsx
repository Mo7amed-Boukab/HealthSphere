import { Stack } from "expo-router";
import AddWorkoutScreen from "../src/screens/AddWorkoutScreen";

export default function AddWorkout() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <AddWorkoutScreen />
        </>
    );
}
