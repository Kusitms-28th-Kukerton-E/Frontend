import { useEffect, useState } from 'react';
import MyInfo from './myInfo';
import Review from './review';
import Temperature from './temperature';
import { UserDataType } from '@/types';
import axios from 'axios';

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
    <>
      {userData && <MyInfo userData={userData} title="내 정보" />}
      {userData && (
        <Temperature
          userData={userData}
          score1="시간 약속을 잘 지켜요 ⏰"
          score2="친화력이 좋아요 🎵 "
          score3="수업 준비가 철저해요 🔥"
        />
      )}
      <Review />
    </>
  );
};

export default VolunteerMyPage;
