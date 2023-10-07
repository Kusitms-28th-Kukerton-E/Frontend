import { Hl2 } from '@/style/common';
import styled from 'styled-components';

const MyTitle = ({ title }: { title: string }) => {
  return (
    <TitleContainer>
      <Hl2>{title}</Hl2>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 43px;
`;

export default MyTitle;
