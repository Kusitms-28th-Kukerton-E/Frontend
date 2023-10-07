import { useEffect, useState } from 'react';
import History from './History';
import MyInfo from './myInfo';
import Review from './review';
import Temperature from './temperature';
import { UserDataType } from '@/types';
import axios from 'axios';
import styled from 'styled-components';

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
      {userData && <Temperature userData={userData} />}

      <History />
      <Review />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px 0px;
`;

export default VolunteerMyPage;
