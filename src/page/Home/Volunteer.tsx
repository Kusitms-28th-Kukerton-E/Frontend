import { LikeButton, MainButton2, SubButton2 } from '@/components/button';
import { Hl2 } from '@/style/common';
import styled from 'styled-components';

const Volunteer = ({ mode }: { mode: string }) => {
  return (
    <MainContainer>
      <Circle />
      <LikeButton>💙 20</LikeButton>
      <InfoContainer>
        <Hl2>조은별(24, 여성)</Hl2>
        <div className="info">
          <span>[지역] 서울특별시 서대문구</span>
          <span>[학교] 연세대학교 경영학과</span>
        </div>
      </InfoContainer>
      {mode === 'ver1' && <ButtonContainer1 />}
      {mode === 'ver2' && <ButtonContainer2 />}
      {mode === 'ver3' && <ButtonContainer3 />}
    </MainContainer>
  );
};

const ButtonContainer1 = () => {
  return (
    <ButtonContainer>
      <MainButton2>
        <Hl2>수락</Hl2>
      </MainButton2>
      <SubButton2>
        <Hl2>삭제</Hl2>
      </SubButton2>
    </ButtonContainer>
  );
};

const ButtonContainer2 = () => {
  return (
    <ButtonContainer>
      <MainButton2>
        <Hl2>평가하기</Hl2>
      </MainButton2>
    </ButtonContainer>
  );
};

const ButtonContainer3 = () => {
  return (
    <ButtonContainer>
      <MainButton2>
        <Hl2>선택하기</Hl2>
      </MainButton2>
    </ButtonContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 544px;
  border: 2px solid;
  border-color: var(--color-gray-blue);
  border-radius: 40px;
  padding: 32px 0px;
`;

const Circle = styled.div`
  width: 195px;
  height: 195px;
  border-radius: 50%;
  background-color: var(--color-sub1);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 30px;

  .info {
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    span {
      font-family: Pretendard;
      font-size: 26px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 400px;
`;
export default Volunteer;
