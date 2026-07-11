import {useEffect, useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ rec}) => {
    const [visible,setVisible] = useState(false);


    const collapse = ()=>{
        setVisible(visible===true?false:true);
    }
    return (
              <div key={`d-${rec.id}`} className="question">
                    <header key={`h-${rec.id}`} >
                        <h5 key={`h5-${rec.id}`}> {rec.title}</h5>
                        <button key={`b-${rec.id}`} className="question-btn" onClick={collapse} >
                            {visible ? <AiOutlineMinus /> :<AiOutlinePlus /> }
                        </button>
                    </header>
                    {visible && <p>{rec.info}</p>}
                </div>
    )

}
export default Question;