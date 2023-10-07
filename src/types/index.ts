export interface LoginDataType {
  id: string;
  password: string;
}

// main page - organization

export interface ChildType {
  name: string;
  region: string;
  organization: string;
  image: string;
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
