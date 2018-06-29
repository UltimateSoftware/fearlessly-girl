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
                    <View>
                        <TitleText text="Congratulations {{TODO: Get current logged in user}}!"/>
                        <InfoText text="You just took the first big step of starting your very own Fearlessly Girl Chapter. Let's help you take the next steps in beginning your Fearlessly Girl Chapter."/>
                        <Text>Swipe left to take the next step</Text>
                    </View>
                    <Footer/>
                </LogoContainer>
                <LogoContainer>
                    <TitleText text="Find An Advisor"/>
                    <InfoText text="This is the description of this step."/>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2610'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Find an advisor</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2610'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Get funding</Text>
                    </View>
                    <Text>Swipe left to take the next step.</Text>
                    <Footer/>
                </LogoContainer>
                <LogoContainer>
                    <TitleText text="Getting Funding"/>
                    <InfoText text="This is the description of this step."/>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2714'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Find an advisor</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2610'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Get funding</Text>
                    </View>
                    <Text>Swipe left to take the next step.</Text>
                    <Footer/>
                </LogoContainer>
                <LogoContainer>
                    <TitleText text="That's it for now!"/>
                    <InfoText text="This is the description of this step."/>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2714'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Find an advisor</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{'\u2714'}</Text>
                        <Text style={{flex: 1, paddingLeft: 5}}>Get funding</Text>
                    </View>
                    <Text>Swipe left to take the next step.</Text>
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