import {getQuestionById} from "../service/devQuizApiService";
import {useState} from "react";

export default function PlayQuestion(props) {

    const [correctAnswerText, setCorrectAnswerText] = useState()

    const handleCheckButtonClick = () => {
        getQuestionById(props.playQuestion.id)
            .then(question => {
                setCorrectAnswerText(question.answers.filter(answer => answer.isCorrect === true)[0].answerText)
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
            {correctAnswerText && <h3>{correctAnswerText}</h3>}
        </>
    )
}