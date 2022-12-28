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
    background-color: wheat;
    border-radius:50px;
`;


function AddItem()  {
    return (
        <AddItemStyled>
            <InputStyled type="text" />
            <ButtonStyled />
        </AddItemStyled>
    )
}

export default AddItem;