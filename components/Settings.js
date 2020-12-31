import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { gray, white, red, textGray, green } from '../utils/colors';
import { settingWarningContent} from '../utils/constant'
import TouchButton from './TouchButton';
import { resetDecks } from '../utils/api.js';
import { connect } from 'react-redux';
import { resetStore } from '../common/index';
import * as Icon from '@expo/vector-icons';

export class Settings extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetStore: PropTypes.func.isRequired
  };
  handleResetData = () => {
    const { resetStore, navigation } = this.props;

    resetStore();
    resetDecks();
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <View style={styles.block}>
          <View style={styles.blockContainer}>
            <Text style={styles.blockText}>
              {settingWarningContent}
            </Text>
            <View style={{ height: 20 }} />
            <TouchButton
              btnStyle={{ backgroundColor: red, borderColor: white }}
              onPress={this.handleResetData}
            >
              <Icon.FontAwesome name="warning" size={20} color={white} />
              Reset App Data
            </TouchButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: green
  },
  block: {
    marginBottom: 20
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  blockText: {
    fontSize: 18,
    color: textGray
  }
});

export default connect(
  null,
  { resetStore }
)(Settings);
