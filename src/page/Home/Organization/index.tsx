import { Hl1 } from '@/style/common';
import styled from 'styled-components';
import Children from './Children';
import { ChildrenDataType } from '@/types';

const childrenDataList: ChildrenDataType[] = [
  {
    child: {
      name: '김서영(11, 여성)',
      region: '서울특별시 구로구',
      organization: '은하초등학교 4학년',
    },
    description:
      '베트남계 다문화 가정. 베트남어와 한국어를 모두 구사하며, 국어·영어 성적이 좋음.',
  },
  {
    child: {
      name: '김기범(16, 남성)',
      region: '서울특별시 금천구',
      organization: '혜성중학교 3학년',
    },
    description:
      '저소득층 가정. 사교육을 일체 받지 않아 대부분의 과목 성적이 저조함. 국영수 중심으로 교과 학습 1대1 멘토링이 필요하지만 학습 동기 부여가 낮아적극적인 지도를 필요로 함. 스포츠 체험 활동에 관심이 많음.',
  },
];

const OrganizationPage = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Hl1>우리 센터 아동</Hl1>
      </TitleContainer>
      <BodyContainer>
        {childrenDataList.map(childItem => (
          <Children childData={childItem} />
        ))}
      </BodyContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 0px 112px;
  background-color: blue;
`;

const TitleContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 15px;
  padding-left: 28px;
`;

const BodyContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
`;

export default OrganizationPage;
