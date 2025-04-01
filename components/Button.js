import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text, style }) {
    return (
        <TouchableOpacity style={[styles.button, style]}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffabcd",
        padding: 10,
        width: 100, 
        height: 50, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        marginHorizontal: 5, 
    },
    textButton: {
        color: "white",
    },
});