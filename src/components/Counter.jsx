import React, { useState } from "react"

export default function Counter({total, onclick}) {
    const [number, setNumber] = useState(0); 
    // useState를 호출할때 우리가 원하는 초기값을 지정하면 배열이 return이 되는데 첫번째 인자는 상태값에 접근할 수 있는 변수와 이 변수를 업데이트할 수 있는 함수 이 두개가 전달이 된다

    return(
        <div className="counter">
            <p className="number">
                {number} <span className="total">/{total}</span>
            </p>
            <button className="button" onClick={()=>{
               setNumber((prev) => prev +1 );
               onclick();
            //    set이 될때마다 react가 자동으로 Counter를 계속 호출해서 refresh

            }}>Add +</button>
        </div>
    )
}