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
}

export interface VolunteerType {
  name: string;
  image: string;
  age: number;
  major: string;
  place: string;
  sex: string;
  school: string;
}
