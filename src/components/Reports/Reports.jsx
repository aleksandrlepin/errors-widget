import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReportsHeader from './ReportsHeader/ReportsHeader';
import ReportsBody from './ReportsBody/ReportsBody';
import { connect } from 'react-redux';
import { loadReports, deleteReports, setReportOptions, setReportType, clearReports } from '../../actions/errorsActions';

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
}

class Reports extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { reports, handleReportLoad, handleReportOptions, handleReportType, handleReportDelete, handleClearReports } = this.props;
    const { reportOptions, reportTypes, isFetching } = this.props.reports;
    return (
      <div>
        <ReportsHeader
          handleReportLoad={handleReportLoad}
          handleReportOptions={handleReportOptions}
          handleReportType={handleReportType}
          handleClearReports={handleClearReports}
          reportTypes={reportTypes}
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

  handleReportDelete(index, historyType, data, reportOptions) {
    dispatch(deleteReports(index, historyType, data, reportOptions));
  },

  handleClearReports(reportOptions) {
    dispatch(clearReports(reportOptions));
  },

  handleReportType(evt) {
    const reportType = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportType(reportType));
    dispatch(setReportOptions([]));
  },

  handleReportOptions(evt) {
    const reportOptions = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportOptions(reportOptions));
  },


});

Reports.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Reports);