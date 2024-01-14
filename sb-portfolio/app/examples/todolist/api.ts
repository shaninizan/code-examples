export type ToDo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const getTodosFromApi = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/todos'
    );
    const results: ToDo[] = await response.json();
    return results;
  } catch (e) {
    console.error(e);
  }
};
