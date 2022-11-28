import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import './style.css'

/**
 * Форма с добавлением новой Todo
 * @param {Object} todo Список
 * @param {function} setTodo Функция для обновления списка Todo
 * @returns {React.Component} 
 */

export default function Todo({ todo, setTodo }) {
    const formatDate = 'DD.MM.YYYY';
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    let currentDate = dayjs().add(1, 'day').format(formatDate);
    const [dateExpire, setDateExpire] = useState(currentDate)


    /**
     *  Добавляет новый Todo в список Todo с текущей формы
     */

    function SaveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                lorem: text,
                status: true,
                dateExpire: dateExpire,
            }]
        )
        setValue('')
        setText('')
    }

    return (
        <div className='Todo_block'>
            <input className='Todo_button_input' placeholder='Введите заголовок' value={value} onChange={(e) => setValue(e.target.value)} />
            <input className='Todo_button_text' placeholder='Введите текст' value={text} onChange={(i) => setText(i.target.value)} />
            <input type='date'
                className='Todo_button_date'
                placeholder='Дата завершения'
                value={dateExpire}
                onChange={(i) => setDateExpire(i.target.value)}
            />
            <button className='AddtodoSave' onClick={SaveTodo}>Сохранить</button>
        </div >
    )
}
