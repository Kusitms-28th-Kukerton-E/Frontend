import { login } from '@/api';
import { MainButton, SubButton } from '@/components/button';
import { roleState } from '@/state/roleState';
import { Hl1, Hl2, Hl4 } from '@/style/common';
import { LoginDataType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    id: '',
    password: '',
  });
  const [, setRole] = useRecoilState(roleState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    login(loginData).then(data => {
      const role = data.headers['role'];
      setRole(role);
      if (role === 'ROLE_Kid') navigate('/main/kid');
      else if (role === 'ROLE_Organization') navigate('/main/organization');
      else if (role === 'ROLE_Volunteer') navigate('/main/volunteer');
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 연동
    handleLogin();
  };

  return (
    <Container>
      <div className="title">
        <Hl1>로그인</Hl1>
      </div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <input
            type="text"
            name="id"
            value={loginData.id}
            placeholder="아이디"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={loginData.password}
            placeholder="비밀번호"
            onChange={handleInputChange}
          />
        </InputContainer>
        <MainButton type="submit">
          <Hl2>로그인하기</Hl2>
        </MainButton>
      </form>
      <Link to="/register">
        <SubButton>
          <Hl2>신규 회원가입</Hl2>
        </SubButton>
      </Link>
      <FindButtonContainer>
        <Hl4>
          <span>아이디 찾기</span>
        </Hl4>
        <Hl4>
          <span>비밀번호 찾기</span>
        </Hl4>
      </FindButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 143px 0px;
  justify-content: center;
  align-items: center;

  .title {
    padding-bottom: 51px;
  }

  form {
    padding-bottom: 21px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding-bottom: 50px;

  input {
    box-sizing: border-box;
    width: 700px;
    height: 112px;
    border-radius: 20px;
    border: 2px solid;
    border-color: var(--color-gray2);
    padding: 39px 51px;
    font-family: Pretendard;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.2;
  }
`;

const FindButtonContainer = styled.div`
  padding: 20px;
  color: var(--color-gray2);
  display: flex;
  flex-direction: row;
  gap: 28px;
  span {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
    cursor: pointer;
  }
`;

export default Login;
