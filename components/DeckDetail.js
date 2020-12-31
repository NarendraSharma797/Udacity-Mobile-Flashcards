import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { gray, textGray, green, white, red } from '../utils/colors';
import { connect } from 'react-redux';
import { removeDeckById } from '../common/index';
import { removeDeckFromAsyncStorage } from '../utils/api';
import { NavigationActions } from 'react-navigation';
import * as Icon from '@expo/vector-icons';

export class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    removeDeckById: PropTypes.func.isRequired,
    deck: PropTypes.object
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.deck !== undefined;
  }
  DeleteDeckById = id => {
    const { removeDeckById, navigation } = this.props;
    removeDeckById(id);
    removeDeckFromAsyncStorage(id);
    //go to previous screen
    navigation.goBack();
  };
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Deck id={deck.title} />
        <View>
          <TouchButton
            btnStyle={{ backgroundColor: white, borderColor: textGray }}
            txtStyle={{ color: textGray }}
            onPress={() =>
              this.props.navigation.navigate('AddCard', { title: deck.title })
            }
          >
            <Icon.FontAwesome name="plus-square" size={20} color={green} />
             Add Card
          </TouchButton>
          <TouchButton
            btnStyle={{ backgroundColor: green, borderColor: white }}
            txtStyle={{ color: white }}
            onPress={() =>
              this.props.navigation.navigate('Quiz', { title: deck.title })
            }
          >
            <Icon.FontAwesome name="hourglass-start" size={20} color={white} />
            Start Quiz
          </TouchButton>
        </View>
        <TouchButton
        btnStyle={{ backgroundColor: white, borderColor: white }}
          txtStyle={{ color: red }}
          onPress={() => this.DeleteDeckById(deck.title)}
        >
          <Icon.FontAwesome name="trash-o" size={30} color={red} />
          Delete Deck
        </TouchButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray
  }
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');
  const deck = state[title];

  return {
    deck
  };
};

export default connect(
  mapStateToProps,
  { removeDeckById }
)(DeckDetail);
