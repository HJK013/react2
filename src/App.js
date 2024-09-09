import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CustomButton = styled.button`
  padding: 20px 20px;
  font-size: 16px;
  background-color: #dbe1bc;
  color: #a98467;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ccd5ae;
  }
`;

const CustomFont = styled.div`
  font-family: Georgia, serif;
  font-size: 18px;
  color: #6c584c;
`;

const LoginCard = styled.div`
  width: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const InputText = styled.input`
  width: calc(100% - 40px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: solid #ccc;
`;

function App() {
  const [idValue, setidValue] = useState('');
  const [pwValue, setpwValue] = useState('');

  const handleidChange = (event) => {
    setidValue(event.target.value);
  };

  const handlepwChange = (event) => {
    setpwValue(event.target.value);
  };

  return (
    <CenteredContainer>
      <LoginCard>
        <CustomFont>로그인</CustomFont>
        <InputText type="text" placeholder="아이디" value={idValue} onChange={handleidChange} />
        <InputText type="password" placeholder="비밀번호" value={pwValue} onChange={handlepwChange} />
        <CustomButton>로그인</CustomButton>
      </LoginCard>
    </CenteredContainer>
  );
}

export default App;