import PlayQuestion from "../components/PlayQuestion";
import styled from "styled-components";

export default function Play(props){

    return(
        <QuestionsContainer>
            <PlayQuestion playQuestion={props.playQuestion}/>
        </QuestionsContainer>
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