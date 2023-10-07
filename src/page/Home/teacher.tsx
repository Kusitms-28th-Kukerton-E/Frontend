import { getVolunteerList } from '@/api';
import { VolunteerType } from '@/types';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Volunteer from './Volunteer';

const Teacher = ({ title }: { title: string }) => {
  const [volunteerList, setVolunteerList] = useState<VolunteerType[]>([]);
  const handleGetVolunteerList = async () => {
    getVolunteerList().then(data => setVolunteerList(data.data.data));
  };

  useEffect(() => {
    handleGetVolunteerList();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '150px',
      }}
    >
      <VolContainer>
        <CategoryContainer>
          {' '}
          <CategoryTitle>{title}</CategoryTitle>
        </CategoryContainer>
      </VolContainer>
      <VolListContainer>
        {volunteerList &&
          volunteerList.map(item => (
            <Volunteer mode="ver3" item={item} key={item.image} />
          ))}
      </VolListContainer>
    </div>
  );
};

const VolContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 88%;
`;

const CategoryContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  flex-shrink: 0;
`;

const CategoryTitle = styled.div`
  color: #000;

  /* Headline 1 */
  font-family: Pretendard;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 64.8px */

  display: flex;
  height: 200px;
  padding: 100px 1381px 35px 140px;
  align-items: center;
`;

const VolListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
`;

export default Teacher;
