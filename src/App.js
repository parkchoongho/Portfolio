import React from "react";

function App() {
  return (
    <>
      <div className="profile">
        <img className="idPhoto" src="/img/resumePic1.jpg" alt="이력서 사진" />
        <div className="profile__info">
          <h1 className="profile__name">박충호</h1>
          <div className="profile__email">
            <i className="fab fa-google"></i>
            <a href="pchyo92@gmail.com">pchyo92@gmail.com</a>
          </div>
          <div className="profile__github">
            <i className="fab fa-github"></i>
            <a href="https://github.com/parkchoongho">
              <span>https://github.com/parkchoongho</span>
            </a>
          </div>
          <div className="profile__blog">
            <i className="fab fa-blogger"></i>
            <a href="https://velog.io/@suseodd">https://velog.io/@suseodd</a>
          </div>
          <div className="profile__facebook">
            <i className="fab fa-facebook"></i>
            <a href="https://www.facebook.com/gerrading">
              https://www.facebook.com/gerrading
            </a>
          </div>
          <div className="profile__skills">
            <img
              src="/img/javascript.png"
              alt="Javascript"
              className="javascript"
            />
            <img src="/img/nodejs.png" alt="Node.js" className="node" />
            <img src="/img/mongoDB.png" alt="MongoDB" className="mongodb" />
          </div>
        </div>
      </div>

      <main className="main">
        <div className="left">
          <div className="objective">
            <div className="objective__title">
              <h1>소개</h1>
            </div>
            <div className="objective__paragraph">
              <article>
                안녕하세요. 웹 개발자를 꿈꾸는 박충호라고 합니다. 주로 NodeJS와
                Express를 활용하여 서버를 구성했습니다. REST API 서버를 만들어
                Heroku에 배포한 경험을 가지고 있습니다. DB는 MySQL과 MongoDB를
                주로 사용했고 AWS S3를 활용한 경험이 있습니다. 현재는 Docker,
                GraphQL, Go를 공부하고 있습니다.
              </article>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="projects">
            <div className="projects__title">
              <h1>프로젝트</h1>
            </div>
            <div className="project">
              <div className="project__title">
                <h3>Wetube</h3>
              </div>
              <div className="project__url">
                <a href="https://sleepy-pare-6cd65c.netlify.com/">
                  Project URL
                </a>
              </div>
              <div className="project__paragraph">
                <p>
                  이 프로젝트는 자신이 원하는 동영상을 업로드하고 웹사이트내에서
                  소장하고 관리하며 볼 수 있는 웹사이트입니다. 주요 기능은
                  회원가입, 로그인, 로그아웃, 영상업로드 등입니다. 백엔드는
                  NodeJS, Express로 개발했고 데이터 베이스는 MongoDB를
                  활용했습니다. 백엔드 배포는 Heroku로 업로드된 상태입니다.
                  프런트의 경우 React로 개발했고 Netlify로 배포했습니다.
                </p>
              </div>
              <div className="project__skills">
                <div>
                  <img
                    src="/img/javascript.png"
                    alt="Javascript"
                    className="javascript"
                  />
                </div>
                <img src="/img/nodejs.png" alt="Node.js" className="node" />
                <img src="/img/mongoDB.png" alt="MongoDB" className="mongodb" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
