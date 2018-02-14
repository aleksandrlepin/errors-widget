import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReportsHeader from './ReportsHeader/ReportsHeader';
import ReportsBody from './ReportsBody/ReportsBody';
import  { connect } from 'react-redux';
import { loadReports, setReportOptions, setReportType } from '../../actions/errorsActions';

const propTypes = {
  reports: PropTypes.shape({
    errors: PropTypes.array.isRequired,
    warnings: PropTypes.array.isRequired,
    reportType: PropTypes.string.isRequired,
    reportOptions: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }),
}

class Reports extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { reports, handleReportLoad, handleReportOptions, handleReportType } = this.props;
    return (
      <div>
        <ReportsHeader
          handleReportLoad={handleReportLoad}
          handleReportOptions={handleReportOptions}
          handleReportType={handleReportType}
          reportOptions={this.props.reports.reportOptions} />
        <ReportsBody reports={reports} />
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

  handleReportType(evt) {
    const reportType = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportType(reportType));
  },

  handleReportOptions(evt) {
    const reportOptions = [...evt.target.selectedOptions].map(o => o.value);
    dispatch(setReportOptions(reportOptions));
  }
});

Reports.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Reports);