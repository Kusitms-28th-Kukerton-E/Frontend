import styled from 'styled-components';

const Teacher = ({ title }: { title: string }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;

  flex-shrink: 0;
`;

const CategoryTitle = styled.div`
  color: #000;

  /* Headline 1 */
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 64.8px */

  display: flex;
  width: 1920px;
  height: 200px;
  padding: 100px 1381px 35px 140px;
  align-items: center;
`;
