import styled from 'styled-components';

import NewComponent from 'Components/NewComponent';

const HomePageStyled = styled.div`
    width: 100vw;
    height: 100vh;
`;

function HomePage() {
    return (
        <HomePageStyled>
            <p>Home Page</p>
            <NewComponent />
        </HomePageStyled>
    )
}

export default HomePage;
