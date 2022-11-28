import React, { useState } from 'react'
import Header from './components/header/Header';
import Todo from './components/todo/AddTodo';
import ListTodo from './components/todo/ListTodo';


/**
 * 
 * @returns {React.Component} 
 */
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'Задание ToDo№1',
      lorem: '1)Cоздание 2) Просмотр 3) Редактирование 4) Удаление задачи 5) Задание выполнено или нет',
      status: false,
      dateExpire: '2021-05-11'
    },
    {
      id: 2,
      title: 'Задание ToDo№2',
      lorem: '6)возможность прикрепления файлов к записи',
      status: true,
      dateExpire: '2022-05-11'
    },
    {
      id: 3,
      title: 'Задание ToDo№3',
      lorem: '7)Поля в задаче: заголовок, описание, дата завершения, прикрепленные файлы',
      status: false,
      dateExpire: '2024-05-11'
    },
    {
      id: 4,
      title: 'Задание ToDo№3',
      lorem: '8)Если дата завершения истекла или задача выполнена, это должно быть визуально отмечено',
      status: true,
      dateExpire: '2023-05-11'
    }
  ])
  return (
    <div className="App">
      <Header />
      <Todo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
