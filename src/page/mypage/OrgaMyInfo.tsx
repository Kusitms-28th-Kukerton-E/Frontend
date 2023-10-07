import { UserDataType } from '@/types';
import styled from 'styled-components';
import SubTitle from './subTitle';

const OrgaMyInfo = ({ userData }: { userData: UserDataType }) => {
  return (
    <InfoContainer>
      <SubTitle title="내 정보"></SubTitle>
      <InfoBox>
        <InfoTop>
          <InfoSmall>
            <NameBox>
              <InfoButton>기관명</InfoButton>
              <InfoText>{userData.name}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>기관 위치</InfoButton>
              <InfoText>{userData.address}</InfoText>
            </NameBox>

            <NameBox>
              <InfoButton>주요 활동 내용</InfoButton>
              <InfoText>{userData.activity}</InfoText>
            </NameBox>
          </InfoSmall>
        </InfoTop>
      </InfoBox>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  /* height: 700px; */
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 50px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;

const InfoTop = styled.div`
  /* border: 1px solid red; */
  display: flex;
  border-radius: 40px;
  padding: 80px 80px;
  background: var(--Main-color2, #498dfd);
`;

const InfoSmall = styled.div`
  /* border: 1px solid red; */
  display: grid;
  /* justify-items: center; */
  grid-template-columns: repeat(3, 3fr);
  width: 100%;
  /* gap: 43px 32px; */
  /* padding: 20px; */
`;

const InfoButton = styled.div`
  width: 180px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 30px;
  background: var(--White, #fff);

  color: var(--Black, #263238);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 39px */
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
  align-items: center;
`;

const InfoText = styled.div`
  display: flex;
  color: var(--White, #fff);
  text-align: center;
  /* Headline 3 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
`;

export default OrgaMyInfo;
