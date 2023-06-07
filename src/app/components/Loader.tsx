// /* eslint-disable react/prop-types */

import React from 'react';
import { ClipLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Displays the result of the check when loading is done
const handleResult = (result: boolean): JSX.Element =>
  result ? (
    <FontAwesomeIcon icon={faCheck} className='check' size='lg' />
  ) : (
    <FontAwesomeIcon icon={faExclamationCircle} className='fail' size='lg' />
  );

// Returns the Loader component
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Loader = ({ loading, result }): JSX.Element =>
  loading ? (
    <ClipLoader color='#123abc' size={30} loading={loading} style={{ display: "inline", margin: "0 auto" }}/>
  ) : (
    handleResult(result)
  );

export default Loader;
