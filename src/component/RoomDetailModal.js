import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content:{
        top:'140px',  left:'120px',/* top:'50%',  left:'50%',  transform:'translate(-50%,-50%)', */  maxWidth:'500px', width:'60%', height:'640px', 
       border:'3px solid #2B7DE8', padding:'20px', boxSizing:'border-box',
    }, 
    overlay:{
        backgroundColor:'rgba(0,0,0,0.5)'
    }
}

const RoomDetailModal = ({ isOpen, roomData, onRequestClose })=>{
    if( !roomData ){
        return null;
    }
    
return(
        
       <Modal isOpen={isOpen}  onRequestClose={onRequestClose}  style={customStyles}  contentLabel="Room Details">
        <div className='room_detail'>
           <div className="title_top">
                <img src={`/images/part${roomData.img_n}.png`} alt={roomData.part} />
                <h3>{roomData.part}  <span className='gray_f'>({roomData.title_e})</span></h3>
                <button className="close_btn" onClick={onRequestClose} ></button>                
            </div>
            <h4>{ roomData.floor} <span className='blue_f'>{roomData.room_n}</span>호</h4>
            

           {roomData.doctors && roomData.doctors.length > 0 ? (
        
               <ul>
                   {roomData.doctors.map((doctor,index)=>(
                       <li key={index} style={{marginBottom:'15px',paddingLeft:'10px'}}>
                       <div className="doctor_detail">
                           <img src={`/images/doc_img/${doctor.doc_img}.jpg`} alt="" />
                           <div>
                               <div className="doc_name">{doctor.doc_name} <span className="part_name">{roomData.part}</span></div>
                               <p className="txt_01">{ doctor.doc_text1}</p>
                               <p className="part_name2">연구진료분야</p>
                               <p className="txt_02">{ doctor.doc_text2} </p>
                           </div>        
                       </div>
                       <img src="/images/doctor_time.png" alt="" className='doctor_time' /> 
                       </li>
                   ))}
               </ul>
             ) : (
               <p>해당 방에 등록된 정보가 없습니다.</p>
             )}
        </div>
        </Modal>
    )
}

export default RoomDetailModal;