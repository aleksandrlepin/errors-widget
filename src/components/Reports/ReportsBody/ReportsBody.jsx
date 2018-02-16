import React from 'react';
import PropTypes from 'prop-types';
import ReportsItem from './ReportsItem/ReportsItem';

const propTypes = {
  reports: PropTypes.shape({
    errors: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    reportType: PropTypes.string.isRequired,
    reportOptions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }),
  handleReportDelete: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsBody = (props) => {
  return (
    <ReportsItem
      reports={props.reports}
      handleReportDelete={props.handleReportDelete}
      reportOptions={props.reportOptions}
    />
  );
}

ReportsBody.propTypes = propTypes;

export default ReportsBody;