import styled from 'styled-components';

const Teacher = ({ title }: { title: string }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <VolContainer>
        <CategoryContainer>
          {' '}
          <CategoryTitle>{title}</CategoryTitle>
        </CategoryContainer>
      </VolContainer>
    </div>
  );
};

const VolContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 88%;
`;

const CategoryContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
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

export default Teacher;
