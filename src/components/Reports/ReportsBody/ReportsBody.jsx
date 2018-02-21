import React from 'react';
import PropTypes from 'prop-types';
import ReportsList from './ReportsList/ReportsList';

const propTypes = {
  reports: PropTypes.shape({
    data: PropTypes.shape({
      errorsHistory: PropTypes.array.isRequired,
      warningsHistory: PropTypes.array.isRequired,
    }),
    reportTypes: PropTypes.object.isRequired,
    reportOptions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }),
  handleReportDelete: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsBody = (props) => {
  return (
    <ReportsList
      reports={props.reports}
      handleReportDelete={props.handleReportDelete}
      reportOptions={props.reportOptions}
    />
  );
}

ReportsBody.propTypes = propTypes;

export default ReportsBody;