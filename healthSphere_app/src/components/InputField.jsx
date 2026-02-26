import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, multiline = false, unit, keyboardType = 'default' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputWrapper, multiline && styles.multilineWrapper]}>
                <TextInput
                    style={[styles.input, multiline && styles.multilineInput]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#A0A0A0"
                    multiline={multiline}
                    keyboardType={keyboardType}
                    textAlignVertical={multiline ? 'top' : 'center'}
                />
                {unit && <Text style={styles.unit}>{unit}</Text>}
            </View>
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
        minHeight: 40,
    },
    multilineWrapper: {
        minHeight: 100,
        alignItems: 'flex-start',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1A1A1A',
        padding: 0,
    },
    multilineInput: {
        height: '100%',
        paddingTop: 0,
    },
    unit: {
        fontSize: 14,
        color: '#A0A0A0',
        marginLeft: 8,
    },
});

export default InputField;
