import React from 'react';
import PropTypes from 'prop-types';
import './ReportsItem.css';
import { CollapsibleItem, Button } from 'react-materialize';
import uuid from 'uuid';

const propTypes = {
  data: PropTypes.shape({
    errorsHistory: PropTypes.array.isRequired,
    warningsHistory: PropTypes.array.isRequired,
  }),
  deviceId: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  handleReportDelete: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsItem = (props) => {

  const { deviceId, timestamp, code, message, values, handleReportDelete, reportOptions, i, historyType, data } = props;

  const valuesItems = values.map((item, i, arr) => {
    return (
      <tbody key={uuid.v4()}>
        <tr>
          <td><i className="material-icons">info_outline</i></td>
          <td>deviceId: {item.deviceId}</td>
          <td>timestamp: {item.timestamp}</td>
          <td>key: {item.key}</td>
          <td>value: {item.value}</td>
        </tr>
      </tbody>
    );
  });

  const errorItems = (
    <div className="errors-list__item" key={uuid.v4()}>
      <span>deviceId: {deviceId}</span>
      <span>timestamp: {timestamp}</span>
      <span>{props.messageType}Code: {code}</span>
      <span>{props.messageType}Message: {message}</span>
      <span>
        <Button
          onClick={() => handleReportDelete(i, historyType, data, reportOptions)}
          floating
          className="red right"
          icon="clear"
        />
      </span>
    </div>
  );

  return (
    <CollapsibleItem header={errorItems}>
      <table className='values-list'>
        {valuesItems}
      </table>
    </CollapsibleItem>
  );
}

ReportsItem.propTypes = propTypes;


export default ReportsItem;