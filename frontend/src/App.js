import Header from './components/Header'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AddQuestion from './pages/Add-Question'
import useQuestions from './hooks/useQuestions'
import Play from "./pages/Play";
import {useEffect, useState} from "react";
import {getQuestion} from "./service/devQuizApiService";

function App() {

    const {questions, saveQuestion} = useQuestions()
    const [playQuestion, setPlayQuestion] = useState()

    useEffect(()=>{getQuestion().then(result => setPlayQuestion(result))}, []);

     return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Homepage questions={questions}/>
                </Route>
                <Route exact path="/add-question">
                    <AddQuestion saveQuestion={saveQuestion}/>
                </Route>
                <Route path="/play">
                    <Play question={playQuestion}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
