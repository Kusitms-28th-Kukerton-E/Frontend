import styled from 'styled-components';
import SubTitle from './subTitle';

const MyInfo = () => {
  //   const myTopInfo = [
  //     {
  //       name: '김준석',
  //       gender: '남성',
  //       age: '25',
  //       place: 'seoul',
  //       univ: 'ajou',
  //       major: 'eng',
  //     },
  //   ];
  return (
    <InfoContainer>
      <SubTitle title="내 정보"></SubTitle>
      <InfoBox>
        <InfoTop>
          <InfoSmall>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButton>이름</InfoButton>
              <InfoText>김준석</InfoText>
            </NameBox>
          </InfoSmall>
        </InfoTop>
        <InfoBottom>
          <InfoSmall>
            <NameBox>
              <InfoButtonBottom>관심 과목</InfoButtonBottom>
              <InfoTextBottom>수학</InfoTextBottom>
              <InfoTextBottom>수학</InfoTextBottom>
              <InfoTextBottom>수학</InfoTextBottom>
            </NameBox>
            <NameBox>
              <InfoButtonBottom>관심 과목</InfoButtonBottom>
              <InfoText style={{ color: 'black' }}>김준석</InfoText>
            </NameBox>
            <NameBox>
              <InfoButtonBottom>관심 과목</InfoButtonBottom>
              <InfoText style={{ color: 'black' }}>김준석</InfoText>
            </NameBox>
          </InfoSmall>
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

  //
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
  //
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
