import styled from "styled-components";
import Question from "../components/Question";
import * as React from "react";

export default function Play({question}){

    return(
        <div>
            <QuestionsContainer>
                <Question question={question}/>
            </QuestionsContainer>
        </div>
    )
}

const QuestionsContainer = styled.section`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #424B54;
  padding: 50px;
  `