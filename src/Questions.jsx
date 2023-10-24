import Question from "./Question.jsx";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </section>
  );
};

export default Questions;
