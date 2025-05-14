import './App.css';
import React, { useState } from 'react';
import Parking from './component/Parking';
import RoomInfo from './component/RoomInfo';
import Floor_01 from './component/Floor_01';
import Floor_02 from './component/Floor_02';
import Floor_03 from './component/Floor_03';
import SideMenu from './component/SideMenu';
import Header from './component/Header';


function App() {
    const [selectedFloor, setSelectedFloor] = useState('F1');
    const [selectedRoomData, setSelectedRoomData] = useState(null);
    const changeFloor = (floor) =>{
      setSelectedFloor(floor);
      setSelectedRoomData(null); 
    }
    const roomSelect = (roomData)=>{
       setSelectedRoomData(roomData);
       setSelectedFloor(roomData.floor)
    }
    const renderFloorComponent=()=>{
        switch(selectedFloor){
            case 'F1':
        return <Floor_01 selectedRoomData={selectedRoomData} setSelectedRoomData={setSelectedRoomData} />;
            case 'F2':
        return <Floor_02 selectedRoomData={selectedRoomData} setSelectedRoomData={setSelectedRoomData}  />;
            case 'F3':
        return <Floor_03 selectedRoomData={selectedRoomData} setSelectedRoomData={setSelectedRoomData} />;
            case 'roomInfo':
        return <RoomInfo onRoomSelect={roomSelect}  />;
            case 'parking':
        return <Parking />;
            default:
        return(<div style={{marginTop:'150px', marginRight:'250px', fontSize:'1.5rem', color:'#0D61CE',textAlign:'center',lineHeight:'50px' }}><strong>
        <font className='gray_d' style={{fontSize:'2.0rem'}}>세종충남대학교병원</font> 방문을 환영합니다.<br />
        상단 메뉴에서 원하시는 층을 선택해주세요.</strong></div>)
        }
      }
      
        return (
            <div className="App">     
                <Header onSelectFloor={changeFloor} selectedFloor={selectedFloor}/>
                <div className='main_wrap'>
                    <div className='sideArea'>
                    <SideMenu onRoomSelect={roomSelect} />
                    </div>
                    <div className='mainArea'>
                        {renderFloorComponent()}                        
                    </div>
                </div>                
            </div>
        );
    }

export default App;