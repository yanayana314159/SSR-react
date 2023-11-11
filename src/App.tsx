import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>自己紹介</header>
      <main>
        <h3>名前</h3>
        <a className="imp">柳川 拓輝</a>
        <a className="imp">Hiroki Yanagawa</a>
        <br />
        <h3>各種リンク</h3>
        <a href="https://github.com/yanayana314159">Github</a>
        <a href="https://www.facebook.com/hiroki.yanagawa.18">Facebook</a>
        <h3>経歴</h3>
        <table border={1} className="table">
          <thead>
            <tr className="header">
              <th>西暦</th>
              <td>出来事</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2001/02/14</th>
              <td>誕生</td>
            </tr>
            <tr>
              <th>2016/04/01</th>
              <td>市川学園市川高等学校 入学</td>
            </tr>
            <tr>
              <th>2019/03/31</th>
              <td>市川学園市川高等学校 卒業</td>
            </tr>
            <tr>
              <th>2019/04/01</th>
              <td>慶應義塾大学理工学部 機械工学科 入学</td>
            </tr>
            <tr>
              <th>2023/03/31</th>
              <td>慶應義塾大学理工学部 機械工学科 卒業</td>
            </tr>
            <tr>
              <th>2023/04/01</th>
              <td>慶應義塾大学大学院理工学研究科 総合デザイン工学専攻 入学</td>
            </tr>
            <tr>
              <th>2025/03/31</th>
              <td>
                慶應義塾大学大学院理工学研究科 総合デザイン工学専攻 卒業予定
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>趣味</h3>
        <div className="hobby">
          <div className="hobby-child">
            <a className="imp">音楽</a>
            <br />
            <img
              src="/images/music.jpg"
              alt="Ultra2022 TOKYO"
              width="300px"
            ></img>
          </div>
          <div className="hobby-child">
            <a className="imp">スイーツ</a>
            <br />
            <img
              src="/images/パフェ.jpg"
              alt="パフェの画像です"
              width="300px"
            ></img>
          </div>
          <div className="hobby-child">
            <a className="imp">アニメ</a>
            <br />
            <img
              src="/images/アニメ.jpg"
              alt="ナナチとの2ショットです"
              width="300px"
            ></img>
          </div>
          <div className="hobby-child">
            <a className="imp">スキー</a>
            <br />
            <img
              src="/images/ski flag.jpg"
              alt="スキー部の写真です"
              width="300px"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
