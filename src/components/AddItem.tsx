import React from 'react';
import styled from 'styled-components';

const AddItemStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    height: 27px;
`;

const InputStyled = styled.input`
    background-color: #fea1ee;
    border: 3px solid #eb0bff;
    border-radius: 7px;
    width: 400px;
    height: 27px;
`;

const ButtonStyled = styled.div`
    width: 28px;
    font-size: large;
    color: #eb0bff;
    font-weight: bold;
    border: 2px solid #eb0bff;
    background-color: #fea1ee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        width: 29px;
        border: 3px solid #eb0bff;
        color: #eb0bff;
        background-color: #fea1ee;
    }
`;




function AddItem(props)  {
    const [text, updateText] = React.useState();

    function onChangeInput(event) {
        updateText(event.target.value)
    };

    function createItem() {
        // eslint-disable-next-line react/prop-types
        props.onAdd(text);
        // @ts-ignore
        updateText('');
    }

    return (
        <AddItemStyled>
            <InputStyled placeholder={props.placeholderInput} value={text} onChange={onChangeInput} type="text" />
            <ButtonStyled onClick={createItem}>
                {props.icon}
            </ButtonStyled>
        </AddItemStyled>
    )
}

export default AddItem;
