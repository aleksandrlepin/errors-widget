import React from 'react';
import PropTypes from 'prop-types';
import ReportsItem from './ReportsItem/ReportsItem';
import './ReportsList.css';
import { Row, Col, Collapsible} from 'react-materialize';
import uuid from 'uuid';

const propTypes = {
  reports: PropTypes.shape({
      errors: PropTypes.array.isRequired,
      warnings: PropTypes.array.isRequired,
      reportType: PropTypes.string.isRequired,
      reportOptions: PropTypes.array.isRequired,
  }),
  handleReportDelete: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsList = (props) => {

  const errors = props.reports.errors.map((item, i, arr) => {
    return (
      <ReportsItem
        key={uuid.v4()}
        i={i}
        arr={arr}
        reports={props.reports}
        type="error"
        deviceId={item.deviceId}
        timestamp={item.timestamp}
        code={item.errorCode}
        message={item.errorMessage}
        values={item.values}
        handleReportDelete={props.handleReportDelete}
        reportOptions={props.reportOptions}
      />
    )
  });

  const warnings = props.reports.warnings.map((item, i, arr) => {
    return (
      <ReportsItem
        key={uuid.v4()}
        i={i}
        arr={arr}
        reports={props.reports}
        type="warning"
        deviceId={item.deviceId}
        timestamp={item.timestamp}
        code={item.warningCode}
        message={item.warningMessage}
        values={item.values}
        handleReportDelete={props.handleReportDelete}
        reportOptions={props.reportOptions}
      />
    )
  });

  return (
    <Row className="reports-item">
      <Col s={12}>
        <Collapsible accordion>
          {errors}
          {warnings}
        </Collapsible>
      </Col>
    </Row>
  );
}

ReportsList.propTypes = propTypes;


export default ReportsList;