import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

const DateTimePickerField = ({ label, value, onConfirm, placeholder }) => {
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (event, selectedDate) => {
        if (event.type === 'dismissed') {
            setShow(false);
            return;
        }

        if (mode === 'date') {
            setMode('time');
            onConfirm(selectedDate);
        } else {
            setShow(false);
            setMode('date');
            onConfirm(selectedDate);
        }
    };

    const showPicker = () => {
        setShow(true);
        setMode('date');
    };

    const formatDate = (date) => {
        if (!date) return placeholder;
        return date.toLocaleString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.inputWrapper} onPress={showPicker} activeOpacity={0.7}>
                <Text style={[styles.value, !value && styles.placeholder]}>
                    {formatDate(value)}
                </Text>
                <Ionicons name="calendar-outline" size={20} color="#3B3C73" />
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value || new Date()}
                    mode={mode}
                    is24Hour={true}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        padding: 12,
        borderWidth: 1,
        borderColor: '#F0F2F7',
    },
    label: {
        fontSize: 13,
        fontWeight: '700',
        color: '#3B3C73',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 40,
    },
    value: {
        fontSize: 16,
        color: '#1A1A1A',
    },
    placeholder: {
        color: '#A0A0A0',
    },
});

export default DateTimePickerField;
