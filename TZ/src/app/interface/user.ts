export interface Users {
  username: string,
  role: string,
  firstName: string,
  lastName: string,
  middleName: string,
  avatar: string,
  createdOn: string,
  updatedOn: string,
  lastEntry: string,
  isActive: boolean,
  id: string
}

export interface User {
  username: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  userAgent: string;
  createdOn: string;
  updatedOn: string;
  lastEntry: string;
  isActive: boolean;
  posts: Post[];
  comments: [
    {
      id: string;
      postId: string;
      text: string;
      createdOn: string;
      updatedOn: string;
    }
  ];
  id: string;
}

export interface RegisterUser {
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  middleName: string
}

export interface Post {
  id: string;
  body: string;
  title: string;
  image: string;
  createdOn: string;
  updatedOn: string;
}
