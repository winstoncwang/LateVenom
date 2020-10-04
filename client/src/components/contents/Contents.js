import React from "react";

import mainImage from "../images/main.jpg";

const Contents = () => {
  return (
    <section className="main ui container">
      <div
        className="ui two column grid"
        style={{ position: "relative", zIndex: "-2" }}
      >
        <div className="column">
          <img src={mainImage} alt="nature" height="auto" width="100%"></img>
        </div>
        <div className="column center aligned middle aligned ">
          <article>
            <h4>Our Story</h4>
            <h2>Big Project</h2>
            <h4>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quiepakis nostrud exercitation ullamco
              laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cfgillum dolore
              eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt inpeku culpa qui officia deserunt mollit anim id
              est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium poeyi doloremque laudantium, totam rem
              aperiam, eaque ipsa quae apsb illo inventore veritatis et quasi
              architecto beiatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, seprid quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliqueam
              quaerat voluptatem.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contents;
