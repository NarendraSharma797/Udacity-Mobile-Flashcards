import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, YellowBox } from 'react-native';
import { white, textGray, blue } from '../utils/colors';
import { connect } from 'react-redux';

const Deck = props => {
  const { deck } = props;

  if (deck === undefined) {
    return <View style={styles.deckContainer} />;
  }
  return (
    <View style={styles.deckContainer}>
      <View>
        <Text style={styles.deckText}>{deck.title}</Text>
      </View>
      <View>
        <Text style={styles.cardText}>{deck.questions.length} cards</Text>
      </View>
    </View>
  );
};
Deck.propTypes = {
  deck: PropTypes.object
};

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 100,
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#0000FF',
    backgroundColor:'#D9C7C3' ,
    borderRadius: 10,
    marginBottom: 10
  },
  deckText: {
    fontSize: 22
  },
  cardText: {
    fontSize: 20,
    color: textGray
  }
});

const mapStateToProps = (state, { id }) => {
  const deck = state[id];

  return {
    deck
  };
};

export default connect(mapStateToProps)(Deck);
