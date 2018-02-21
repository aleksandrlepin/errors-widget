import React from 'react';
import PropTypes from 'prop-types';
import ReportsItem from './ReportsItem/ReportsItem';
import './ReportsList.css';
import { Row, Col, Collapsible} from 'react-materialize';
import uuid from 'uuid';

const propTypes = {
  reports: PropTypes.shape({
      data: PropTypes.shape({
        errorsHistory: PropTypes.array.isRequired,
        warningsHistory: PropTypes.array.isRequired,
      }),
      reportTypes: PropTypes.object.isRequired,
      reportOptions: PropTypes.array.isRequired,
  }),
  handleReportDelete: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsList = (props) => {

  const errorsHistory = props.reports.data.errorsHistory.map((item, i, arr) => {
    if (props.reports.reportOptions.includes('errors')) {
      return (
        <ReportsItem
        key={uuid.v4()}
        data={props.reports.data}
        i={i}
        historyType="errorsHistory"
        messageType="error"
        deviceId={item.deviceId}
        timestamp={item.timestamp}
        code={item.errorCode}
        message={item.errorMessage}
        values={item.values}
        handleReportDelete={props.handleReportDelete}
        reportOptions={props.reportOptions}
        />
      )
    } else {
      return null;
    }
  });

  const warningsHistory = props.reports.data.warningsHistory.map((item, i, arr) => {
    if (props.reports.reportOptions.includes('warnings')) {
      return (
        <ReportsItem
        key={uuid.v4()}
        data={props.reports.data}
        i={i}
        historyType="warningsHistory"
        messageType="warning"
        deviceId={item.deviceId}
        timestamp={item.timestamp}
        code={item.warningCode}
        message={item.warningMessage}
        values={item.values}
        handleReportDelete={props.handleReportDelete}
        reportOptions={props.reportOptions}
        />
      )
    } else {
      return null;
    }
  });

  return (
    <Row className="reports-item">
      <Col s={12}>
        <Collapsible accordion>
          {errorsHistory}
          {warningsHistory}
        </Collapsible>
      </Col>
    </Row>
  );
}

ReportsList.propTypes = propTypes;


export default ReportsList;