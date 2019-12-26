import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { CardHeader } from "reactstrap";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";
import { Form, FormGroup } from "reactstrap";

const SearchInput = props => {
  const [searchString, setSearchString] = useState("");
  const { database, setDatabase } = props;

  function onSearch(e) {
    e.preventDefault();
    setSearchString("");
    props.history.push(`/cn/dict/${searchString}`);
  }

  return (
    <CardHeader className="bg-dark">
      <Row style={{ marginTop: "1.5vh" }} className="justify-content-center">
        <Col sm="8" lg="10">
          <Form onSubmit={e => onSearch(e)}>
            <FormGroup row>
              <Col md="12">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button type="submit" color="primary">
                      <i className="fa fa-search"></i> Search
                    </Button>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="enter search string..."
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col sm="4" lg="2" className="d-sm-inline-block">
          <ButtonToolbar
            className="float-right"
            aria-label="Toolbar with button groups"
          >
            <ButtonGroup aria-label="dictionary chooser">
              <Button
                outline
                color="primary"
                active={database === "c2v" ? true : false}
                onClick={() => setDatabase("c2v")}
              >
                C2V
              </Button>
              <Button
                outline
                color="primary"
                active={database === "moe" ? true : false}
                onClick={() => setDatabase("moe")}
              >
                C2C
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    </CardHeader>
  );
};

export default SearchInput;
