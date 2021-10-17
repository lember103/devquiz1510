import * as React from 'react'
import styled from 'styled-components'
import QuestionLight from "../components/QuestionLight";

function Homepage({ questions }) {

  const sendChosenId = () => {}

  return (
    <QuestionsContainer>
      {questions.map(question => (
        <QuestionLight question={question} key={question.id} sendChosenId={sendChosenId} />
      ))}
    </QuestionsContainer>
  )
}
export default Homepage

const QuestionsContainer = styled.section`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #424B54;
  padding: 50px;
`
