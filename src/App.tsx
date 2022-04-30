/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import './App.css';
import InfoBody from './components/Infobody';
import { define, randomWord } from './api';
import { RandomWord } from './api/randomWordApi';

const App = () => {
    const [randWord, setRandWord] = React.useState<Partial<RandomWord>>({});
    const [def, setDef] = React.useState<any>({});

    const getRandomWord = async () => {
        const results = await randomWord();
        if(results.word) {
        setRandWord(results);
        }
    };
    const getDef = async (word: string) => {
        const results = await define(word);
        if(!results.error) {
        setDef(results);
        }
        else {
        setDef({error: "Definition not found, try another word"});
        }
    };
    useEffect(() => {
        setDef({});
        getRandomWord();
    }, []);
    useEffect(() => {
        console.log(randWord);
    }, [randWord]);
    useEffect(() => {
        console.log(def);
    }, [def]);
    const handleSubmit = async (word: string) => {
        getDef(word);
    };
    

    return (
        <div className="font-monaco">
            <div className="bg-color-alt w-100 py-3 d-flex align-items-center justify-content-center">
                <Header
                    handleSubmit={handleSubmit}
                />
            </div>
            <InfoBody 
                randWord={randWord}
                def={def}
            />
        </div>
    );
};

export default App;
