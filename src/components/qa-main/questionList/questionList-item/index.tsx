import { Collapse, initTWE } from 'tw-elements';

initTWE({Collapse})

function QuestionListItem({number} : any) {
  return (
    <div>
      <button 
        className="text-left w-[589px] box-border inline-block max-w-[590px] bg-white py-3 px-5 text-lg leading-[165.6%] hover:text-orange cursor-pointer transition duration-150 ease-in-out"
        data-twe-collapse-init
        data-twe-target={`#multiCollapse${number}`}
        type='button'
        aria-expanded="false"
        aria-controls={`multiCollapse${number}`}
      ><span className="text-orange font-sansBold mr-4">+</span>Почему земля синяя?</button>
      <div className='multi-collapse !visible hidden' data-twe-collapse-item id={`multiCollapse${number}`}>
        <p className="max-w-[542px] py-5 text-sm pl-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi aliquid nam eos porro sit? Blanditiis quas dolores dignissimos asperiores, sunt, error iste placeat est sed dicta debitis ut molestiae.</p>
      </div>
    </div>
  )
}

export default QuestionListItem;