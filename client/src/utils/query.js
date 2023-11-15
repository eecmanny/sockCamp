import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
query GetQuestions {
  questions {
    _id
    category
    question
    choices
    correctAnswer
  }
}
`;

