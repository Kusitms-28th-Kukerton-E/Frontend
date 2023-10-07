import styled from 'styled-components';
import SubTitle from './subTitle';

const ChildReview = ({
  configButton,
  text1,
  text2,
}: {
  configButton: string;
  text1: string;
  text2: string;
}) => {
  return (
    <InfoContainer>
      {' '}
      <SubTitle title="아동 리뷰 보기" />
      <ChildBox>
        <LeftText>
          <div>{text1}</div>
          <p>{text2}</p>
        </LeftText>
        <RightText>{configButton}</RightText>
      </ChildBox>
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

const ChildBox = styled.div`
  border-radius: 50px;
  border: 2px solid var(--Grey-blue, #abbed1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px;
`;

const LeftText = styled.div`
  color: var(--Grey, #717171);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */

  display: flex;
  flex-direction: column;
  gap: 18px;

  p {
    font-size: 26px;
  }
`;

const RightText = styled.div`
  border-radius: 60px;
  border: 2px solid var(--Main-color2, #498dfd);
  background: var(--White, #fff);
  display: flex;
  padding: 26px 74px;
  justify-content: center;
  align-items: center;

  //
  color: var(--Main-color2, #498dfd);
  text-align: center;

  /* Headline 2 */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */

  cursor: pointer;
`;

export default ChildReview;
