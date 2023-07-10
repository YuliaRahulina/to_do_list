import React from 'react';
import styled from 'styled-components';

import AddItem from '../components/AddItem';
import Label from '../components/Label';
import ToDo from '../components/ToDo';
import Completed from '../components/Completed';

const HomePageStyled = styled.div`
    width: 100%;
    height: 100%;
    border: 7px solid #eb0bff;
    background-color: #f396fb;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const WholeToDoList = styled.div`
    width: 500px;
    height: 100%;
    min-height: 100vh;
    border: 3px solid #eb0bff;
    background-color: #f284fc;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 3;
`

const Cat = styled.div`
    position: absolute;
    z-index: 2;
    left: 115px;
    bottom:110px;
    img {
        width: 145px;
    }
`

const CatPaw = styled.div`
    position: absolute;
    z-index: 2;
    right: 15px;
    bottom: 10px;
    img {
        width: 95px;
    }
`

const CatPawOne = styled.div`
    position: absolute;
    z-index: 2;
    right: 125px;
    bottom: 40px;
    img {
        width: 135px;
    }
`

const CatPawTwo = styled.div`
    position: absolute;
    z-index: 2;
    left: 95px;
    bottom: 30px;
    img {
        width: 75px;
    }
`

const CatPawThree = styled.div`
    position: absolute;
    z-index: 2;
    left: 8px;
    bottom: 10px;
    img {
        width: 105px;
    }
`

const SandClock = styled.div`
    position: absolute;
    z-index: 2;
    right: 120px;
    top: 25px;
    opacity: 0.4;
    img {
        width: 145px;
    }
`

const MainLabel = styled.h1`
    font-size: 32px;
    color: #8d019a;
    text-align: center;
    font-style: italic;
`;


function HomePage() {
    const [toDoList, updateTodoList] = React.useState([]);

    function addToDo(text) {
        const newTodoList = [...toDoList, text]
        updateTodoList(newTodoList)
    }

    const [completedList, uptadeCompletedList] = React.useState([]);

    function completedToDo(text) {
        const indexCompleted = toDoList.indexOf(text)
        const copyToDoList = [...toDoList]
        copyToDoList.splice(indexCompleted, 1)
        updateTodoList(copyToDoList)

        const copyCompletedList = [...completedList]
        copyCompletedList.push(text)
        uptadeCompletedList(copyCompletedList)
    };

    function deleteItem(text) {
        const indexCompleted = completedList.indexOf(text)
        const copyCompletedList = [...completedList]
        copyCompletedList.splice(indexCompleted, 1)
        uptadeCompletedList(copyCompletedList)
    };

    return (
        <HomePageStyled>
            <Cat>
                <img src="public/dlf.pt-cat-face-png-245887.png" alt="" />
            </Cat>
            <SandClock>
                <img src="public/dlf.pt-sand-clock-png-764210.png" alt="" />
            </SandClock>
            <CatPaw>
                <img src="public/dlf.pt-cat-paw-print-png-4690468.png" alt="" />
            </CatPaw>
            <CatPawOne>
                <img src="public/dlf.pt-cat-paw-print-png-4690468.png" alt="" />
            </CatPawOne>
            <CatPawTwo>
                <img src="public/dlf.pt-cat-paw-print-png-4690468.png" alt="" />
            </CatPawTwo>
            <CatPawThree>
                <img src="public/dlf.pt-cat-paw-print-png-4690468.png" alt="" />
            </CatPawThree>
            <WholeToDoList>
                <MainLabel>To do list</MainLabel>

                <AddItem onAdd={addToDo} icon="+" placeholderInput="...треба записати, щоб не забути..." />

                <Label>TO DO :</Label>

                {toDoList.map((text) => {
                    return (
                        <ToDo onMove={completedToDo} toDoText={text} icon="✓"/>
                    )
                })}

                <Label>COMPLETED :</Label>

                {completedList.map((text) => {
                    return (
                        <Completed onDelete={deleteItem} complitedText={text}  icon="X"/>
                    )
                })}
            </WholeToDoList>
        </HomePageStyled>
    )
}

export default HomePage;
