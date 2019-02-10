import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, Image } from 'react-native';
import TabBar from './TabBar';

const frenchIcon = require('../assets/icon-french.png');

class HomeScreen extends React.Component {
      static navigationOptions = {
            headerTitle: 'French',
            headerRight: (
                  <View style={{ paddingRight: 20 }}>
                        <Icon
                              size={30}
                              name='question-circle'
                              onPress={() => alert('What is this?')}
                              color='#FFF'
                        />
                        </View>
            ),
      };

      render() {
            return (
                  <View style={styles.container} >
                        <Image source={frenchIcon} />
                        <Text style={styles.arrowUpBorder}></Text>
                        <Text style={styles.arrowUp}></Text>
                        <Text style={styles.text} >
                              Congratulations, your learning path is now ready{'\n'}
                              You'll make rapid progress in French, we promise you!{'\n'}
                              Let's start right away with your first cards
                        </Text>
                        <TabBar navigation={this.props.navigation} />
                  </View>
            );
      }
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
      },
      text: {
            margin: 10,
            marginBottom: 60,
            marginTop: 0,
            padding: 30,
            borderWidth: 1,
            lineHeight: 20,
            borderColor: '#EEE',
            textAlign: 'center',
            backgroundColor: '#FFF',
            color: '#555',
      },
      arrowUp: {
            zIndex: 10,
            marginBottom: -5,
            width: 10,
            height: 10,
            borderLeftWidth: 30,
            borderLeftColor: 'transparent',
            borderRightWidth: 30,
            borderRightColor: 'transparent',
            borderBottomWidth: 30,
            borderBottomColor: 'white',
      },
      arrowUpBorder: {
            marginTop: 40,
            marginBottom: -48,
            width: 10,
            height: 10,
            borderLeftWidth: 30,
            borderLeftColor: 'transparent',
            borderRightWidth: 30,
            borderRightColor: 'transparent',
            borderBottomWidth: 30,
            borderBottomColor: '#EEE',
      }
});

HomeScreen.propTypes = {
      navigation: PropTypes.object.isRequired,
};

export default HomeScreen;