import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
 import SideBarOption from './SideBarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import {   InsertComment,   Inbox, Add } from '@material-ui/icons';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './SideBar.css'
 
function SideBar() {
  const [user] = useAuthState(auth)
  const [channels] = useCollection(db.collection('rooms'))

  return (
   
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>siddharthp/dev/community</h2>
          
        </SideBarInfo>
        
      </SideBarHeader>
      

     
      <SideBarOption Icon={InsertComment} title="Threads (under build)" />
      <SideBarOption Icon={Inbox} title="Codes & debugs (under build)" />
      {/* <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People and user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="file browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" /> */}
       
      <SideBarOption Icon={Add} addChannelOption title="Add channels" />
      <div className='overflow' id="style-3">
      {channels?.docs.map((doc) => (
        <SideBarOption key={doc.id}   id={doc.id} title={doc.data().name} />
      ))}
       </div>
    </SideBarContainer>
   
  )
}

export default SideBar

const SideBarContainer = styled.div`
background-image: url("https://wallpaperaccess.com/full/3119143.png") ;
background-repeat: no-repeat, repeat;
background-position:center;
background-size: cover;
   color: white;
   flex: 0.25;
   border-top: 1px solid #49274b;
    
   margin-top: 60px;

   >hr {
     margin-top: 10px;
     margin-bottom: 10px;
     border: 1px solid #49274b;
   }
`

const SideBarHeader = styled.div`
   display: flex;
   border-bottom: 1px solid #49274b;
   border-bottom: 10px;
   padding: 13px;

   >.MuiSvgIcon-root {
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
   }
`

const SideBarInfo = styled.div`
  flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 13px;
    
    
  }

  >h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`