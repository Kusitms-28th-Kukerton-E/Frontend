import { MyInfoDataType } from '@/types';
import styled from 'styled-components';

const MyInfoData = ({ data }: { data: MyInfoDataType[] }) => {
  return (
    <Container>
      <DefaultData>
        {data.map(item => (
          <Title>{item.title}</Title>
        ))}
      </DefaultData>
    </Container>
  );
};

const Title = styled.div`
  background-color: var(--color-white);
  color: black;
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
`;

const Container = styled.div`
  border: 10px solid blue;
`;

const DefaultData = styled.div`
  background-color: blue;
`;

export default MyInfoData;
