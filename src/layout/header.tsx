import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import logo from '@/assets/로고.png';
import { useRecoilState } from 'recoil';
import { roleState } from '@/state/roleState';
import { Hl3 } from '@/style/common';

const Header = () => {
  const [role, setRole] = useRecoilState(roleState);
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <TextContent>
        <ImgContainer>
          {role === 'ROLE_Kid' && (
            <Link to="/main/kid">
              <img src={logo} alt="logo" width="154px" />
            </Link>
          )}
          {role === 'ROLE_Organization' && (
            <Link to="/main/organization">
              <img src={logo} alt="logo" width="154px" />
            </Link>
          )}
          {role === 'ROLE_Volunteer' && (
            <Link to="/main/volunteer">
              <img src={logo} alt="logo" width="154px" />
            </Link>
          )}
          {role === '' && <img src={logo} alt="logo" width="154px" />}
        </ImgContainer>
        <InputBox>
          <StyledInput placeholder="키워드를 입력하세요" type="text" />
          <StyledIcon />
        </InputBox>
        {role === 'ROLE_Kid' && (
          <div className="user-container">
            <Button
              onClick={() => {
                setRole('');
                alert('로그아웃 되었습니다.');
                navigate('/login');
              }}
            >
              <Hl3>로그아웃</Hl3>
            </Button>
            <Link to="/mypage/kid">
              <BiSolidUser style={{ fontSize: '40px' }} />
            </Link>
          </div>
        )}
        {role === 'ROLE_Organization' && (
          <div className="user-container">
            <Button
              onClick={() => {
                setRole('');
                alert('로그아웃 되었습니다.');
                navigate('/login');
              }}
            >
              <Hl3>로그아웃</Hl3>
            </Button>
            <Link to="/mypage/organization">
              <BiSolidUser />
            </Link>
          </div>
        )}
        {role === 'ROLE_Volunteer' && (
          <div className="user-container">
            <Button
              onClick={() => {
                setRole('');
                alert('로그아웃 되었습니다.');
                navigate('/login');
              }}
            >
              <Hl3>로그아웃</Hl3>
            </Button>
            <Link to="/mypage/volunteer">
              <BiSolidUser />
            </Link>
          </div>
        )}
        {role === '' && (
          <div className="user-container">
            <BiSolidUser />
          </div>
        )}
      </TextContent>
    </HeaderBox>
  );
};

const StyledIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 25%;
  right: 3%;
`;

const ImgContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  border-radius: 60px;
  border: none;
  background: var(--color-main2);
  color: var(--color-white);
  padding: 20px 48px;
  //width: 100%;
`;

const HeaderBox = styled.div`
  /* border: 1px solid gray; */
  /* width: 100%;
  height: 113px; */
  /* width: 1920px; */
  width: 100%;
  height: 200px;
  margin: 0 auto;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  display: flex;

  justify-content: space-between;
`;

const TextContent = styled.li`
  color: var(--gray-900, #15191d);
  align-items: center;
  text-align: center;
  /* border: 1px solid red; */
  /* H3_B */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: bolder;
  font-weight: 900;
  line-height: 160%; /* 32px */

  margin: 10px 0px;
  width: 100%;
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  position: relative;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  .user-container {
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 30px;
    align-items: center;
  }
`;

// const SubStyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   display: flex;
//   white-space: nowrap;

//   &:hover {
//     color: #18afdd;
//   }
// `;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const StyledInput = styled.input`
  width: 900px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 25px;
  background: var(--Silver, #f5f7fa);
  outline: none;
  border: none;

  color: var(--D_Grey, #4d4d4d);
  text-align: left;
  padding-left: 63px;
  /* Headline 4 */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 33.6px */
`;

export default Header;
