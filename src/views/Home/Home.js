import React from "react";
import { Row, Col, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import { Line } from "react-chartjs-2";
import * as CardData from "./components/CardData";

const Home = () => {
  return (
    <div className="animated fadeIn">
      <Row className="justify-content-center">
        <Col xs="12" sm="4" lg="3">
          <Card className="text-white bg-primary">
            <CardBody className="pb-0">
              <div className="text-value">4</div>
              <div>Dictionary</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: "70px" }}>
              <Line
                data={CardData.dictCardChartData}
                options={CardData.cardChartDataOpts}
                height={70}
              />
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <Card className="text-white bg-warning">
            <CardBody className="pb-0">
              <div className="text-value">3</div>
              <div>Online Resource</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: "70px" }}>
              <Line
                data={CardData.onlineResourceCardChartData}
                options={CardData.cardChartDataOpts}
                height={70}
              />
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="4" lg="3">
          <Card className="text-white bg-danger">
            <CardBody className="pb-0">
              <div className="text-value">10</div>
              <div>Download Resource</div>
            </CardBody>
            <div className="chart-wrapper" style={{ height: "70px" }}>
              <Line
                data={CardData.downloadResourceCardChartData}
                options={CardData.cardChartDataOpts}
                height={70}
              />
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9">
          <Card outline color="secondary">
            <CardHeader className="bg-secondary">
              <h2 style={{ textAlign: "center" }}>Special Thanks</h2>
            </CardHeader>
            <CardBody className="text-primary">
              <Row>
                <Col>
                  <h5>For dictionary database:</h5>
                  <ul>
                    <li>
                      <a
                        action
                        href="https://hvdic.thivien.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Từ điển Hán Nôm
                      </a>
                    </li>
                    <li>
                      <a
                        action
                        href="https://www.thivien.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Thi viện
                      </a>
                    </li>
                    <li>
                      <a
                        action
                        href="https://www.moedict.tw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Moedict
                      </a>
                    </li>

                    <li>
                      <a
                        action
                        href="https://play.google.com/store/apps/details?id=com.beedict.beedict"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Bee Dict
                      </a>
                    </li>
                    <li>
                      <a
                        action
                        href="https://play.google.com/store/apps/details?id=com.ndquangr.hanviet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Han Viet Dictionary
                      </a>
                    </li>
                    <li>
                      <a
                        action
                        href="https://mazii.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                      >
                        Mazii
                      </a>
                    </li>
                    <li>
                      <a action>Tác giả Đào Công Tiến</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h5>For learning material:</h5>
                  <ul>
                    <li>
                      <a
                        action
                        href="http://justlearnchinese.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Just Learn Chinese
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="bg-secondary" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
