import ImgTitle from '@/assets/register/register_header.png';
import ImgBody from '@/assets/register/register_body.png';
import styled from 'styled-components';

const Register = () => {
  return (
    <Container>
      <img alt="title" src={ImgTitle} />
      <img alt="body" src={ImgBody} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 140vw;
  }
`;

export default Register;
