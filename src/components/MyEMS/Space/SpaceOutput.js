import React, { Fragment, useEffect, useState } from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  Button, 
  ButtonGroup, 
  FormGroup,
  Input,
  Label,
  CustomInput 
} from 'reactstrap';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';
import Datetime from 'react-datetime';
import loadable from '@loadable/component';
import CardSummary from '../../dashboard/CardSummary';
import LineChart from '../common/LineChart';
const ChildSpacesTable = loadable(() => import('./ChildSpacesTable'));


const SpaceOutput = () => {
  // State
  const [baselineStartDatetime, setBaselineStartDatetime] = useState(null);
  const [baselineEndDatetime, setBaselineEndDatetime] = useState(null);
  const [reportingStartDatetime, setReportingStartDatetime] = useState(null);
  const [reportingEndDatetime, setReportingEndDatetime] = useState(null);
  const [periodType, setPeriodType] = useState('hourly');
  
  const periodTypeOptions = [
    { value: 'yearly', label: '年'},
    { value: 'monthly', label: '月'},
    { value: 'daily', label: '日'},
    { value: 'hourly', label: '时'}];

  const labelClasses = 'ls text-uppercase text-600 font-weight-semi-bold mb-0';
  const  childSpacesTableData =[
    {
      id: 1,
      name: '公区',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    },
    {
      id: 2,
      name: '车库',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    },
    {
      id: 3,
      name: '租区',
      electricity: '9872',
      water: '3457',
      naturalgas: '567',
      co2: '567',
    }
  ];
  const childSpacesTableColumns = [{
    dataField: 'name',
    text: '子空间',
    sort: true
  }, {
    dataField: 'electricity',
    text: '冷 (kWh)',
    sort: true
  }, {
    dataField: 'water',
    text: '热 (GJ)',
    sort: true
  }, {
    dataField: 'naturalgas',
    text: '蒸汽 (T)',
    sort: true
  }];

  const lineChartLabels = [
    '2020-07-01',
    '2020-07-02',
    '2020-07-03',
    '2020-07-04',
    '2020-07-05',
    '2020-07-06',
    '2020-07-07',
    '2020-07-08',
    '2020-07-09',
    '2020-07-10',
    '2020-07-11',
    '2020-07-12'
  ];
  
  const lineChartData = {
    a: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    b: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    c: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    d: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
  };

  const lineChartOptions = [
    { value: 'a', label: '冷'},
    { value: 'b', label: '热'},
    { value: 'c', label: '蒸汽'}];
  
  const parameterLineChartLabels = [
    '2020-07-01',
    '2020-07-02',
    '2020-07-03',
    '2020-07-04',
    '2020-07-05',
    '2020-07-06',
    '2020-07-07',
    '2020-07-08',
    '2020-07-09',
    '2020-07-10',
    '2020-07-11',
    '2020-07-12'
  ];
    
  const parameterLineChartData = {
    a: [40, 31, 36, 32, 27, 32, 34, 26, 25, 24, 25, 30],
    b: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    c: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    d: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2],
    e: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
  };
  
  const parameterLineChartOptions = [
    { value: 'a', label: '室外温度'},
    { value: 'b', label: '相对湿度'},
    { value: 'c', label: '电费率'},
    { value: 'd', label: '自来水费率'},
    { value: 'e', label: '天然气费率'}];
  
  useEffect(() => {
    toast(
      <Fragment>
        Welcome to <strong>MyEMS</strong>!<br />
        the Leading Free and Open Source Energy Management System
      </Fragment>
    );
  }, []);
  
  return (
    <Fragment>
      <div>
        <Breadcrumb>
          <BreadcrumbItem>空间数据分析</BreadcrumbItem><BreadcrumbItem active>空间产出分析</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card className="bg-light mb-3">
        <CardBody className="p-3">
          <Row form>
            <Col >
              <FormGroup className="form-group">
                <Label className={labelClasses} for="space">
                空间
                </Label>
                <Input />
              </FormGroup>
            </Col>
            <Col >
              <FormGroup className="form-group">
                <Label className={labelClasses} for="baselineStartDatetime">
                基准期开始(可选)
                </Label>
                <Datetime id='baselineStartDatetime' value={baselineStartDatetime} />
              </FormGroup>
            </Col>
            <Col >
              <FormGroup className="form-group">
                <Label className={labelClasses} for="baselineEndDatetime">
                基准期结束(可选)
                </Label>
                
                <Datetime id='baselineEndDatetime' />
              </FormGroup>
            </Col>
            <Col >
              <FormGroup className="form-group">
                <Label className={labelClasses} for="reportingStartDatetime">
                报告期开始
                </Label>
                <Datetime id='reportingStartDatetime' />
              </FormGroup>
            </Col>
            <Col >
              <FormGroup className="form-group">
                <Label className={labelClasses} for="reportingEndDatetime">
                报告期结束
                </Label>
                <Datetime id='reportingEndDatetime' />
              </FormGroup>
            </Col>
            <Col >
              <FormGroup>
                <Label className={labelClasses} for="periodType">
                时间尺度
                </Label>
                <CustomInput type="select" id="periodType" name="periodType" value={periodType} onChange={({ target }) => setPeriodType(target.value)}
                >
                  { periodTypeOptions.map((periodType, index) => (
                      <option value={periodType.value} key={periodType.value}>
                        {periodType.label}
                      </option>
                    ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col >
              <FormGroup>
                <br></br>
                <ButtonGroup id="submit">
                  <Button color="success" >提交</Button>
                </ButtonGroup>
              </FormGroup>
            </Col>
          </Row> 
        </CardBody>
      </Card>
      <div className="card-deck">
        <CardSummary rate="-0.23%" title="报告期总冷量 (kWh)" color="success" linkText="详情" to="/space/energycategory" >
          <CountUp end={5890863} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
        <CardSummary rate="0.0%" title="报告期总热量 (GJ)" color="info" linkText="详情" to="/space/energycategory">
          <CountUp end={29878} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
        <CardSummary rate="0.0%" title="报告期总蒸汽量 (T)" color="info" linkText="详情" to="/space/energycategory">
        <CountUp end={9887} duration={2} prefix="" separator="," decimal="." />
        </CardSummary>
      </div>
      <LineChart reportingTitle='报告期总冷量 764.39 (kWh)' 
        baselineTitle='基准期总冷量 684.87 (kWh)' 
        labels={lineChartLabels} 
        data={lineChartData}
        options={lineChartOptions}>
      </LineChart>
      <LineChart reportingTitle='相关参数' 
        baselineTitle='' 
        labels={parameterLineChartLabels} 
        data={parameterLineChartData}
        options={parameterLineChartOptions}>
      </LineChart>
      <ChildSpacesTable data={childSpacesTableData} title='子空间报告期数据' columns={childSpacesTableColumns}>
      </ChildSpacesTable>
      
    </Fragment>
  );
};

export default SpaceOutput;