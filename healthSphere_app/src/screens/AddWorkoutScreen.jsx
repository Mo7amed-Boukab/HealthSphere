import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import CategorieOptionButton from '../components/CategorieOptionButton';
import InputField from '../components/InputField';
import DateTimePickerField from '../components/DateTimePickerField';
import { useWorkouts } from '../context/WorkoutContext';

const AddWorkoutScreen = () => {
    const navigation = useNavigation();
    const { addWorkout } = useWorkouts();
    const [selectedCategory, setSelectedCategory] = useState('Run');
    const [duration, setDuration] = useState('');
    const [intensity, setIntensity] = useState('Medium');
    const [dateTime, setDateTime] = useState(new Date());
    const [notes, setNotes] = useState('');

    const handleSave = async () => {
        if (!duration) {
            Alert.alert('Error', 'Please enter the duration of your workout.');
            return;
        }

        const workout = {
            type: selectedCategory,
            duration: parseInt(duration),
            intensity: intensity,
            date: dateTime.toISOString(),
            notes: notes,
        };

        try {
            await addWorkout(workout);
            Alert.alert('Success', 'Workout saved successfully!', [
                {
                    text: 'OK',
                    onPress: () => {
                        // Clear form
                        setDuration('');
                        setNotes('');
                        // Navigate back
                        navigation.goBack();
                    }
                }
            ]);
        } catch (error) {
            Alert.alert('Error', 'Failed to save workout. Please try again.');
            console.error(error);
        }
    };

    const categories = [
        { id: '1', title: 'Run', icon: 'walking' },
        { id: '2', title: 'Cycle', icon: 'bicycle' },
        { id: '3', title: 'Gym', icon: 'dumbbell' },
        { id: '4', title: 'Swim', icon: 'swimmer' },
    ];

    const intensities = ['Low', 'Medium', 'High'];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#3B3C73" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Log New Workout</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Select Activity Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Select Activity</Text>
                        <TouchableOpacity>
                            <Text style={styles.allLink}>All Categories</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                        {categories.map((cat) => (
                            <CategorieOptionButton
                                key={cat.id}
                                title={cat.title}
                                icon={cat.icon}
                                isActive={selectedCategory === cat.title}
                                onPress={() => setSelectedCategory(cat.title)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Duration Input */}
                <InputField
                    label="Duration"
                    value={duration}
                    onChangeText={setDuration}
                    placeholder="0"
                    unit="min"
                    keyboardType="numeric"
                />

                {/* Intensity Selector */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.fieldLabel}>Intensity</Text>
                    <View style={styles.intensityContainer}>
                        {intensities.map((level) => (
                            <TouchableOpacity
                                key={level}
                                style={[
                                    styles.intensityButton,
                                    intensity === level && styles.activeIntensityButton
                                ]}
                                onPress={() => setIntensity(level)}
                            >
                                <Text style={[
                                    styles.intensityText,
                                    intensity === level && styles.activeIntensityText
                                ]}>
                                    {level}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Date & Time */}
                <DateTimePickerField
                    label="Date & Time"
                    value={dateTime}
                    onConfirm={setDateTime}
                    placeholder="Select Date & Time"
                />

                {/* Notes */}
                <InputField
                    label="Notes (Optional)"
                    value={notes}
                    onChangeText={setNotes}
                    placeholder="How did it feel?"
                    multiline={true}
                />

                <View style={{ height: 20 }} />
            </ScrollView>

            {/* Footer Buttons */}
            <View style={styles.footer}>
                <PrimaryButton
                    title="Save Workout"
                    iconName="checkmark-circle-outline"
                    onPress={handleSave}
                />
                <SecondaryButton
                    title="Cancel"
                    onPress={() => navigation.goBack()}
                />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    backButton: {
        padding: 8,
    },
    content: {
        padding: 20,
    },
    section: {
        marginBottom: 25,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
    },
    allLink: {
        fontSize: 14,
        color: '#8089B2',
    },
    categoriesScroll: {
        paddingBottom: 5,
    },
    sectionContainer: {
        marginBottom: 25,
    },
    fieldLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#3B3C73',
        marginBottom: 15,
    },
    intensityContainer: {
        flexDirection: 'row',
        backgroundColor: '#E6E9F0',
        borderRadius: 25,
        padding: 4,
    },
    intensityButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 21,
    },
    activeIntensityButton: {
        backgroundColor: '#FFFFFF',
        // Shadow for active segment
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    intensityText: {
        fontSize: 14,
        color: '#8089B2',
        fontWeight: '600',
    },
    activeIntensityText: {
        color: '#1A1A1A',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        gap: 15,
    },
    statBox: {
        flex: 1,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 10,
        color: '#8089B2',
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    footer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#F8F9FB',
    },
});

export default AddWorkoutScreen;
