import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import TouchButton from './TouchButton';
import { gray, green } from '../utils/colors';
import { connect } from 'react-redux';
import { addCardToDeck } from '../common/index';
import { addCardToDeckAS } from '../utils/api';

export class AddNewCard extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    addCardToDeck: PropTypes.func.isRequired
  };
  state = {
    question: '',
    answer: ''
  };
  handleAddQuestion = question => {
    this.setState({ question });
  };
  handleAddAnswer = answer => {
    this.setState({ answer });
  };
  handleAddNewCards = () => {
    const { addCardToDeck, title, navigation } = this.props;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };

    addCardToDeck(title, card);
    addCardToDeckAS(title, card);

    this.setState({ question: '', answer: '' });
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <Text style={styles.title}>Add a question to this Deck</Text>
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={this.state.question}
              onChangeText={this.handleAddQuestion}
              placeholder="Question"
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => this.answerTextInput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={[styles.block]}>
            <TextInput
              style={styles.input}
              value={this.state.answer}
              onChangeText={this.handleAddAnswer}
              placeholder="Answer"
              ref={input => {
                this.answerTextInput = input;
              }}
              returnKeyType="done"
              onSubmitEditing={this.handleAddNewCards}
            />
          </View>
          <TouchButton
            btnStyle={{ backgroundColor: green, borderColor: '#fff' }}
            onPress={this.handleAddNewCards}
            disabled={this.state.question === '' || this.state.answer === ''}
          >
            Add
          </TouchButton>
        </View>
        <View style={{ height: '30%' }} />
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
    backgroundColor: gray,
    justifyContent: 'space-around'
  },
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40
  }
});

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title', 'undefined');

  return {
    title
  };
};

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(AddNewCard);
