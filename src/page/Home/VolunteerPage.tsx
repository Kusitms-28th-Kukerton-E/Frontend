import styled from 'styled-components';
import Category from './category';

const VolunteerPage = ({ title }: { title: string }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <VolContainer>
        {/* <TopCate title="모집 중인 자원봉사" /> */}
        <CategoryContainer>
          {' '}
          <CategoryTitle>{title}</CategoryTitle>
          <SecondCategory>
            <SecondText style={{ color: 'var(--color-main2)' }}>
              지역
            </SecondText>
            <SecondText>요일/시간대</SecondText>
            <SecondText>활동</SecondText>
          </SecondCategory>
        </CategoryContainer>

        <Category />
        <DataContainer>
          <DataBox>
            <DataTag>진로</DataTag>
            <DataTitle>청소년 기초학습지도 자원봉사</DataTitle>
            <DescriptBox>
              <p>[모집기관] 동대문구 청소년 상담복지센터</p>
              <p>[봉사기간] 2023-10-11 ~ 2023-11-11</p>
            </DescriptBox>
            <JoinButton>참여하기</JoinButton>
          </DataBox>
          <DataBox>
            <DataTag>진로</DataTag>
            <DataTitle>청소년 기초학습지도 자원봉사</DataTitle>
            <DescriptBox>
              <p>[모집기관] 동대문구 청소년 상담복지센터</p>
              <p>[봉사기간] 2023-10-11 ~ 2023-11-11</p>
            </DescriptBox>
            <JoinButton>참여하기</JoinButton>
          </DataBox>{' '}
          <DataBox>
            <DataTag>진로</DataTag>
            <DataTitle>청소년 기초학습지도 자원봉사</DataTitle>
            <DescriptBox>
              <p>[모집기관] 동대문구 청소년 상담복지센터</p>
              <p>[봉사기간] 2023-10-11 ~ 2023-11-11</p>
            </DescriptBox>
            <JoinButton>참여하기</JoinButton>
          </DataBox>{' '}
          <DataBox>
            <DataTag>진로</DataTag>
            <DataTitle>청소년 기초학습지도 자원봉사</DataTitle>
            <DescriptBox>
              <p>[모집기관] 동대문구 청소년 상담복지센터</p>
              <p>[봉사기간] 2023-10-11 ~ 2023-11-11</p>
            </DescriptBox>
            <JoinButton>참여하기</JoinButton>
          </DataBox>
        </DataContainer>
      </VolContainer>
    </div>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
`;

const CategoryTitle = styled.div`
  color: #000;
  padding: 0px 15px;

  /* Headline 1 */
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 64.8px */

  display: flex;
  width: 1920px;
  height: 200px;
  /* padding: 100px 1381px 35px 140px; */
  align-items: center;
`;

const SecondCategory = styled.div`
  padding: 0px 15px;

  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  border-bottom: 0.2px solid var(--L_Grey, #89939e);
  background: var(--White, #fff);
  /* display: inline-flex; */
  display: flex;
  align-items: center;
  gap: 80px;
  /* padding: 80px 1381px 80px 140px; */
  padding: 80px 10px;
`;

const SecondText = styled.div`
  color: var(--Grey, #717171);
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */

  &:hover {
    color: var(--color-main2);
    cursor: pointer;
  }
`;

const VolContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const DataContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 3fr);
  /* width: 1696px; */
  width: 100%;
  gap: 43px 32px;
  padding: 20px;
  /* border: 1px solid red; */
  width: auto;
`;

const DataBox = styled.div`
  display: flex;
  justify-content: center;
  /* width: 544px; */
  padding: 32px 10px;
  height: 434px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 2px solid var(--Grey-blue, #abbed1);
  background: var(--White, #fff);
`;

const DataTag = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 40px;
  border: 1px solid var(--Sub-color, #e0eaf3);
  //color: var(--Main-color2, #498dfd);

  /* 본문2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  padding: 5px 20px;

  margin: 4px 0px;
`;

const DataTitle = styled.div`
  color: var(--wireframe-80, #333);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */

  margin: 4px 0px;
`;

const DescriptBox = styled.div`
  display: flex;
  width: 562px;
  padding: 10px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: var(--wireframe-80, #333);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 39px */
  }
`;

const JoinButton = styled.div`
  display: flex;
  width: 400px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 60px;
  background: var(--Main-color2, #498dfd);

  color: var(--White, #fff);
  text-align: center;

  /* Headline 2 */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */

  margin: 20px 0px;
`;

export default VolunteerPage;
