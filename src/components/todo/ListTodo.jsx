import React, { useState } from 'react';
import './style.css'
import dayjs from 'dayjs';

/**
 * Вывод списка Todo
 * @param {Object} todo Список
 * @param {function} setTodo Функция для обновления списка Todo
 * @returns {React.Component} 
 */

export default function ListTodo({ todo, setTodo }) {
    const formatDate = 'DD.MM.YYYY';
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    let currentDate = dayjs().add(1, 'day').format(formatDate);
    const [dateExpire, setDateExpire] = useState(currentDate)


    /**
     * Удаляет Todo по id
     * @param {number} id Уникальный идентификатор todo (uuid)
     */

    function DeleteTodo(id) {
        let newTodos = todo.filter(item => item.id != id)
        setTodo(newTodos)
    }

    /**
     * Переключает статус у указанной по id Todo
     * @param {number} id Уникальный идентификатор todo (uuid)
     */

    function statusTodo(id) {
        let newTodos = todo.filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodos)
    }
    /**
     * Редактирует todo по указанному __id__
     * @param {number} id Уникальный идентификатор todo (uuid)
     * @param {string} title Заголовок Todo
     * @param {string} lorem Описание Todo
     * @param {string} dateExpire Дата завершения Todo
     */
    function editTodo(id, title, lorem, dateExpire) {
        setEdit(id);
        setValue(title);
        setText(lorem);
        setDateExpire(dateExpire)
    }
    /**
     * Сохоранение Todo в массив __todo__
     * @param {number} id Уникальный идентификатор todo (uuid)
     * 
     */
    function saveTodo(id) {
        let newTodo = todo.map(item => {
            if (item.id == id) {
                item.title = value;
                item.lorem = text;
                item.dateExpire = dateExpire;
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        {
                            edit == item.id ?
                                <div>
                                    <input className='ListTodo_button_input' placeholder='Введите заголовок' value={value} onChange={(e) => setValue(e.target.value)} />
                                    <input className='ListTodo_button_input' placeholder='Текст' value={text} onChange={(e) => setText(e.target.value)} />
                                    <input type='date'
                                        className='ListTodo_button_date'
                                        placeholder='Дата завершения'
                                        value={dateExpire}
                                        onChange={(i) => setDateExpire(i.target.value)}
                                    />
                                </div>
                                :
                                <div></div>
                        }

                        {
                            edit == item.id ?
                                <div className='ListTodo_button_block'>
                                    <button onClick={() => saveTodo(item.id)}>Сохранить</button>
                                </div>
                                :
                                <div className='ListTodo_button_block'>
                                    <button className='ListTodo_button' onClick={() => DeleteTodo(item.id)}>Удалить</button>
                                    <button className='ListTodo_button' onClick={() => editTodo(item.id, item.title, item.lorem)}>Редактировать</button>
                                    <button onClick={() => statusTodo(item.id)} className='ListTodo_button_good'>
                                        {
                                            item.status ?
                                                <div className='ListTodo_button_goodbed'> Не сделано </div>
                                                :
                                                <div className='ListTodo_button_goodgood'> Сделано </div>
                                        }

                                    </button>
                                    <input className='ListTodo_input' type="file" name='file' />
                                </div>
                        }

                        <div className='ListTodo_text_title'>
                            {item.title}
                        </div>
                        <div className='ListTodo_text'>
                            {item.lorem}
                            <div className='Dater_css'>
                                <div style={{ color: dayjs(item.dateExpire, formatDate).diff(dayjs()) < 0 ? 'red' : 'black' }}>{dayjs(item.dateExpire).format(formatDate)}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
