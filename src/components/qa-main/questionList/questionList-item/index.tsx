import { useState } from 'react';
import { TECollapse } from 'tw-elements-react';

function QuestionListItem() {
  const [show, setShow] = useState<boolean>(false);
  const toggleShow = () => setShow(!show);

  return (
    <div>
      <button 
        className="text-left w-[589px] box-border inline-block max-w-[590px] bg-white py-3 px-5 text-lg leading-[165.6%] hover:text-orange cursor-pointer transition duration-150 ease-in-out"
        type='button'
        onClick={toggleShow}
      ><span className="text-orange font-sansBold mr-4">+</span>Почему земля синяя?</button>
      <TECollapse show={show} className='shadow-none'>
        <div className="max-w-[542px] py-5 text-sm pl-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi aliquid nam eos porro sit? Blanditiis quas dolores dignissimos asperiores, sunt, error iste placeat est sed dicta debitis ut molestiae.</div>
      </TECollapse>
    </div>
  )
}

export default QuestionListItem;