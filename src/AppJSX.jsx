import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

function AppJSX() {
  //함수 이름은 무조건 대문자 컴포넌트는 하나의 태그만 반환해야한다.

  const name = "bourne";
  const list = ["milk", "banan", "coco", "ghgh"];

  return (
    // 하나의 태그만 반환해야함 그래서 다수의 태그를 return하고 싶다면 텅빈 태그더라도 추가해야함
    <>
      <h1>{`hihihi! ${name}`}</h1>
      <h2>213213213</h2>

      {/* // 생략된 js 문법 */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        {list.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
