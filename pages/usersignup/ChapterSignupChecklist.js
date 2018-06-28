import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import TitleText from '../../component/title.text'
import InfoText from '../../component/info.text'
import Footer from '../../component/footer'
import LogoContainer from '../../component/logo.container'

export default class ChapterSignupChecklist extends React.Component {
    static navigationOptions = {
        title: "Complete Chapter Profile"
        }

    render() {
        return (
            <Swiper 
            showsPagination= {false}
            loop= {false}>
                <LogoContainer>
                    <TitleText text="Congratulations!"/>
                    <InfoText text="beepboop"/>
                    <Footer/>
                </LogoContainer>
                <LogoContainer>
                    <TitleText text="On to step 2!"/>
                    <InfoText text="beepboop"/>
                    <Footer/>
                </LogoContainer>
                <LogoContainer>
                    <TitleText text="On to step 3!"/>
                    <InfoText text="beepboop"/>
                    <Footer/>
                </LogoContainer>
            </Swiper>      
        );
    }
}

const styles = StyleSheet.create({
    title: {
        
    }
})