import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AppbarStyle.css";
import firebaseConfig from "../../config";
import { storage } from "../../config";


const Appbar = ({ }) => {
  const [question, setQuestion] = useState();
  const [IsAaccount, setAccount] = useState(false);
  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  }

  const Validation = () => {
    if (question.trim().length == 0 || question == undefined || question == null) {
      alert("Please ask something...");
    }
    else {
      firebaseConfig.database().ref("question").push({
        ID:Math.floor(Math.random() * Date.now()),
        Question: question,
        Answer: question,
      });
    }
  }

  const handleSatus = () => {

    firebaseConfig
      .database()
      .ref("question" + 605530533311)
      .set({
        Question: question,
      });
  };
  return (
    <>
      <div className={'appbar'}>
        <div className={'appbar__container'}>
          <h2 className={'cart__title'}>Answer Bag</h2>
        </div>
        <div className={'search_div'}>
          <input
            onChange={onChangeQuestion}
            value={question}
            type={'text'}
            className={'search_button'}
            placeholder={'Ask something...'}
          />

        </div>
        <button
          className={'search_logo'}
          onClick={() => handleSatus()}
        >post</button>

        <div style={{ marginLeft: 'auto' }}>
          <img
            className={''}
            src="https://image.flaticon.com/icons/png/128/2645/2645897.png"
            style={{ height: '25px', margin: '15px' }}
          />
        </div>
        <img
          className={''}
          onClick={() => setAccount(!IsAaccount)}
          src="https://image.flaticon.com/icons/png/128/1946/1946429.png"
          style={{ height: '25px', margin: ' 15px 0px 15px 15px' }}
        />
      </div>
      {IsAaccount &&
        <div className='account_info'>
          <h4>login</h4>
          <hr />
          <h4>Sign Up</h4>
        </div>}
    </>
  );
};

export default Appbar

