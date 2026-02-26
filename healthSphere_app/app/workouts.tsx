import { Stack } from "expo-router";
// @ts-ignore
import WorkoutsScreen from "../src/screens/WorkoutsScreen";

export default function Workouts() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <WorkoutsScreen />
        </>
    );
}
