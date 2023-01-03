import React from 'react';
import styled from 'styled-components';

const AddItemStyled = styled.div`
    width: 260px;
    height: 35px;
    border-radius: 10px;
    margin-left: 20px;
    background-color: #f37df3;
    display: flex;
    align-items: center;
`;

const InputStyled = styled.input`
    background-color: #f37df3;
    border-radius: 10px;
    color: wheat;
    font-weight: bold;
    border: 0px solid #f37df3;
    outline: none;
    width: 225px;
`;

const ButtonStyled = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: wheat;
    border-radius:50px;
    cursor: pointer;
`;


function AddItem(props)  {
    const [text, updateText] = React.useState();

    function onChangeInput(event) {
        const text = event.target.value
        updateText(text)
    }

    function createItem() {
        props.onAdd(text)
        updateText(" ")
    }

    return (
        <AddItemStyled>
            <InputStyled value={text} onChange={onChangeInput} type="text" />
            <ButtonStyled onClick={createItem}>
                {props.icon}
            </ButtonStyled>
        </AddItemStyled>
    )
}

export default AddItem;