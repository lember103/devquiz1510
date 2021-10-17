import * as React from 'react'
import Answer from './Answer'
import styled from 'styled-components'

function Question({ question }) {
  return (
    <QuestionContainer>
      <h3>{question.questionText}</h3>
      <AnswerContainer>
        {question.answers.map(answer => (
          <Answer answer={answer} key={question.answers.indexOf(answer)} questionId={question.id} />
        ))}
      </AnswerContainer>
    </QuestionContainer>
  )
}
export default Question

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