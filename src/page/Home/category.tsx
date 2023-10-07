import { useState } from 'react';
import styled from 'styled-components';

const Category = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tagData = [
    {
      id: 1,
      tag: '전체',
    },
    {
      id: 2,
      tag: '진로',
    },
    {
      id: 3,
      tag: '교과',
    },
    {
      id: 4,
      tag: '체험',
    },
    {
      id: 5,
      tag: '기타',
    },
  ];

  return (
    <CategoryContainer>
      <TagContainer>
        {tagData &&
          tagData.map((item, index) => {
            return (
              <TagButton
                key={index}
                $isSelected={selectedTag === item.tag}
                onClick={() => setSelectedTag(item.tag)}
              >
                {item.tag}
              </TagButton>
            );
          })}
      </TagContainer>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin: 100px 0px;
  /* padding: 100px 40px; */
  /* padding: 100px 1381px 35px 140px; */
`;

const TagButton = styled.div<{ $isSelected: boolean }>`
  display: flex;
  width: 140px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 40px;
  background: var(--color-main2);

  //text
  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */

  // 다른 스타일...
  background: ${props =>
    props.$isSelected ? 'var(--color-main2)' : 'var(--White, #fff)'};

  color: ${props => (props.$isSelected ? 'var(--White, #fff)' : '#4D4D4D')};

  border: ${props =>
    props.$isSelected ? 'none' : '0.8px solid var(--Grey-blue, #ABBED1)'};

  cursor: pointer;
`;

export default Category;
