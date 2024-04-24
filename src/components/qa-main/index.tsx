import ImageLayout from "../image-layout";
import PageLayout from "../page-layout";
import QuestionList from "./questionList";

function QaMain() {
  return (
    <ImageLayout pseudoClass="" bgColor="bg-[#F2F2F2]">
      <PageLayout>
        <div className="py-16">
          <h2 className="font-sansBold text-[52px] leading-[165.6%] uppercase mb-3">вопросы и ответы</h2>
          <QuestionList />
        </div>
      </PageLayout>
    </ImageLayout>
  )
}

export default QaMain;