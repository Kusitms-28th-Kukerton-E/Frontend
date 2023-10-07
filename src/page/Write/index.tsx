import MyInfo from '../mypage/myInfo';
import SubTitle from '../mypage/subTitle';
import Temperature from './Temperature';

const Write = () => {
  return (
    <div>
      <SubTitle title="봉사자 정보" />
      <MyInfo />
      <Temperature />
    </div>
  );
};

export default Write;
