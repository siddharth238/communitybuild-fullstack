import React from 'react';
import styled from 'styled-components';
import './Message.css'
export default function Message({ message, timestamp, user, userImage, sameUser }) {
  console.log(timestamp);
  return (
    <MessageContainer>
      {sameUser ? <>

        <div className='MessageInfo'>
          <h4>
           
            <span>
              {new Date(timestamp&&timestamp?.toDate()).toUTCString()}
            </span>
          
          </h4>
          <p style={{textAlign:"right"}}>{message}</p>
        </div>
        
      </> : <>
        <img src={userImage} alt="" />
        <div  className='MessageInfo2'>
          <h4>
            {user}{' '}
            <span>
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </>}

    </MessageContainer>

  )
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color:white;  
  >img {
    height: 50px;
    border-radius: 8px;
  }
`
 
 
const MessageInfo2 = styled.div`
padding-left: 10px;
>h4{
  color: white;
  font-weight: 300;
  margin-left: 4px;
  font-size: 10px;
}
` 