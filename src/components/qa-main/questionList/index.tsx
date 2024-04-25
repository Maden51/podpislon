import QuestionListItem from "./questionList-item";

const numbers = [0, 1, 2, 3, 4];

function QuestionList() {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-7">
      {numbers.map((item, index) => {
        return (
          <div key={index}>
            <QuestionListItem number={item} />
          </div>
        )
      })}
    </div>
  )
}

export default QuestionList;