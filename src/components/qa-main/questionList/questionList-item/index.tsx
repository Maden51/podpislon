import { useState } from "react";

function QuestionListItem() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div><span>+</span>Почему земля синяя?</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi aliquid nam eos porro sit? Blanditiis quas dolores dignissimos asperiores, sunt, error iste placeat est sed dicta debitis ut molestiae.</p>
    </div>
  )
}

export default QuestionListItem;