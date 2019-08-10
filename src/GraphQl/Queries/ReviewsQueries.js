import gql from 'graphql-tag';

export const Review = {
  fragments: {
    review: gql`
      fragment ReviewProps on Review {
        uuid
        text
        source
        rating
      }
    `,
  },
};

export const ALL_REVIEWS_QUERY = gql`
  query allReviews {
    reviews {
      ...ReviewProps
    }
  }
  ${Review.fragments.review}
`;
