import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import useReactRouter from 'use-react-router';

import { ALL_REVIEWS_QUERY } from '../../GraphQl/Queries';

import FeedbackDisplay from './FeedbackDisplay';

function FeedbackContainer() {
  const { match } = useReactRouter();
  const { id } = match.params;
  const { data } = useQuery(ALL_REVIEWS_QUERY);

  const [ratingValue, setRatingValue] = useState(3);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  }

  console.log('data------- :', data);
  return (
    <FeedbackDisplay
      productId={id}
      ratingValue={ratingValue}
      handleSetRatingValue={handleSetRatingValue}
      comment={comment}
      handleSetComment={handleSetComment}
      storeName={'Hyper Blouse'}
      goToShopWeb={goToShopWeb}
      isSubmitted={submitted}
      handleSetSubmitted={handleSetSubmitted}
    />
  );
}

export default FeedbackContainer;
