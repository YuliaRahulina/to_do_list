import styled from 'styled-components';

const Wrapper = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid red;
    padding: 4px;
`;

function NewComponent()  {
    return (
        <Wrapper>
            <h1>box - new component</h1>
            <button>click me</button>
        </Wrapper>
    )
}

export default NewComponent;