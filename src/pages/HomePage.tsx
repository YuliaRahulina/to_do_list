import React from 'react'
import styled from 'styled-components';

import AddItem from '../components/AddItem';
import Label from '../components/Label';
import ToDo from '../components/ToDo';
import Completed from '../components/Completed';

const HomePageStyled = styled.p`
    width: 300px;
    height: 500px;
    border: 1px solid wheat;
    background-color: wheat;
    margin: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const MainLabel = styled.h1`
    font-size: 25px;
    color: #fe27fe;
    text-align: center;
`;

// const isDone = true
// const taskName = "asdasd"

// const myObject = {
//     isDone: true,
//     taskName: "my first task",
//     date: "29.12.2022",
//     randomValue: null
// }

// const test = [
//     isDone,
//     taskName,
//     myObject.date // 29.12.2022
// ]

const defaultTodoList = [
    // {
    //     isDone: true,
    //     taskName: "my first task",
    //     date: "29.12.2022"
    // },
    // {
    //     isDone: true,
    //     taskName: "поїхати в бар",
    //     date: "29.12.2022"
    // },
    // {
    //     isDone: true,
    //     taskName: "випити чаю",
    //     date: "29.12.2022"
    // },
]

function HomePage() {
    const [todoList, updateTodoList] = React.useState(defaultTodoList);

    // const [counter, setCounter] = React.useState(10);

    // function decrement() {
    //     const result = counter - 1
    //     setCounter(result)
    // }

    function addToDo (todo) {
        // updateTodoList()
        const newTodoList = [...todoList, { isDone: false, taskName: todo, data: "03.01.23" }]
        updateTodoList(newTodoList)
    }


    return (
        <HomePageStyled>
            <MainLabel>To do list</MainLabel>
            <AddItem onAdd={addToDo} icon="+" />
            <Label>TO DO</Label>
            {/* <button onClick={decrement}>do decrement</button> */}
            {/* <p>my counter: {counter}</p> */}
            {/* <ToDo /> */}
            {todoList.map(item => {
                return (
                    <ToDo taskName={item.taskName} />
                )
            })}
            <Label>COMPLETED</Label>
            <Completed />
        </HomePageStyled>
    )
}

// function HomePage2() {
//     return (
//         <p class="HomePageStyled">
//             <h1 class="Label">Home Page</h1>
//             <NewComponent />
//         </p>
//     )
// }

export default HomePage;
