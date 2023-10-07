import styled from 'styled-components';
import SubTitle from './subTitle';

const Temperature = () => {
  return (
    <InfoContainer>
      <SubTitle title="온도" />
      <TempContainer>
        <TempLayout>
          <TempTitle>hihi</TempTitle>
          <TempContent>slsl</TempContent>
        </TempLayout>
        <TempLayout>
          <TempTitle>hihi</TempTitle>
          <TempContent>slsl</TempContent>
        </TempLayout>
        <TempLayout>
          <TempTitle>hihi</TempTitle>
          <TempContent>slsl</TempContent>
        </TempLayout>
      </TempContainer>
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

const TempContainer = styled.div`
  display: flex;
  gap: 55px;
  width: 100%;
`;

const TempLayout = styled.div`
  display: flex;
  width: 30%;
  padding: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;
  //
  border-radius: 40px;
  border: 3px solid var(--Grey-blue, #abbed1);
  background: var(--White, #fff);
`;

const TempTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
`;

const TempContent = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding: 67px 0px 68px 0px;
  justify-content: center;
  align-items: center;
  //
  border-radius: 35px;
  background: var(--Sub-color, #e0eaf3);

  //
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 64.8px */
`;

export default Temperature;
