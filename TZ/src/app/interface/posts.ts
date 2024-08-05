export interface Post {
  id: string;
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  foodValue: {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
  cookingSteps: {
    title: string;
    description: string;
  }[];
  ingredients: {
    title: string;
    description: string;
  }[];
  author: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    middleName: string;
  };
  comments: Comments[];
  createdOn: string;
  updatedOn: string;
}

export interface Comments {
  id: string;
  postId: string;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
  text: string;
  createdOn: string;
  updatedOn: string;
}

export interface Posts {
  id: string;
  body: string;
  title: string;
  tags: [string];
  image: string;
  timeCooking: number;
  author: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    middleName: string;
  };
  createdOn: string;
  updatedOn: string;
}

export interface PostCreate {
  body: string;
  title: string;
  tags: [string];
  image: string;
  timeCooking: number;
  foodValue: {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  };
  cookingSteps: [
    {
      title: string;
      description: string;
    }
  ];
  ingredients: [
    {
      title: string;
      description: string;
    }
  ];
}
