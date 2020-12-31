export const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  NodeJS: {
    title: 'NodeJS',
    questions: [
      {
        question: 'What do you mean by the term I/O ?',
        answer:
          'I/O is the shorthand for input and output, and it will access anything outside of your application. It will be loaded into the machine memory to run the program, once the application is started. '
      }
    ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'A predictable state container for JavaScript Apps'
      },
      {
        question: 'What is an action creator?',
        answer:
          'It is a function that takes an input and returns an object with a type and data property.'
      },
      {
        question: 'What is a reducer?',
        answer:
          'A reducer is a pure function that takes the current state and action and returns the next state.'
      }
    ]
  }
};
