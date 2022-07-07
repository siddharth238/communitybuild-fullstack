import React, { useRef, useEffect } from 'react';
 import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/app';
import ChatInput from '../Components/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db,auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Message from '../Components/Message';
import './Chat.css'
export default function Chat() {
  const [user1] = useAuthState(auth)
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )

  const [roomMessages, loading] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timeStamp', 'asc' )
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [roomId, loading])

  return (
    <ChatContainer id="style-3">
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft  >
              <h4><strong>#{roomDetails?.data().name}</strong></h4>
              
            </HeaderLeft>
             
          </Header>
          <ChatMessages  className='chatmessagescont'  >
            {roomMessages?.docs.map(doc => {
              const { message, timeStamp, user, userImage } = doc.data();
               
              return (
                <div className={user1.displayName===user?'chatmessages me': ''}>

                
                <Message  
                sameUser={user1.displayName===user? true: false}
                  key={doc.id}
                  message={message}
                  timestamp={timeStamp}
                  user={user}
                  userImage={userImage}
                /></div>
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}

    </ChatContainer>
  )
}

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  border-bottom: 1px solid lightgray;
 background-color:white;

`

const ChatBottom = styled.div`
  padding-bottom: 200px;
`

const ChatMessages = styled.div`
 
`

const HeaderLeft = styled.div`
  display: flex;
  align-items:center;

  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-right: 10px;

  > h4 .MuiSvgIcon-root {
    margin-left:10px;
    font-size: 18px;
  }
}
`
const HeaderRight = styled.div`
  >p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  >p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size:16px;
  }
`

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  
  margin-top: 60px;
  margin-bottom:88px;
  background-image: url(https://i.pinimg.com/originals/54/ba/1a/54ba1aebeb5c5c92105f430009db074c.jpg) ;
  background-repeat: no-repeat, repeat;
  background-position:center;
  background-size: cover;
`