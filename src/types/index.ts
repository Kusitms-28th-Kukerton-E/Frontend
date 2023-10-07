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
