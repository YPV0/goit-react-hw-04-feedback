import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './Feedback.styled';

export function Feedback({ options, onIncrement }) {
  return (
    <FeedbackWrapper>
      {options.map(option => (
        <FeedbackButton
          key={option}
          name={option}
          onClick={() => onIncrement(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackWrapper>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onIncrement: PropTypes.func.isRequired,
};
