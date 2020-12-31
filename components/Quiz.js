import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';
import Quiz_Android from './Quiz_Android';
import Quiz_iOS from './Quiz_iOS';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

export class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', '');
    return {
      title: `${title} Quiz`
    };
  };
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');


    return Constants.platform.android ? <Quiz_Android title={title} /> : <Quiz_iOS title={title} />
  }
}

export default Quiz;
