import ChildReview from './childReview';
import MyInfo from './myInfo';
import Review from './review';
import Temperature from './temperature';

const MyPage = () => {
  return (
    <>
      <MyInfo />
      <Temperature />
      <Review />
      <ChildReview />
    </>
  );
};

export default MyPage;
