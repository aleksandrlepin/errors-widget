import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import ReportsHeader from './ReportsHeader/ReportsHeader';
import ReportsBody from './ReportsBody/ReportsBody';
import { connect } from 'react-redux';
import { loadReports, deleteReports, setReportOptions, setReportType } from '../../actions/errorsActions';

const propTypes = {
  reports: PropTypes.shape({
    errors: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    reportType: PropTypes.string.isRequired,
    reportOptions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }),
  handleReportDelete: PropTypes.func.isRequired,
}

class Reports extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { reports, handleReportLoad, handleReportOptions, handleReportType, handleReportDelete } = this.props;
    const { reportOptions, isFetching } = this.props.reports;
    return (
      <div>
        <ReportsHeader
          handleReportLoad={handleReportLoad}
          handleReportOptions={handleReportOptions}
          handleReportType={handleReportType}
          reportOptions={reportOptions}
          isFetching={isFetching}
        />
        <ReportsBody
          reports={reports}
          handleReportDelete={handleReportDelete}
          reportOptions={reportOptions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.reports
});

const mapDispatchToProps = (dispatch) => ({

  handleReportLoad(reportOptions) {
    dispatch(loadReports(reportOptions));
  },

  handleReportDelete(index, arr, reports, arrName, reportOptions) {
    const result = arr.filter((value, i) => i !== index);
    const newReports = {
      errorsHistory: arrName === 'errors' ? result : reports.errors,
      warningsHistory: arrName === 'warnings' ? result : reports.warnings
    };
    dispatch(deleteReports(newReports, reportOptions));
  },

  handleReportType(evt) {
    const reportType = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportType(reportType));
  },

  handleReportOptions(evt) {
    const reportOptions = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportOptions(reportOptions));
  },


});

Reports.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Reports);