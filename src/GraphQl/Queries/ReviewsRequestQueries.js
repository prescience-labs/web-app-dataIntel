import gql from 'graphql-tag';

export const ReviewRequest = {
  fragments: {
    reviewRequest: gql`
      fragment ReviewRequestProps on ReviewRequest {
        uuid
        targetEmail
        targetPhone
        productName
        productName
        productDescription
        productImage
        sellerName
      }
    `,
  },
};

export const A_REVIEWS_REQUEST_QUERY = gql`
  query requestReview($uuid: ID!) {
    reviewRequest(uuid: $uuid) {
      ...ReviewRequestProps
    }
  }
  ${ReviewRequest.fragments.reviewRequest}
`;
