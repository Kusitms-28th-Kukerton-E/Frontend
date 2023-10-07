import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import logo from '@/assets/로고.png';
import { useRecoilState } from 'recoil';
import { roleState } from '@/state/roleState';

const Header = () => {
  const [role] = useRecoilState(roleState);
  return (
    <HeaderBox>
      <TextContent>
        {role === 'ROLE_Kid' && (
          <StyledLink to="/main/kid">
            <img src={logo} alt="logo" />
          </StyledLink>
        )}
        {role === 'ROLE_Organization' && (
          <StyledLink to="/main/organization">
            <img src={logo} alt="logo" />
          </StyledLink>
        )}
        {role === 'ROLE_Volunteer' && (
          <StyledLink to="/main/volunteer">
            <img src={logo} alt="logo" />
          </StyledLink>
        )}
        <InputBox>
          <StyledInput placeholder="키워드를 입력하세요" type="text" />
          <AiOutlineSearch />
        </InputBox>
        {role === 'ROLE_Kid' && (
          <StyledLink to="/mypage/kid">
            <BiSolidUser />
          </StyledLink>
        )}
        {role === 'ROLE_Organization' && (
          <StyledLink to="/mypage/organization">
            <BiSolidUser />
          </StyledLink>
        )}
        {role === 'ROLE_Volunteer' && (
          <StyledLink to="/mypage/volunteer">
            <BiSolidUser />
          </StyledLink>
        )}
      </TextContent>
    </HeaderBox>
  );
};

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
`;

const StyledLink = styled(Link)`
  img {
    width: 160px;
    height: 67.75px;
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
