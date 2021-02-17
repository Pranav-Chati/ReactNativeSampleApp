import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={{padding: 50}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput placeholder={"Course Goal"} style={{width: '80%', borderBottomColor: 'black', borderWidth: 0.5, padding: 10}}/>
                <Button title={"Add"}/>
            </View>
            <View>
                <Button title={"Add"}/>
                <TextInput> Hello World</TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
