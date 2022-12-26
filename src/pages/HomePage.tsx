import styled from 'styled-components';

import NewComponent from 'Components/NewComponent';

const HomePageStyled = styled.div`
    width: 100vw;
    height: 100vh;
`;

function HomePage() {
    return (
        <HomePageStyled>
            <h1>Home Page</h1>
            <NewComponent />
        </HomePageStyled>
    )
}

export default HomePage;
