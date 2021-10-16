import {getQuestionById} from "../service/devQuizApiService";
import {useState} from "react";

export default function PlayQuestion(props) {

    const [correctAnswerText, setCorrectAnswerText] = useState("")
    const [radioIsChecked, setRadioIsChecked] = useState(false)

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
                    <input type="radio" name="radio" onChange={checked => setRadioIsChecked(checked)}/>
                    <h4>{answer}</h4>
                </div>
                )
            )}
            {radioIsChecked && <button onClick={handleCheckButtonClick}>Check Answer</button>}
            {radioIsChecked && correctAnswerText && <h3>{correctAnswerText}</h3>}
        </>
    )
}