import {getQuestionById} from "../service/devQuizApiService";
import {useState} from "react";

export default function PlayQuestion(props) {

    const [question, setQuestion] = useState()

    const handleCheckButtonClick = () => {
        getQuestionById(props.playQuestion.id)
            .then(response => {
                setQuestion(response)
                console.log(response)
            })
    }

    return (
        <>
            <h3>{props.playQuestion.questionText}</h3>
            {props.playQuestion.answers.map(answer => (
                <div key={props.playQuestion.answers.indexOf(answer)}>
                    <input type="radio" name="radio"/>
                    <h4>{answer}</h4>
                </div>
                )
            )}
            <button onClick={handleCheckButtonClick}>Check Answer</button>
        </>
    )
}