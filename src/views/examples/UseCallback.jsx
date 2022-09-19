import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

const UseCallback = (props) => {
  const [count, setCount] = useState;

  function inc(delta) {
    setCount(count + delta)
  }
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>

        <div>
          <button className="btn" onClick={() => inc(6)}>+6</button>
          <button className="btn" onClick={() => inc(12)}>+12</button>
          <button className="btn" onClick={() => inc(18)}>+18</button>
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
