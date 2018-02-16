import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ProgressBar, Collapsible, CollectionItem, CollapsibleItem, Button} from 'react-materialize';
import uuid from 'uuid';

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

const ReportsItem = (props) => {
  const { handleReportDelete, reportOptions } = props;
  const determinate = props.reports.isFetching ? 'indeterminate' : 'determinate';

  const errors = props.reports.errors.map((itemA, i, arrA) => {
    const errorItems = (
      <div className="errors-list__item" key={uuid.v4()}>
        <span>
          <Button
            onClick={() => handleReportDelete(i, arrA, props.reports, 'errors', reportOptions)}
            floating
            className="red"
            icon="clear"
          />
        </span>
        <span>deviceId: {itemA.deviceId}</span>
        <span>timestamp: {itemA.timestamp}</span>
        <span>errorCode: {itemA.errorCode}</span>
        <span>errorMessage: {itemA.errorMessage}</span>
      </div>
    );

    const errorValues = itemA.values.map((itemB, j, arrB) => {
      return (
        <tr key={uuid.v4()}>
          <td><i className="material-icons">info_outline</i></td>
          <td>deviceId: {itemB.deviceId}</td>
          <td>timestamp: {itemB.timestamp}</td>
          <td>key: {itemB.key}</td>
          <td>value: {itemB.value}</td>
        </tr>
      );
    });

    const result = (
      <CollapsibleItem header={errorItems} key={uuid.v4()}>
        <table className='values-list'>
          {errorValues}
        </table>
      </CollapsibleItem>
    );

    return result;
  });


  const warnings = props.reports.warnings.map((itemA, i, arrA) => {

    const warningItems = (
      <div className="errors-list__item" key={uuid.v4()}>
        <span>
          <Button
            onClick={() => handleReportDelete(i, arrA, props.reports, 'warnings', reportOptions)}
            floating
            className="red"
            icon="clear"
          />
        </span>
        <span>deviceId: {itemA.deviceId}</span>
        <span>timestamp: {itemA.timestamp}</span>
        <span>warningCode: {itemA.warningCode}</span>
        <span>warningMessage: {itemA.warningMessage}</span>
      </div>
    );

    const warningValues = itemA.values.map((itemB, j, arrB) => {
      return (
        <tr key={uuid.v4()}>
          <td><i className="material-icons">info_outline</i></td>
          <td>deviceId: {itemB.deviceId}</td>
          <td>timestamp: {itemB.timestamp}</td>
          <td>key: {itemB.key}</td>
          <td>value: {itemB.value}</td>
        </tr>
      );
    });

    const result = (
      <CollapsibleItem header={warningItems} key={uuid.v4()}>
        <table className='values-list'>
         {warningValues}
        </table>
      </CollapsibleItem>
    );

    return result;
  });

  return (
    <Row>
      <Col s={12}>
        <ProgressBar className={determinate} />
        <Collapsible accordion>
          {errors}
          {warnings}
        </Collapsible>
      </Col>
    </Row>
  );
}

ReportsItem.propTypes = propTypes;


export default ReportsItem;