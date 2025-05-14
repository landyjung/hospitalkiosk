import React, { useState, useEffect } from 'react';

function RoomInfo({ onRoomSelect }){
    const [ selectedRoomInfo, setSelectedRoomInfo ] = useState(null);
    const MenuItemClick = (roomData) =>{
        setSelectedRoomInfo(roomData);
        if( onRoomSelect ){
            onRoomSelect(roomData);
        }
    }
    const [roomDataList, setRoomDataList] = useState([]);
    const loadRoomData = async() => {
        try{
            const response = await fetch('./RoomData.json');
            if( !response.ok ){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setRoomDataList(data);
            console.log(data);
         } catch (error) {
            console.error( 'Failed to load room data:' , error );
         } finally {
            
        }
    }
    useEffect(()=>{
           loadRoomData();
    }, []);

    return(
        
        <div className="intro_wrap">            
            <ul className="part_box">
                {roomDataList.map((roomData) => (
                <li key={roomData.part} onClick={()=>MenuItemClick(roomData)}>
                    <h2>{roomData.part}</h2>
                    <h3>{roomData.title_e}</h3>
                    <img src={`/images/part${roomData.img_n}.png`} alt={roomData.part} className='part_img' />
                    <strong>{ roomData.floor} <span className="room_n">{roomData.room_n} 진료실</span></strong>
                </li>
                ))}
            </ul>            
        </div>
    )
}
export default RoomInfo;