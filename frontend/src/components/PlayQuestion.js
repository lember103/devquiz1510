import {getQuestionById} from "../service/devQuizApiService";
import {useState} from "react";
import styled from "styled-components";

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
        <QuestionContainer>
            <h3>{props.playQuestion.questionText}</h3>
            <AnswerContainer>
                {props.playQuestion.answers.map(answer => (
                    <Answers key={props.playQuestion.answers.indexOf(answer)}>
                        <input type="radio" name="radio" onChange={isChecked => setRadioIsChecked(isChecked)}/>
                        <h4>{answer}</h4>
                    </Answers>
                    )
                )}
            </AnswerContainer>
            {radioIsChecked && <CheckButton onClick={handleCheckButtonClick}>Check Answer</CheckButton>}
            {radioIsChecked && correctAnswerText && <h3>{"Richtige Antwort: " + correctAnswerText}</h3>}
        </QuestionContainer>
    )
}

const QuestionContainer = styled.section`
  width: 400px;
  border: 1px solid #009fb7;
  border-radius: 20px;
  padding: 20px;
  background-color: #EAF6FF;
  font-family: 'Montserrat', sans-serif;;
`

const AnswerContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. .'
    '. .';
`

const Answers = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`

const CheckButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background-color: #757780;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
    color: #757780;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`