import React from "react";

function Parking(){    
    return(
        <div className="parkingArea">
            <h1>차량 위치 확인</h1>
            <div className="carInfo">
                <img src={`${process.env.PUBLIC_URL}/images/car.png`} alt="car" />
                <div>
                    <ul>
                        <li>차량번호</li>
                        <li>60두 2979</li>
                    </ul>
                    <ul>
                        <li>차량위치</li>
                        <li>B1 47블럭 3열</li>
                    </ul>
                    <ul>
                        <li>입차시간</li>
                        <li>2025년 4월 29일</li>
                    </ul>                    
                    <div>
                        <button>다시조회</button>
                        <button>확인완료</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Parking;