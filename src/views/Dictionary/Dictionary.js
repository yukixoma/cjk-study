import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardBody, CardFooter } from "reactstrap";

import SearchInput from "./components/SearchInput";
import C2VDictionary from "./components/C2VDictionary";

const Dictionary = props => {
  const [database, setDatabase] = useState("c2v");
  const { searchString } = props.match.params;
  const UsingDictionary = () => {
    if (searchString) {
      switch (database) {
        case "c2v":
          return <C2VDictionary searchString={searchString} />;

        default:
          return <C2VDictionary searchString={searchString} />;
      }
    } else return;
  };

  return (
    <div className="animated fadeIn">
      <Row className="justify-content-center">
        <Col sx="12" sm="12" lg="8">
          <Card outline color="secondary">
            <SearchInput
              {...props}
              database={database}
              setDatabase={setDatabase}
            />
            <CardBody className="text-dark bg-secondary scrollbar-info">
              <Row className="justify-content-center">
                <Col sx="11" sm="11" lg="10">
                  {UsingDictionary()}
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="bg-dark" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dictionary;
