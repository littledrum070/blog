import { useState } from 'react';
import './App.css';

function App() {

  let post = '테니스 칠 때 기억할 것';
  let [title, setTitle] = useState(['포핸드 스트로크', '백핸드 스트로크', '포핸드 발리'] );
  let [checked, setChecked] = useState(0);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState('입력하세요');

  return (
    <div className="App">

      <div className="main-nav">
        <h4>블로그 상단 메뉴바</h4>
      </div>

      <h2>{ post }</h2>

      <button onClick = { () => { 
        let titleCopy = [...title];
        titleCopy[0] = '다음은 백핸드';
        setTitle( titleCopy );
        }
      }>다음 단계</button>

      <button onClick = { () => {
        let titleCopy2 = [...title];
        titleCopy2.sort();
        setTitle(titleCopy2);
      }}>가나다순</button>

      {
        title.map(function (a, i){
          return (
            <div className="list" key={i}>              
              <h4 onClick = { () => {
                setModal(modal ? false : true);
                setModalTitle(i);
              }}>{ title[i] }
                <span onClick = { (e) => {
                  e.stopPropagation();
                  setChecked(checked + 1);
                }}>&nbsp;&nbsp;&nbsp;🆗 {checked}
                </span>
              </h4>
              <p>내용</p>
              <button onClick = {() => {
                let newTitle = [...title];
                newTitle.splice(i, 1);
                setTitle(newTitle);
              }}>
                삭제</button>
            </div>
          )
        })
      }

      <input type = "text" placeholder={input} onChange = {
        (e) => { setInput(e.target.value) }
      }></input>
      <button onClick = { () => {
        let newTitle = [...title];
        newTitle.unshift(input);
        setTitle(newTitle);
        }}>등록</button>

      {
        modal ? <Modal title={title} modalTitle={modalTitle}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
        <h4> {props.title[props.modalTitle]} </h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
