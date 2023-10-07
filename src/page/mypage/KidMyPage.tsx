import { useEffect, useState } from 'react';
import ChildMyInfo from './child/childMyInfo';
import { UserDataType } from '@/types';
import axios from 'axios';
import ChildReview from './childReview';
import styled from 'styled-components';
import ChildHistory from './child/childHistory';

const KidMyPage = () => {
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`https://api.yeongjin.site/api/kid/102`);
        console.log('res.data:', res.data);
        setUserData(res.data);
      } catch (err) {
        console.error('err', err);
      }
    };
    getUserData();
  }, []);

  return (
    <Container>
      {userData && <ChildMyInfo userData={userData} />}
      <ChildHistory />
      <ChildReview
        text1="선생님과 함께한 시간은 즐거웠나요?"
        text2="선생님께 감사하는 마음으로 한 마디 감사 편지를 보내 주세요."
        configButton="편지쓰기"
      />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
`;

export default KidMyPage;
