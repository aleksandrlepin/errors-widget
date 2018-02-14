import React from 'react';
import PropTypes from 'prop-types';
import ReportsItem from './ReportsItem/ReportsItem';
import './ReportsBody.css';

const propTypes = {
  reports: PropTypes.shape({
    errors: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    reportType: PropTypes.string.isRequired,
    reportOptions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }),
}

const ReportsBody = (props) => {
  return (
    <ReportsItem reports={props.reports}/>
  );
}

ReportsBody.propTypes = propTypes;

export default ReportsBody;