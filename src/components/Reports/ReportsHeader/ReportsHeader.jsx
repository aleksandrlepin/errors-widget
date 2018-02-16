import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Input, Row, Col, ProgressBar } from 'react-materialize';
import './ReportsHeader.css';

const propTypes = {
  handleReportLoad: PropTypes.func.isRequired,
  handleReportOptions: PropTypes.func.isRequired,
  handleReportType: PropTypes.func.isRequired,
  handleClearReports: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsHeader = (props) => {
  const determinate = props.isFetching ? 'indeterminate' : 'determinate';

  return (
    <Row className="reports-header">
      <Col s={9}>
        <h1>Reports</h1>
      </Col>
      {/* <Col s={2}>
      </Col> */}
      <Col s={3}>
        <Button onClick={() => props.handleClearReports(props.reportOptions)} waves="light">Clear</Button>
        <Modal header="Reports" trigger={<Button className= "right" >REPORTS</Button>}>
          <Row>
            <Col className="valign-wrapper">
              <Input onChange={props.handleReportType} type="select" label="Report type" defaultValue="1">
                <option value="errorsLog">Errors Log</option>
                <option value="reportsType2">Reports Type 2</option>
                <option value="reportsType3">Reports Type 3</option>
              </Input>
              <Input onChange={props.handleReportOptions} type="select" label="Options" defaultValue={[1]} multiple>
                <option value="errors">Errors</option>
                <option value="warnings">Warnings</option>
                <option value="reportsOption3">Reports Option 3</option>
              </Input>
              <Button waves="light" modal="close" onClick={() => props.handleReportLoad(props.reportOptions)}>Save</Button>
            </Col>
          </Row>
        </Modal>
      </Col>
      <div className="header-preloader" >
        <ProgressBar className={determinate} />
      </div>
    </Row>
  );
}

ReportsHeader.propTypes = propTypes;

export default ReportsHeader;