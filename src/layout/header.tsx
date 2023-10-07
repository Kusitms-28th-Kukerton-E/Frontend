import { MainButton } from '@/components/button';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <MainButton>ddididi</MainButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  /* background-color: skyblue; */
  display: flex;

  /* padding: 39px 91px 38px 156px; */
  /* justify-content: flex-end; */
  /* align-items: flex-start; */
  /* gap: 1487px; */
`;

export default Header;
