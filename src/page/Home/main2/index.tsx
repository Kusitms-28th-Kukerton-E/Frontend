import styled from 'styled-components';
import TopCate from '../TopCate';

const Main2 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <VolContainer>
        {' '}
        <TopCate title="공고에 올린 자원봉사" />
      </VolContainer>
    </div>
  );
};

const VolContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export default Main2;
