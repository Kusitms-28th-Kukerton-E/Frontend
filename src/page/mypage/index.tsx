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
      {userData && <MyInfo userData={userData} />}
      {userData && <Temperature userData={userData} />}
      <Review />
    </>
  );
};

export default VolunteerMyPage;
