import { Hl1 } from '@/style/common';
import styled from 'styled-components';

const MyHeader = () => {
  return (
    <Container>
      <Hl1>마이페이지</Hl1>
      <hr />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: yellow;
  height: 210px;
  box-sizing: border-box;
  gap: 25px;

  hr {
    border: 2px solid;
    border-color: var(--color-gray2);
    width: 100%;
  }
`;

export default MyHeader;
