import './App.css';

import CharacterRickAndMorty from "./components/Character_RickAndMorty/Character_RickAndMorty";
import CharacterSimson from "./components/Character_Simson/Character_Simson";

function App() {
    return (
        <div>
            <div className={'simson'}>
                <CharacterSimson
                    name={'Homer'}
                    description={'Homer Jay Simpson is one of the main characters of the American animated sitcom The Simpsons.'}
                    image={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/02/Homer_Simpson_2006.png/200px-Homer_Simpson_2006.png'}
                />
                <CharacterSimson
                    name={'Marge'}
                    description={'Marjorie Simpson  is a character, based on the real Marge, ' +
                        'in the American animated sitcom The Simpsons and part of the eponymous family. '}
                    image={'https://upload.wikimedia.org/wikipedia/uk/thumb/0/0b/Marge_Simpson.png/200px-Marge_Simpson.png'}
                />
                <CharacterSimson
                    name={'Bart'}
                    description={'Bart Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family. '}
                    image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                />
                <CharacterSimson
                    name={'Lisa'}
                    description={'Lisa Marie Simpson is a fictional character in the animated television series The Simpsons.'}
                    image={'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/170px-Lisasmiling.png'}
                />
                <CharacterSimson
                    name={'Maggie'}
                    description={'Margaret Simpson is a fictional character in the animated television series ' +
                        'The Simpsons and a part of the Simpson family, notably the youngest member.'}
                    image={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
                />
            </div>
            <div className={'rickAndMorty'}>
                <CharacterRickAndMorty
                    id={'1'}
                    name={'Rick Sanchez'}
                    image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <CharacterRickAndMorty
                    id={'2'}
                    name={'Morty Smith'}
                    image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <CharacterRickAndMorty
                    id={'3'}
                    name={'Summer Smith'}
                    image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                />
                <CharacterRickAndMorty
                    id={'4'}
                    name={'Beth Smith'}
                    image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                />
                <CharacterRickAndMorty
                    id={'5'}
                    name={'Jerry Smith'}
                    image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Male'}
                />
                <CharacterRickAndMorty
                    id={'6'}
                    name={'Abadango Cluster Princess'}
                    image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                    status={'Alive'}
                    species={'Alien'}
                    gender={'Female'}
                />
            </div>
        </div>
    );
}

export default App;
