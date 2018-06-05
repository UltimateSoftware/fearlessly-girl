import React from 'react';
import { Button, View, Image, Alert } from 'react-native';
import styles from '../component/styles';
import { AuthSession } from 'expo';
import { auth0ClientId, auth0Domain } from '../config.js'

function toQueryString(params) {
    return '?' + Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
}

export default class UserSignup extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = {
      title: "Login"
    };

    _loginWithAuth0 = async () => {
        const redirectUrl = AuthSession.getRedirectUrl();
        console.log(`Redirect URL: ${redirectUrl}`);
        try {
            const result = await AuthSession.startAsync({
                authUrl: `${auth0Domain}/authorize` + toQueryString({
                    client_id: auth0ClientId,
                    response_type: 'token',
                        scope: 'openid name',
                    redirect_uri: redirectUrl,
                }),
            });
            console.log(result);
            if (result.type === 'success') {
                this.handleParams(result.params);
            }
        } catch(error) {
            console.log("Error ", error);
        }
    };

    handleParams = (responseObj) => {
        if (responseObj.error) {
            Alert.alert('Error', responseObj.error_description
                || 'something went wrong while logging in');
            return;
        }

        fetch(`${auth0Domain}/userinfo?access_token=${responseObj.access_token}`)
            .then(response => {
                if (response.status === 200) {
                    response.json().then(parsedResponse => {
                        console.log("UserID", parsedResponse);
                    })
                }
                else {
                    console.log('Something went wrong. ErrorCode: ', response.status);
                }
            })
    };

    async componentWillMount() {
        this._loginWithAuth0();
    }

    render() {
      return (
        <View style={styles.backgroundContainer}>
            <View style={styles.backgroundImageContainer}>
                <Image style={{ flex: 1 }} 
                source={require('../assets/images/fg-splash-bg.jpg')}/>
            </View>
            <View style={styles.container}>
                <Image style={{width: 300, height: 80}} 
                transform={[{scaleX: 0.4}, {scaleY: 0.4}]} 
                source={require('../assets/images/logo-transparent.png')} />
            </View>
        </View>
      );
    }
}