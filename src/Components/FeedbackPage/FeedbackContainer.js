import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import useReactRouter from 'use-react-router';

import { CREATE_REVIEW_MUTATION } from '../../GraphQl/Mutations';
import { A_REVIEWS_REQUEST_QUERY } from '../../GraphQl/Queries';

import FeedbackDisplay from './FeedbackDisplay';

function FeedbackContainer() {
  const { match } = useReactRouter();
  const { productId } = match.params;
  const [createReview, { error }] = useMutation(CREATE_REVIEW_MUTATION);

  const {
    data: { reviewRequest },
    loading,
  } = useQuery(A_REVIEWS_REQUEST_QUERY, {
    variables: { uuid: productId },
  });

  const [ratingValue, setRatingValue] = useState(3);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  function handleSetComment(event) {
    setComment(event.target.value);
  }

  function handleSetRatingValue(rating) {
    setRatingValue(rating);
  }

  function goToShopWeb() {
    window
      .open('https://www.kooding.com/hyalu-serum-veil/p/164156', '_self')
      .close();
  }

  function handleSetSubmitted() {
    if (comment !== '') {
      createReview({
        variables: {
          data: {
            text: comment,
            source: 'App FE',
            rating: parseFloat(ratingValue),
          },
        },
      });
      if (!error) {
        setSubmitted(true);
      }
    } else {
      setOpenSnackBar(true);
    }
  }

  if (loading) return null;

  return (
    <FeedbackDisplay
      productId={productId}
      ratingValue={ratingValue}
      handleSetRatingValue={handleSetRatingValue}
      comment={comment}
      handleSetComment={handleSetComment}
      storeName={'Hyper Blouse'}
      goToShopWeb={goToShopWeb}
      isSubmitted={submitted}
      handleSetSubmitted={handleSetSubmitted}
      openSnackBar={openSnackBar}
      setOpenSnackBar={setOpenSnackBar}
      reviewRequest={reviewRequest}
    />
  );
}

export default FeedbackContainer;
