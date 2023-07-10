import React from 'react';
import styled from 'styled-components';

const ToDoStyled = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    height: 27px;
`;

const ButtonStyled = styled.button`
    width: 28px;
    font-size: large;
    color: #eb0bff;
    font-weight: bold;
    border: 2px solid #ff3131;
    background-color: #fea1ee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        width: 29px;
        border: 3px solid #38c038;
        color: #38c038;
        background-color: #a4eea4;
    }
`;

const ToDoItemStyled = styled.div`
    background-color: #fea1ee;
    border: 3px solid #ff3131;
    border-radius: 7px;
    width: 400px;
    height: 27px;
`;

const Calendar = styled.div`
    
`;

function ToDo(props)  {

    function removeItem () {
        props.onMove(props.toDoText);
    };

    return (
        <ToDoStyled>
            <ToDoItemStyled>{props.toDoText}</ToDoItemStyled>
            <ButtonStyled onClick={removeItem}>
                {props.icon}
            </ButtonStyled>
            <Calendar/>
        </ToDoStyled>
    )
}

export default ToDo;