import { useState } from 'react';
import styled from 'styled-components';
import TestA from './main2/test';
import TestB from './main2/testb';

const TopCate = ({ title }: { title: string }) => {
  const [ing, setIng] = useState(false);
  const [end, setEnd] = useState(false);

  const handleIng = () => {
    setIng(true);
    setEnd(false);
  };

  const handleEnd = () => {
    setIng(false);
    setEnd(true);
  };

  return (
    <CategoryContainer>
      {' '}
      <CategoryTitle>{title}</CategoryTitle>
      <SecondCategory>
        {/* <SecondText style={{ color: 'var(--color-main2)' }}>모집중</SecondText> */}
        <SecondText onClick={handleIng}>모집중</SecondText>
        <SecondText>모집완료</SecondText>

        <SecondText onClick={handleEnd}>활동 종료</SecondText>
      </SecondCategory>
      <SubBanner>
        <p>청소년 기초학습지도 자원봉사 </p>
        <p>▽</p>
      </SubBanner>
      {ing && <TestA />}
      {end && <TestB />}
    </CategoryContainer>
  );
};

const SubBanner = styled.div`
  display: flex;
  /* border: 0.4px solid var(--L_Grey, #7498be); */
  background: var(--Main-color2, #498dfd);
  gap: 60px;
  padding: 40px;

  p {
    color: var(--White, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 48px */
  }
`;

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

export default TopCate;
