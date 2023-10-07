import MyInfoData from './MyInfoData';
import MyTitle from './MyTitle';

const volunteerList = [
  { title: '이름', body: '김준석' },
  { title: '성별', body: '남성' },
  { title: '나이', body: '25' },
  { title: '지역', body: '서울' },
  { title: '학교', body: '한국외국어대학교' },
  { title: '전공', body: '영어교육과' },
];

const MyInfo = () => {
  return (
    <div>
      <MyTitle title="내 정보" />
      <MyInfoData data={volunteerList} />
    </div>
  );
};

export default MyInfo;
