import styled from 'styled-components';

export const MainButton = styled.button`
  width: 700px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 20px;
  border: none;
  background: var(--color-main2);
  color: var(--color-white);
`;

export const MainButton2 = styled.button`
  border-radius: 60px;
  border: none;
  background: var(--color-main2);
  color: var(--color-white);
  padding: 20px 48px;
  width: 100%;
`;

export const SubButton = styled.button`
  width: 700px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 20px;
  border: none;
  background: var(--color-sub1);
  color: var(--color-gray1);
`;

export const SubButton2 = styled.button`
  border-radius: 60px;
  border: 1px solid;
  border-color: var(--color-sub4);
  background: var(--color-white);
  color: var(--color-sub4);
  padding: 20px 48px;
  width: 100%;
`;

export const CancelButton = styled.button`
  width: 700px;
  height: 112px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  background: var(--gray1, #f2f4f6);
`;

export const LikeButton = styled.button`
  color: var(--color-main2);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  width: 98px;
  border: 1px solid;
  border-color: var(--color-sub1);
  border-radius: 40px;
  padding: 10px 0px;
  margin: 10px 0px;
  background-color: var(--color-white);
`;
