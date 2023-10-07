export interface LoginDataType {
  id: string;
  password: string;
}

// main page - organization

export interface ChildType {
  name: string;
  region: string;
  organization: string;
}
export interface ChildrenDataType {
  child: ChildType;
  description: string;
}

export interface ArticleDataType {
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  orga: string;
  hour: number;
}

export interface UserDataType {
  name: string;
  age: number;
  sex: string;
  place: string;
  school: string;
  major: string;
  vmsId1: string;
  vmsId2: string;
  score1: number;
  score2: number;
  score3: number;
}
