/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class camera extends Component {
    takePicture() {
        const options = {};
        this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.log(err));
    }
    
    render() {
        return (
          <View style={styles.container}>
            <Camera
                ref={(cam) => {
                this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </Camera>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40,
    },
});

AppRegistry.registerComponent('camera', () => camera);
