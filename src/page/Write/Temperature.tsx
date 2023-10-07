import styled from 'styled-components';
import SubTitle from '../mypage/subTitle';

const tempList = [
  '시간 약속을 잘 지켜요 ⏰',
  '친화력이 좋아요 🎵',
  '성실해요✏️',
  '꼼꼼해요 ✅',
  '연락이 원활해요 📞',
  '수업 준비가 철저해요 🔥',
  '꾸준히 활동해요 💕',
  '용모가 단정해요 ✨',
];

const Temperature = () => {
  return (
    <Container>
      <SubTitle title="온도" />
      <ButtonContainer>
        {tempList.map(temp => (
          <Button>{temp}</Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.2;
  padding: 29px 54px;
  background-color: var(--color-white);
  border: 3px solid;
  border-color: var(--color-gray-blue);
  border-radius: 60px;
`;

export default Temperature;
