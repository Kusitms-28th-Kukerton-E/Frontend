// import { UserDataType } from '@/types';
import { useEffect, useState } from 'react';
import { UserDataType } from '@/types';
import axios from 'axios';
import OrgaMyInfo from './OrgaMyInfo';
import Temperature from './temperature';
import OrgaHistory from './OrgaHistory';
// import Temperature from './temperature';

const OrganizationMyPage = () => {
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `https://api.yeongjin.site/api/organization/153`,
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
      {userData && <OrgaMyInfo userData={userData} />}
      {userData && <Temperature userData={userData} />}
      <OrgaHistory />
    </>
  );
};

export default OrganizationMyPage;
