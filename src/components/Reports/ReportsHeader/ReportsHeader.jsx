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
  const { active } = props.reportTypes;
  const determinate = props.isFetching ? 'indeterminate' : 'determinate';

  return (
    <Row className="reports-header">
      <Col s={9}>
        <h1>Reports</h1>
      </Col>
      <Col s={3}>
        <Button onClick={() => props.handleClearReports(props.reportOptions)} waves="light">Clear</Button>
        <Modal header="Reports" trigger={<Button className= "right" >REPORTS</Button>}>
          <Row>
            <Col className="valign-wrapper">
              <Input onChange={props.handleReportType} type="select" label="Report type" defaultValue={"errorsLog"}>
                <option value="errorsLog">Errors Log</option>
                <option value="reportType2">Report Type 2</option>
                <option value="reportType3">Report Type 3</option>
              </Input>
              <Input onChange={props.handleReportOptions} type="select" label="Options" defaultValue={[props.reportTypes[active][0]]}  multiple>
                <option value={props.reportTypes[active][0]}>{props.reportTypes[active][0]}</option>
                <option value={props.reportTypes[active][1]}>{props.reportTypes[active][1]}</option>
                <option value={props.reportTypes[active][2]}>{props.reportTypes[active][2]}</option>
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