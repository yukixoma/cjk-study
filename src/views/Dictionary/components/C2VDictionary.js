import React, { useEffect } from "react";
import { Button } from "reactstrap";

import c2vDictionaryDatabase from "../../../database/segmentedC2v";
import YandexTranslate from "./YandexTranslate";

const C2VDictionary = props => {
  const { searchString } = props;
  const result = c2vDictionaryDatabase.find(
    item => item["word"] === searchString
  );

  useEffect(() => {
    let hanzi = document.getElementsByClassName("hanzi");
    for (let i = 0; i < hanzi.length; i++) {
      const e = hanzi[i];
      e.addEventListener("click", onClickHandle);
    }
  });

  function onClickHandle(e) {
    const searchString = e.target.innerHTML;
    props.history.push(`/cn/dict/${searchString}`);
  }

  if (result) {
    const content = result["content"];
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{searchString}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div
          style={{
            position: "fixed",
            zIndex: "1000",
            top: "90vh",
            left: "85vw"
          }}
        >
          <Button
            onClick={() => window.scrollTo(0, 0)}
            block
            size="sm"
            color="info"
            outline
          >
            <i className="cui-chevron-top icons font-1xl" />
          </Button>
        </div>
      </div>
    );
  } else return <YandexTranslate text={searchString} />;
};

export default C2VDictionary;
