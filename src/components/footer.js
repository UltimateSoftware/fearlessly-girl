import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * Usage
 * The <ScrollView> component must be used so that the footer can work properly:
 * import Footer from './src/components/footer.js';
 * <View style={{flex: 1}}>
      <ScrollView>
        ...Main page info goes here...
      </ScrollView>
      <Footer
        primaryIconName="bars"
        primaryIconAction={() => {Alert.alert('you clicked on the menu')}}
        gridIconAction={() => {Alert.alert('you clicked on the grid-menu')}}
        bellIconAction={() => {Alert.alert('you clicked on the bell')}} />
    </View>
 */
export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.secondaryIconPadding}>
          <Icon
            size={30}
            name='th'
            onPress={this.props.gridIconAction}
            type='font-awesome'
            color='#DBD9DB' />
        </View>

        <View style={styles.primaryIconPadding}>
          <Icon
            raised
            reverse
            name={this.props.primaryIconName || 'bars'}
            onPress={this.props.primaryIconAction}
            type='font-awesome'
            underlayColor='#403789'
            color='#7E75C4' />
        </View>
        <View style={styles.secondaryIconPadding}>
          <Icon
            size={30}
            name='bell'
            onPress={this.props.bellIconAction}
            type='font-awesome'
            color='#DBD9DB' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    shadowColor: '#DBD9DB',
    shadowOpacity: 1.0,
    borderTopWidth: 2,
    borderTopColor: '#DBD9DB',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  primaryIconPadding: {
    paddingRight: 40,
    paddingLeft: 40
  },
  secondaryIconPadding: {
    paddingRight: 20,
    paddingLeft: 20
  }
});
