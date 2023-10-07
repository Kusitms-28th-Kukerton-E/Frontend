import { UserDataType } from '@/types';
import History from './History';
import Review from './review';
import Temperature from './temperature';

const OrganizationMyPage = () => {
  return (
    <>
      {/* <Temperature /> */}
      <Review />
      <History />
    </>
  );
};

export default OrganizationMyPage;
