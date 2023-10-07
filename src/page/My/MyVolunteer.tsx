import styled from 'styled-components';
import MyHeader from './MyHeader';
import MyInfo from './MyInfo';

const MyVolunteer = () => {
  return (
    <Container>
      <MyHeader />
      <MyInfo />
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 140px;
`;

export default MyVolunteer;
