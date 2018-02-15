import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, ProgressBar, Collection, CollectionItem, Button} from 'react-materialize';
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

  const errorItems = props.reports.errors.map((itemA, i, arrA) => {
    const errorItemsB = itemA.values.map((itemB, j, arrB) => {
      return (
        <CollectionItem className="errors-list__item" key={uuid.v4()}>
          <span>deviceId: {itemB.deviceId}</span>
          <span>timestamp: {itemB.timestamp}</span>
          <span>key: {itemB.key}</span>
          <span>value: {itemB.value}</span>
        </CollectionItem>
      );
    });

    const errorItemsA = (
      <CollectionItem className="errors-list__item" key={uuid.v4()}>
        <span>deviceId: {itemA.deviceId}</span>
        <span>timestamp: {itemA.timestamp}</span>
        <span>errorCode: {itemA.errorCode}</span>
        <span>errorMessage: {itemA.errorMessage}</span>
        <Button
          onClick={() => handleReportDelete(i, arrA, props.reports, 'errors', reportOptions)}
          floating
          className="red"
          icon="clear"
        />
      </CollectionItem>
    );

    return Array.prototype.concat(errorItemsA, errorItemsB);
  });

  const warningItems = props.reports.warnings.map((itemA, i, arrA) => {
    const warningItemsB = itemA.values.map((itemB, j, arrB) => {
      return (
        <CollectionItem className="errors-list__item" key={uuid.v4()}>
          <span>deviceId: {itemB.deviceId}</span>
          <span>timestamp: {itemB.timestamp}</span>
          <span>key: {itemB.key}</span>
          <span>value: {itemB.value}</span>
        </CollectionItem>
      );
    });

    const warningItemsA = (
      <CollectionItem className="errors-list__item" key={uuid.v4()}>
        <span>deviceId: {itemA.deviceId}</span>
        <span>timestamp: {itemA.timestamp}</span>
        <span>warningCode: {itemA.warningCode}</span>
        <span>warningMessage: {itemA.warningMessage}</span>
        <Button
          onClick={() => handleReportDelete(i, arrA, props.reports, 'warnings', reportOptions)}
          floating
          className="red"
          icon="clear"
        />
      </CollectionItem>
    );

    return Array.prototype.concat(warningItemsA, warningItemsB);
  });

  return (
    <Row>
      <Col s={12}>
        <ProgressBar className={determinate} />
        <Collection className="errors-list">
          {errorItems}
          {warningItems}
        </Collection>
      </Col>
    </Row>
  );
}

ReportsItem.propTypes = propTypes;


export default ReportsItem;