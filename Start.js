import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';


export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        console.log("stylesheets loaded")
        let stylesheets = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#0b3972',
                alignItems: 'center',
                justifyContent: 'center',
            },
            text: {
                marginTop: 16,
                paddingVertical: 8,
                borderWidth: 4,
                borderColor: "#20232a",
                borderRadius: 6,
                backgroundColor: "#61dafb",
                color: "#20232a",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold"
            }
        });

        return (
            <View styles={stylesheets.container}>
                <Text>Hello World</Text>
                <Text>The current count is: {this.state.count}</Text>
                <Button title="Click Me"
                        onPress={() => this.setState({
                            count: this.state.count + 1
                        })}/>
                <StatusBar style="auto"/>
            </View>
        );
    };
}

