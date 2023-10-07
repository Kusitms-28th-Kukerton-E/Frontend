import { useEffect, useState } from 'react';
import History from './History';
import MyInfo from './myInfo';
import Review from './review';
import Temperature from './temperature';
import { UserDataType } from '@/types';
import axios from 'axios';
import styled from 'styled-components';
import ChildReview from './childReview';

const VolunteerMyPage = () => {
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
    console.log('myInfo');
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `https://api.yeongjin.site/api/volunteer/152`,
        );
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
      {userData && <MyInfo userData={userData} title="내 정보" />}
      {userData && (
        <Temperature
          userData={userData}
          score1="시간 약속을 잘 지켜요 ⏰"
          score2="친화력이 좋아요 🎵 "
          score3="수업 준비가 철저해요 🔥"
        />
      )}

      <History />
      <Review />
      <ChildReview
        text1="선생님, 편지가 도착했어요!"
        text2="함께했던 아이들이 보낸 소중한 메시지를 확인해 보세요."
        configButton="확인하기"
      />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px 0px;
`;

export default VolunteerMyPage;
