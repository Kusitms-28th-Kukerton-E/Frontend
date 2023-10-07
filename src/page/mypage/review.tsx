import styled from 'styled-components';
import SubTitle from './subTitle';

const Review = () => {
  const reviewData = [
    {
      category: '진로',
      title: '청소년 진로 특강',
      place: '[모집기관] 동대문구 청소년 상담복지센터',
      date: '[봉사기간] 2023-09-26 ~ 2023-11-11',
    },
    {
      category: '교과',
      title: '초등학생 교과 학습 지도',
      place: '[모집기관] 서대문구 아동 교육센터',
      date: '[봉사기간] 2023-09-11 ~ 2023-10-19',
    },
    {
      category: '기타',
      title: '어린이 캠프 수업 보조 및 뒷정리',
      place: '[모집기관] 주식회사 아름교육',
      date: '[봉사기간] 2023-10-05 ~ 2023-10-08',
    },
  ];
  return (
    <InfoContainer>
      <SubTitle title="내가 남긴 리뷰" />
      <DataContainer>
        <>
          {reviewData &&
            reviewData.map((item, index) => {
              return (
                <DataBox key={index}>
                  <DataTag>{item.category}</DataTag>
                  <DataTitle>{item.title}</DataTitle>
                  <DescriptBox>
                    <p>[모집기관] 동대문구 청소년 상담복지센터</p>
                    <p>[봉사기간] 2023-10-11 ~ 2023-11-11</p>
                  </DescriptBox>
                  <JoinButton>남긴 리뷰 보기</JoinButton>
                </DataBox>
              );
            })}
        </>
      </DataContainer>
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
  color: var(--Main-color2, #498dfd);

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

export default Review;
