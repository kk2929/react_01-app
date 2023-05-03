import React, { useState, useEffect } from 'react';

const App = () => {
  const [isShow, setIsShow] = useState(false);
  const closeWithClickOutSideMethod = (e, setter) => {
    if (e.target === e.currentTarget) setter(false);
  };

  return (
    <div className='root'>
      <button
        onClick={() => setIsShow(!isShow)}
      >
        toggle menu
      </button>

      <div className='r'>
        <div
          className={`back ${isShow ? "active" : ""}`}
        >
        </div>
        <div
          className={`menuWrapper ${isShow ? "active" : ""}`}
          onClick={(e) => closeWithClickOutSideMethod(e, setIsShow)}
        >
          <div className="menu">
            <ul className="menuList">
              <li>ここを押しても閉じない</li>
              <li>でも枠外のグレーを押すと</li>
              <li>閉じるよ</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;