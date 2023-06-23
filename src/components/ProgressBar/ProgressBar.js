import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressProvider from './ProgressProvider';

function ProgressBar(props) {
  // eslint-disable-next-line react/prop-types
  const { value } = props;
  return (
    <ProgressProvider valueStart={0} valueEnd={value}>
      {(value) => <CircularProgressbar value={value} />}
    </ProgressProvider>
  );
}

export default ProgressBar;
