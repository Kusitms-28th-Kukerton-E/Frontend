import { MainButton2 } from '@/components/button';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import styled from 'styled-components';

const History = () => {
  return (
    <Container>
      <div>봉사내역</div>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>날짜</th>
            <th>봉사명</th>
            <th>봉사기관</th>
            <th>시간</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="10%">1</td>
            <td width="10%">2023. 9. 8</td>
            <td width="30%">초등학생 교과 학습 지도</td>
            <td width="25%">나눔지역아동센터</td>
            <td width="10%">2</td>
            <td width="5%"></td>
            <td width="10%">
              <MainButton2>
                <span>리뷰쓰기</span>
              </MainButton2>
            </td>
          </tr>
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
  width: 60%;
`;

const Table = styled.table`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;

  th {
    padding: 10px 0px;
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
    font-size: 24px;
  }
`;

const Page = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 30px;
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    padding: 0px 15px;
  }
`;

export default History;
