import styled from 'styled-components';

const SubTitle = ({ title }: { title: string }) => {
  return (
    <>
      <SubTitleStyled>{title}</SubTitleStyled>
    </>
  );
};

const SubTitleStyled = styled.div`
  color: var(--D_Grey, #4d4d4d);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  margin: 50px 0px;
`;

export default SubTitle;
