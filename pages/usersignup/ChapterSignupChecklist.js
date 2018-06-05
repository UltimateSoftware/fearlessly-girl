import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import TitleText from '../../component/title.text'
import InfoText from '../../component/info.text'
import Footer from '../../component/footer'
import BackgroundImage from '../../component/background.image'

export default class ChapterSignupChecklist extends React.Component {
    static navigationOptions = {
        title: "Complete Chapter Profile"
        }

    render() {
        return (
            <Swiper>
                <View>
                    <BackgroundImage />
                    <TitleText text="Congratulations!"/>
                    <InfoText text="beepboop"/>
                </View>
                <View>
                    <BackgroundImage />
                    <TitleText text="On to step 2!"/>
                    <InfoText text="beepboop"/>
                </View>
                <View>
                    <BackgroundImage />
                    <TitleText text="On to step 3!"/>
                    <InfoText text="beepboop"/>
                </View>
            </Swiper>      
        );
    }
}