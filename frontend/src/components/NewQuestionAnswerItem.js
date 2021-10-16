import * as React from "react";

export default function NewQuestionAnswerItem({answer, index, handleAnswerTextInput, handleAnswerCorrectStatusChange}) {
    return (
        <section key={index}>
            <p>Answer {index + 1}</p>
            <input
                onChange={e => {
                    handleAnswerTextInput(e, index)
                }}
                className="answer-1-text"
                value={answer.answerText}
            />
            <p>Is Correct?</p>
            <input
                type="radio"
                name={'new-question'}
                checked={answer.isCorrect}
                onChange={() => handleAnswerCorrectStatusChange(index)}
            />
        </section>
    )
}