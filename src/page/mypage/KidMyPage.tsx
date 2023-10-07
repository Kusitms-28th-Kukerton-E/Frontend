import { useEffect, useState } from 'react';
import History from './History';
import ChildMyInfo from './child/childMyInfo';
import { UserDataType } from '@/types';
import axios from 'axios';
import ChildReview from './childReview';

const KidMyPage = () => {
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
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
      {userData && <ChildMyInfo userData={userData} />}
      <History />
      <ChildReview />
    </>
  );
};

export default KidMyPage;
