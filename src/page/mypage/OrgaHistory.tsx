import { ArticleDataType } from '@/types';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubTitle from './subTitle';

const OrgaHistory = () => {
  const [historyData, setHistoryData] = useState<ArticleDataType[]>();

  useEffect(() => {
    console.log('rendering');
    const getHistory = async () => {
      try {
        const res = await axios.get('https://api.yeongjin.site/api/articles');
        console.log('res.data:', res.data);
        setHistoryData(res.data.data);
        console.log('historyData:', historyData);
      } catch (err) {
        console.error('err:', err);
      }
    };
    getHistory();
  }, []);

  return (
    <Container>
      <SubTitle title="공고 목록"></SubTitle>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>날짜</th>
            <th>봉사명</th>
            <th>봉사자 수/지원자 수</th>
            <th>상태</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {historyData &&
            historyData.map((item, index) => {
              return (
                <tr key={index}>
                  <td width="10%">{item.id}</td>
                  <td width="10%">{item.createdAt}</td>
                  <td width="30%">{item.title}</td>
                  <td width="25%">{item.people}</td>
                  <td width="10%">{item.st}</td>
                  <td width="5%"></td>
                  <td width="10%">
                    <MainButton>
                      <span>상세보기</span>
                    </MainButton>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Page>
        <BiSolidLeftArrow color="#F2F2F2" />
        <span>{`1 / 5`}</span>
        <BiSolidRightArrow />
      </Page>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

const Table = styled.table`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;

  th {
    padding: 40px 0px;
    font-weight: 600;
  }

  tbody {
    tr {
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--color-gray-blue);

      td {
        padding: 22px 0px;
      }
    }
  }

  span {
    font-family: Pretendard;
    font-weight: 500;
    font-size: 30px;
  }
`;

const Page = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 30px;
  padding: 60px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    padding: 0px 15px;
  }
`;

export const MainButton = styled.button`
  border-radius: 60px;
  border: none;
  background: var(--color-main2);
  color: var(--color-white);
  padding: 20px 48px;
`;

export default OrgaHistory;
