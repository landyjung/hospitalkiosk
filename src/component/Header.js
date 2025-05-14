import React, { useEffect, useState } from 'react';

function Header({ onSelectFloor, selectedFloor }) {
    
    return(
    <div>
        <header>
            <h1>세종충남대학교 병원 안내도</h1>
            <nav>
                <ul>
                    <li><button onClick={()=> onSelectFloor('F1')} className={selectedFloor === 'F1' ? 'active' : ''}>1층</button></li>
                    <li><button onClick={()=> onSelectFloor('F2')} className={selectedFloor === 'F2' ? 'active' : ''}>2층</button></li>
                    <li><button onClick={()=> onSelectFloor('F3')} className={selectedFloor === 'F3' ? 'active' : ''}>3층</button></li>
                </ul>
            </nav>
            <div>
                <button onClick={()=> onSelectFloor('roomInfo') }>진료과목찾기</button>
                <button onClick={()=> onSelectFloor('parking') }>차량위치확인</button>
            </div>
        </header>
      
    </div>
  )
}

export default Header;