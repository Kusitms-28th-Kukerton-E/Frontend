import { Hl2 } from '@/style/common';
import { ChildrenDataType } from '@/types';
import styled from 'styled-components';

const Child = ({ childData }: { childData: ChildrenDataType }) => {
  return (
    <Container>
      <Circle />
      <MainInfo>
        <Hl2>{childData.child.name}</Hl2>
        <div className="info">
          <span>{`[지역] ${childData.child.region}`}</span>
          <span>{`[소속] ${childData.child.organization}`}</span>
        </div>
      </MainInfo>
      <SubInfo>
        <span className="sub-title">[특징]</span>
        <span className="sub-description">{childData.description}</span>
      </SubInfo>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
  width: 1696px;
  padding: 32px 95px;
  border: 2px solid;
  border-color: var(--color-gray-blue);
  border-radius: 40px;
  margin: 20px 0px;
`;

const Circle = styled.div`
  width: 195px;
  height: 195px;
  border-radius: 50%;
  background-color: var(--color-sub1);
`;

const MainInfo = styled.div`
  color: #333333;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 272px;

  .info {
    display: flex;
    flex-direction: column;

    span {
      font-family: Pretendard;
      font-size: 26px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;

const SubInfo = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.5;
  width: 879px;
  display: flex;
  flex-direction: column;
`;

export default Child;
