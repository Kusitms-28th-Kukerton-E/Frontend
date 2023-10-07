// import { UserDataType } from '@/types';
import { useEffect, useState } from 'react';
import History from './History';
import Review from './review';
import { UserDataType } from '@/types';
import axios from 'axios';
import OrgaMyInfo from './OrgaMyInfo';
import styled from 'styled-components';
// import Temperature from './temperature';

const OrganizationMyPage = () => {
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
    <Container>
      {userData && <OrgaMyInfo userData={userData} />}
      {/* <Temperature /> */}
      <Review />
      <History />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
`;
export default OrganizationMyPage;
