'use client';
import React, { useState } from 'react';

/**
 * ページ
 */
const TodoPage = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'サイト制作',
      description: 'サイトをつくります',
    },
  ]);

  const [addTask, setAddTask] = useState({
    title: '',
    description: '',
  });

  const [count, setCount] = useState(0);

  const handleClickCountButton = () => {
    setCount(count + 1);
    console.log(count);
    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleChangeTitle = (value: string) => {
    setAddTask((prev) => {
      return {
        ...prev,
        title: value,
      };
    });
  };

  const handleChangeDescription = (value: string) => {
    setAddTask((prev) => {
      return {
        ...prev,
        description: value,
      };
    });
  };

  // [
  //   {
  //     id: 1,
  //     title: 'サイト制作',
  //     description: 'サイトをつくります',
  //   },
  // ]

  const handleClickButton = () => {
    setTodoList((prev) => {
      const newId = prev[prev.length - 1].id + 1;
      return [...prev, { id: newId, ...addTask }];
    });

    setAddTask({
      title: '',
      description: '',
    });
  };

  const sample = {
    name: 'iwamura',
    email: 'iwamura@gamil.com',
    address: 'hujisawa',
  };

  const array = [
    {
      name: '',
    },
    {
      name: '',
    },
  ];

  console.log(array[0]);

  const newArray = [...array, { name: '' }];

  sample.name = 'taguchi';

  console.log(sample.name);

  const newObj = { ...sample };

  for (let i; i === 4; i++) {
    if (i === 3) continue;

    // 何らかの処理
  }

  return (
    <>
      <div>TodoPage</div>

      <input type="checkbox" />

      <div>{count}</div>
      <button onClick={handleClickCountButton}>+</button>
      <button onClick={() => setCount(0)}>reset</button>

      <div>
        <label htmlFor="title">title</label>
        <input
          value={addTask.title}
          type="text"
          className="border"
          onChange={(e) => handleChangeTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          value={addTask.description}
          name="description"
          type="text"
          className="border"
          onChange={(e) => handleChangeDescription(e.target.value)}
        />
      </div>
      <button onClick={handleClickButton} className="border">
        追加
      </button>

      <div className="grid grid-cols-3">
        {todoList.map((todo) => (
          <div key={todo.id}>
            <div className="p-2 border">
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoPage;
