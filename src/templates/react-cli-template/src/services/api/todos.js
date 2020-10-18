const todos = [
  {
    id: 0,
    title: 'Test 1',
    completed: false,
  },
  {
    id: 1,
    title: 'Test 2',
    completed: true,
  },
  {
    id: 2,
    title: 'Test 3',
    completed: true,
  },
];


export const fetchTodos = () => new Promise((resolve) => setTimeout(() => resolve(todos), 1500));