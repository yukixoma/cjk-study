import React, { useState, useEffect } from "react";

const YandexTranslate = props => {
  const { text } = props;
  const [translated, setTranslated] = useState({
    text: "Machine translate, please wait!",
    translated: ""
  });
  useEffect(() => {
    const key =
      "trnsl.1.1.20191208T034918Z.93f385dbc054686b.b557f8de736f5bce73ebfdf8125964d286718be6";

    if (translated.text !== text) {
      fetch(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=zh-vi`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setTranslated({
            text: text,
            translated: data["text"]
          });
        });
    }
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }} id="hanzi">
        {text}
      </h2>
      {translated.translated}
      <div className="float-right">
        <a
          href="https://tech.yandex.com/translate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Translated by Yandex
        </a>
      </div>
    </div>
  );
};

export default YandexTranslate;
