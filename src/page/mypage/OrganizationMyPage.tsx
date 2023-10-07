// import { UserDataType } from '@/types';
import { useEffect, useState } from 'react';
import { UserDataType } from '@/types';
import axios from 'axios';
import OrgaMyInfo from './OrgaMyInfo';
import styled from 'styled-components';
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
    <Container>
      {userData && <OrgaMyInfo userData={userData} />}
      {userData && (
        <Temperature
          userData={userData}
          score1="사전 안내가 충분해요 👍"
          score2="프로그램 구성이 체계적이에요 📚 "
          score3="담당자분이 친절해요 😀 "
        />
      )}
      <OrgaHistory />
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
`;
export default OrganizationMyPage;
