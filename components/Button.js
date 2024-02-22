import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Button({label}) {
    return (
        <>
            <Pressable style={styles.button} onPress={() => alert('Logging in!')}>
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#03a89b',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 80
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
})