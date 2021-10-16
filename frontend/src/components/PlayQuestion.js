export default function PlayQuestion(props) {

    return (
        <>
            <h3>{props.question.questionText}</h3>
            {props.question.answers.map(answer => (
                <div key={props.question.answers.indexOf(answer)}>
                    <input type="radio" name="radio"/>
                    <h4>{answer}</h4>
                </div>
                )
            )}
            <button>Check Answer</button>
        </>
    )
}