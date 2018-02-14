import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon, Input, Row, Col } from 'react-materialize';
import './ReportsHeader.css';
import { prototype } from 'events';

const propTypes = {
  handleReportLoad: PropTypes.func.isRequired,
  handleReportOptions: PropTypes.func.isRequired,
  handleReportType: PropTypes.func.isRequired,
  reportOptions: PropTypes.array.isRequired,
}

const ReportsHeader = (props) => {

  return (
    <Row className="reports-header">
      <Col s={10}>
        <h1>Reports</h1>
      </Col>
      <Col s={2}>
        <Modal header="Reports" trigger={<Button>REPORTS</Button>}>
          <Row>
            <Col className="valign-wrapper">
              <Input onChange={props.handleReportType} type='select' label="Report type" defaultValue="1">
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
    </Row>
  );
}

ReportsHeader.propTypes = propTypes;

export default ReportsHeader;