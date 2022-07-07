import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
 
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton'; 



export default function Header() {
  const [user] = useAuthState(auth)

  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
          
          alt={user?.displayName}
          src={user?.photoURL}
        />
         <p style={{marginLeft:10, fontSize:12}}>{user?.displayName}</p>
      </HeaderLeft>

      {/* Header Search */}


      {/* Header Right */}
      <HeaderRight>

        <h4 style={{ marginLeft: 10 }}>Logout</h4>
        <IconButton onClick={() => { auth.signOut() }}><LogoutIcon /></IconButton>
        
      </HeaderRight>

    </HeaderContainer>
  )
}

const HeaderSearch = styled.div`
   flex:0.4;
   opacity: 1;
   border-radius: 6px;
   background-color: #421f44;
   text-align: center;
   display: flex;
   padding: 0 50px;
   color: gray;
   border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw; 
    outline: 0;
    color: white;
    }
`
const HeaderContainer = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;

padding: 9px 0;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border: 1px solid rgba(255, 255, 255, 0.18);
position: fixed;
z-index: 2;
   `;
const HeaderLeft = styled.div`
     
   display: flex;
   align-items: center;
   margin-left: 30px;
    
   > .MuiSvgIcon-root {
     margin-left: auto;
     margin-right: 30px;
   }
`
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
  opacity: 0.8;
}
`;

const HeaderRight = styled.div`
    
   display: flex;
   align-items: center;
   justify-content: flex-end;

   > .MuiIconButton-root {
       
      margin: 0px 20px 0px 10px;
   }
`