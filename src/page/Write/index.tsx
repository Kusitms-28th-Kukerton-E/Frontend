import { useEffect, useState } from 'react';
import MyInfo from '../mypage/myInfo';
import Temperature from './Temperature';
import axios from 'axios';
import { UserDataType } from '@/types';
import styled from 'styled-components';

const Write = () => {
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
      {userData && <MyInfo userData={userData} title="봉사자 정보" />}
      <Temperature />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
`;

export default Write;
