import { View, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Fontisto } from '@expo/vector-icons';

const Email = () => {
    const [text, onChangeText] = useState('')

    return (
        <>
            <View style={styles.text}>
                <Fontisto name="email" size={24} color="black" />
                <Text style={{marginLeft:8, fontSize:20}}>Email address</Text>
            </View>
            <TextInput
                style={styles.textbox}
                onChangeText={onChangeText}
                value={text}
                placeholder='john@gmail.com'
            />
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 40,
        marginLeft: 4,
        flexDirection: 'row',
    },
    textbox: {
        height: 40,
        width: '100%',
        backgroundColor: '#d2f7f4',
        borderRadius: 8,
        marginBottom: 40,
        marginTop: 10,
        paddingLeft: 8,
    }
})

export default Email;