import React, { useState } from 'react';

import FeedbackDisplay from './FeedbackDisplay';
import useReactRouter from 'use-react-router';

function FeedbackContainer() {
  const { match } = useReactRouter();
  const { id } = match.params;

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
    console.log('set-------- :', submitted);
    setSubmitted(true);
  }

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
