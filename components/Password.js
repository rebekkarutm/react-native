import { View, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const Email = () => {
    const [text, onChangeText] = useState('')

    return (
        <>
            <View style={styles.text}>
                <AntDesign name="lock" size={24} color="black" />
                <Text style={{marginTop:2, marginLeft:4, fontSize:20}}>Password</Text>
            </View>
            <TextInput
                style={styles.textbox}
                onChangeText={onChangeText}
                value={text}
                placeholder='password1234'
            />
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        flexDirection: 'row',
    },
    textbox: {
        height: 40,
        width: '100%',
        backgroundColor: '#d2f7f4',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 8,
    }
})

export default Email;