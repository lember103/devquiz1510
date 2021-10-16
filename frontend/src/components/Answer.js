import * as React from 'react'
import styled from 'styled-components'

function Answer({ answer, questionId, sendChosenID}) {

    return (
    <AnswerContainer>
      <input type="radio" name={questionId} onChange={()=>sendChosenID(answer.id)}/>
      <h4>{answer.answerText}</h4>

    </AnswerContainer>
  )
}
export default Answer

const AnswerContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`
