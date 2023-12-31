import styled from 'styled-components';
import SubTitle from './subTitle';
import { UserDataType } from '@/types';

const MyInfo = ({
  userData,
  title,
}: {
  userData: UserDataType;
  title: string;
}) => {
  return (
    <InfoContainer>
      <SubTitle title={title}></SubTitle>
      <InfoBox>
        <InfoTop>
          <InfoSmall>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>{userData.name}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>성별</InfoButton>
              <InfoText>{userData.sex === 'Male' ? '남성' : '여성'}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>나이</InfoButton>
              <InfoText>{userData.age}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>지역</InfoButton>
              <InfoText>{userData.place}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>학교</InfoButton>
              <InfoText>{userData.school}</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>전공</InfoButton>
              <InfoText>{userData.major}</InfoText>
            </NameBox>
          </InfoSmall>
        </InfoTop>
        <InfoBottom>
          <div className="info-container">
            <NameBox>
              <InfoButtonBottom>관심 과목</InfoButtonBottom>
              <InfoTextBottom>수학</InfoTextBottom>
              <InfoTextBottom>국어</InfoTextBottom>
              <InfoTextBottom>체육</InfoTextBottom>
            </NameBox>
            <div className="vms">
              <NameBox>
                <InfoButtonBottom>VMS ID</InfoButtonBottom>
                <InfoText style={{ color: 'black' }}>
                  {userData.vmsId1}
                </InfoText>
              </NameBox>
              <NameBox>
                <InfoButtonBottom>1365 ID</InfoButtonBottom>
                <InfoText style={{ color: 'black' }}>
                  {userData.vmsId2}
                </InfoText>
              </NameBox>
            </div>
          </div>
        </InfoBottom>
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
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 80px 80px;
  background: var(--Main-color2, #498dfd);
`;

const InfoBottom = styled.div`
  /* border: 1px solid red; */
  display: flex;

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 80px 80px;

  border: 5px solid var(--Main-color2, #498dfd);
  background: var(--White, #fff);

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .vms {
      display: flex;
      flex-direction: row;
      gap: 580px;
    }
  }
`;

const InfoSmall = styled.div`
  /* border: 1px solid red; */
  display: grid;
  /* justify-items: center; */
  grid-template-columns: repeat(3, 3fr);
  width: 100%;
  gap: 43px 32px;
  /* padding: 20px; */
`;

const InfoButton = styled.div`
  width: 100px;
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

const InfoButtonBottom = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 30px;
  background: var(--Grey-blue, #abbed1);

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
  gap: 23px;
  align-items: center;
`;

const InfoText = styled.div`
  color: var(--White, #fff);
  text-align: center;

  /* Headline 3 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
`;

const InfoTextBottom = styled.div`
  width: 100px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid var(--Main-color2, #498dfd);
  background: var(--White, #fff);
  color: var(--Black, #263238);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  /* 본문1 */
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 39px */
`;

export default MyInfo;
