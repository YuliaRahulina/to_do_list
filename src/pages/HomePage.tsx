import styled from 'styled-components';

import AddItem from '../components/AddItem';
import Label from '../components/Label';
import ToDo from '../components/ToDo';
import Completed from '../components/Completed';

const HomePageStyled = styled.p`
    width: 300px;
    height: 500px;
    border: 1px solid wheat;
    background-color: wheat;
    margin: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const MainLabel = styled.h1`
    font-size: 25px;
    color: #fe27fe;
    text-align: center;
`;

function HomePage() {
    return (
        <HomePageStyled>
            <MainLabel>To do list</MainLabel>
            <AddItem />
            <Label>TO DO</Label>
            <ToDo />
            <Label>COMPLETED</Label>
            <Completed />
        </HomePageStyled>
    )
}

// function HomePage2() {
//     return (
//         <p class="HomePageStyled">
//             <h1 class="Label">Home Page</h1>
//             <NewComponent />
//         </p>
//     )
// }

export default HomePage;
