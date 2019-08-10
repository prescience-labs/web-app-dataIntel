import gql from 'graphql-tag';

export const CREATE_REVIEW_MUTATION = gql`
  mutation createReview($data: createReviewInput) {
    createReview(data: $data) {
      uuid
    }
  }
`;
