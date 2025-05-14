import React, { useState, useEffect } from 'react';

function SideMenu({ onRoomSelect }){

    const [roomDataList, setRoomDataList] = useState([]);
        const loadRoomData = async() => {
        try{
            const response = await fetch('./RoomData.json');
            if( !response.ok ){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
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

    const [ selectedRoomInfo, setSelectedRoomInfo ] = useState(null);
    const MenuItemClick = (roomData) =>{
        setSelectedRoomInfo(roomData);
        if( onRoomSelect ){
            onRoomSelect(roomData);
        }
    }
        
    return(
        <div className='side'>
            <h2>진료과목</h2>
            <div className="side_menu">
                <ul>
                    {roomDataList.map((roomData, index) => (                      
                        <li key={roomData.room_n} onClick={()=>MenuItemClick(roomData)}>{roomData.part}</li>                
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default SideMenu;