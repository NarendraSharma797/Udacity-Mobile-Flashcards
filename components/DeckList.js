import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { gray, green, lightBlue } from '../utils/colors';
import { appTitle} from '../utils/constant'
import { handleInitialData } from '../common/index';

export class DeckList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    handleInitialData: PropTypes.func.isRequired,
    decks: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { decks, navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{appTitle}</Text>
        {Object.values(decks).map(deckItem => {
          return (
            <TouchableOpacity
              key={deckItem.title}
              onPress={() =>
                navigation.navigate('DeckDetail', { title: deckItem.title })
              }
            >
              <Deck id={deckItem.title} />
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 25 }} />
      </ScrollView>
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
    color: lightBlue
  }
});

const mapStateToProps = state => ({ decks: state });

export default connect(
  mapStateToProps,
  { handleInitialData }
)(DeckList);
