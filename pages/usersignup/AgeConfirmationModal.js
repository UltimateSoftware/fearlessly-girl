import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default class AgeConfirmationModal extends React.Component {
    state = {
        modalVisible = false
    }

    render() {
        return (
            <View>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                OnRequestClose={() => { alert('Oops! You must tell us your age.'); }}
                OnDismiss={() => { alert('Oops! You must tell us your age.')} } />
            </View>
        );
    }
}