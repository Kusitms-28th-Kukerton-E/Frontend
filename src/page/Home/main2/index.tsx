import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopCate from '../TopCate';
import { getVolunteerList } from '@/api';
import Volunteer from '../Volunteer';
import { VolunteerType } from '@/types';

const Main2 = () => {
  const [volunteerList, setVolunteerList] = useState<VolunteerType[]>([]);
  const handleGetVolunteerList = async () => {
    getVolunteerList().then(data => setVolunteerList(data.data.data));
  };
  const [ing, setIng] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    handleGetVolunteerList();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <VolContainer>
        {' '}
        <TopCate
          title="공고에 올린 자원봉사"
          ing={ing}
          setIng={setIng}
          end={end}
          setEnd={setEnd}
        />
      </VolContainer>
      <VolListContainer>
        {volunteerList &&
          volunteerList.map(item => (
            <Volunteer mode={ing ? 'ver1' : 'ver2'} item={item} />
          ))}
      </VolListContainer>
    </div>
  );
};

const VolContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const VolListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
  padding: 100px 0px;
`;

export default Main2;
