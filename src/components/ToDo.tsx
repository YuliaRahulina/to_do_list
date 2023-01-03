import styled from 'styled-components';

const ToDoStyled = styled.div`
    width: 260px;
    height: 45px;
    border-radius: 10px;
    margin-left: 20px;
    background-color: #f37df3;
    display: flex;
    align-items: center;
    margin-bottom: 7px;
`;

const InputStyled = styled.input`
    outline: none;
    width: 45px;
`;

const ToDoItemStyled = styled.div`
    width: 200px;
    color: wheat;
    font-weight: bold;
`;

const Calendar = styled.div`
    width: 35px;
    font-weight: bold;
`;

function ToDo(props)  {
    return (
        <ToDoStyled>
            <InputStyled type="checkbox" />
            <ToDoItemStyled>{props.taskName}</ToDoItemStyled>
            <Calendar/>
        </ToDoStyled>
    )
}

export default ToDo;