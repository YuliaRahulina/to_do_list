import styled from 'styled-components';

const CompletedStyled = styled.div`
    width: 260px;
    height: 45px;
    border-radius: 10px;
    margin-left: 20px;
    background-color: #f37df3;
    display: flex;
    align-items: center;
`;

const InputStyled = styled.input`
    outline: none;
    width: 45px;
`;

const CompletedItemStyled = styled.div`
    width: 200px;
    color: wheat;
    font-weight: bold;
`;

const Calendar = styled.div`
    width: 35px;
    font-weight: bold;
`;


function Completed()  {
    return (
        <CompletedStyled>
            <InputStyled type="checkbox" />
            <CompletedItemStyled />
            <Calendar/>
        </CompletedStyled>
    )
}

export default Completed;