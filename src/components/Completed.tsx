import React from 'react';
import styled from 'styled-components';

const CompletedStyled = styled.div`
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
    border: 2px solid #38c038;
    background-color: #fea1ee;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        width: 29px;
        border: 3px solid #ff3131;
        color: #ff3131;
        background-color: #ff7979;
    }
`;

const CompletedItemStyled = styled.div`
    background-color: #fea1ee;
    border: 3px solid #38c038;
    border-radius: 7px;
    width: 400px;
    height: 27px;
`;




function Completed(props)  {
    function deleteItem () {
        props.onDelete(props.complitedText)
    };

    return (
        <CompletedStyled>
            <CompletedItemStyled>{props.complitedText}</CompletedItemStyled>
            <ButtonStyled onClick={deleteItem}>
                {props.icon}
            </ButtonStyled>
        </CompletedStyled>
    )
}

export default Completed;