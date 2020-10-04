import React from "react";

import mainImage from "../images/main.jpg";

const Contents = () => {
  return (
    <section className="main ui container">
      <div
        className="ui two column grid"
        style={{
          position: "relative",
          zIndex: "-2",
          marginBottom: "20px",
        }}
      >
        <div className="column">
          <img src={mainImage} alt="nature" height="auto" width="100%"></img>
        </div>
        <div className="column center aligned middle aligned ">
          <article>
            <h4>Our Story</h4>
            <h2
              style={{
                color: "#2699FB",
              }}
            >
              Big Project
            </h2>
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
      <div className="ui two column grid">
        <div className="column middle aligned">
          <h2
            style={{
              color: "#2699FB",
            }}
          >
            How it works ?
          </h2>
          <br></br>
          <p>
            Culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptartem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi ropeior architecto beatae vitae dicta
            sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eosep quiklop ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, quepi dolorem ipsum quia dolor srit amet, consectetur
            adipisci velit, seid quia non numquam eiuris modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat iope voluptatem. Lorem
            ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
            tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad
            minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.Lorem ipsum
            dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
            tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad
            minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.Lorem ipsum
            dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
            tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad
            minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.
          </p>
        </div>

        <div className="column middle aligned">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do
            eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut
            enim ad minim veeniam, quis nostruklad exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.Lorem ipsum
            dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
            tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad
            minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.
          </p>
          <div className="ui divider"></div>
          <p>
            “Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem.”Lorem ipsum dolor sit
            amet, consectetur adipisifwcing elit, sed do eiusmod tempor
            incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim
            veeniam, quis nostruklad exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat
            nulla parieratur. Excepteur sint occaecat cupidatat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contents;
