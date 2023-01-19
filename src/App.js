import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";
import RickAndMortyComponent from "./components/RickAndMortyComponent";
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    return (
        <div className="wrap">
            <h1 className="header1">Simpson family</h1>
            <SimpsonComponent
                itemName={'Homer'}
                pic={'https://static.wikia.nocookie.net/simpsons/images/0/0c/Deep_Space_Homer_Unlock.png'}
                itemInfo={'Homer Jay Simpson (born May 12, 1956) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t. He also serves as the main protagonist of the The Simpsons Movie. Homer Simpson is in his late 30s and early 40s'}
                quote1={'“D\'oh!”\n' +
                    '―Homer when he makes a mistake.\n'}
                quote2={'“Stupid Flanders!”\n' +
                    '―Homer to his neighbor.'}
                quote3={'“Better them than me... Oh wait, that was me.”\n' +
                    '―Push notification when Homer finishes a job.'}
            />
            <SimpsonComponent
                itemName={'Marge'}
                pic={'https://static.wikia.nocookie.net/simpsons/images/8/8d/Wizard_Marge_Tapped_Out.png'}
                itemInfo={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}
                quote1={'“Hrmmm….”\n' +
                    '―Marge\'s catchphrase\n'
                }
                quote2={'“Now it\'s Marge\'s time to shine!”\n' +
                    '―Marge Simpson'}
                quote3={'“Oh, Homie!”\n' +
                    '―Marge\'s love catchphrase\n'}
            />
            <SimpsonComponent
                itemName={'Bart'}
                pic={'https://static.wikia.nocookie.net/simpsons/images/d/d9/BartmanTSTO.png'}
                itemInfo={'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1979 in 1989; 2013 in 2023)is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'}
                quote1={'“Ay Caramba!”\n' +
                    '―Bart\'s catchphrase and first words\n'}
                quote2={'“Eat my shorts!”\n' +
                    '―Bart\'s second catchphrase'}
                quote3={'“I’m Bart Simpson, who the hell are you?”\n' +
                    '―Bart\'s fourth catchphrase'}
            />
            <SimpsonComponent
                itemName={'Lisa'}
                pic={'https://static.wikia.nocookie.net/simpsons/images/b/bb/Angel_Lisa_Tapped_Out.png'}
                itemInfo={'Lisa Marie Simpson (born May 9, 1981 in 1989)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.\n' +
                    '\n' +
                    'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil\' Lisa on her parents\' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone\'s surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies. In school, Lisa\'s popularity is affected by those who view her as a geeky overachiever, which leaves her with only a few friends. '}
                quote1={'“BAAAAART!!”\n' +
                    '―Lisa’s catchphrase'
                }
                quote2={'“Having never received encouragement, I\'m not sure how it should sound, but here goes: I believe in you.”\n' +
                    '―Lisa to Bart'}
                quote3={'“The truth must be told.”\n' +
                    '―Lisa Simpson'}
            />
            <SimpsonComponent
                itemName={'Maggie'}
                pic={'https://static.wikia.nocookie.net/simpsons/images/b/b1/Prairie_Maggie.png'}
                itemInfo={'Margaret Evelyn Lenny  "Maggie" Simpson (born January 14, 1988 in 1989; 2022 in 2023) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is the very young, infant age of 1.'}
                quote1={'“Daddy.”\n' +
                    '―Maggie\'s first word'}
                quote2={'“Daddily Doodily!”\n' +
                    '―Maggie\'s second word'}
                quote3={'“Rusty!”\n' +
                    '―Maggie talking in Lisa Gets an "A"; Maggie\'s third word'}
            />
            <h1 className="header2"> The characters "Rick and Morty" </h1>
            <RickAndMortyComponent
                name={'Rick Sanchez'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
                id={'id: 1'}
                status={'status: Alive'}
                species={'species: Human'}
                gender={'gender: Male'}
            />
            <RickAndMortyComponent
                name={'Morty Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
                id={'id: 2'}
                status={'status: Alive'}
                species={'species: Human'}
                gender={'gender: Male'}
            />
            <RickAndMortyComponent
                name={'Summer Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
                id={'id: 3'}
                status={'status: Alive'}
                species={'species: Human'}
                gender={'gender: Female'}
            />
            <RickAndMortyComponent
                name={'Beth Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
                id={'id: 4'}
                status={'status: Alive'}
                species={'species: Human'}
                gender={'gender: Female'}
            />
            <RickAndMortyComponent
                name={'Jerry Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
                id={'id: 5'}
                status={'status: Alive'}
                species={'species: Human'}
                gender={'gender: Male'}
            />
            <RickAndMortyComponent
                name={'Abadango Cluster Princess'}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
                id={'id: 6'}
                status={'status: Alive'}
                species={'species: Alien'}
                gender={'gender: Female'}
            />
        </div>

    );
}


export default App;
