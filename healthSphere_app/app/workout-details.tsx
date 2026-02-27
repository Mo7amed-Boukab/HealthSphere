import { Stack } from "expo-router";
import WorkoutDetailsScreen from "../src/screens/WorkoutDetailsScreen";

export default function WorkoutDetails() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <WorkoutDetailsScreen />
        </>
    );
}
