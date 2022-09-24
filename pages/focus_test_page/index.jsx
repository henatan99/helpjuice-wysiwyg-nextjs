import { useEffect, useRef, useState } from "react";

function FocusTest() {
//  const ulRef = useRef(null);

  // useEffect(() => {
  //   ulRef.current.children[0].focus();
  // }, []);

  let initElems = [
    {id: 1, val: ''}
  ]

  const [ elems, setElems ] = useState(initElems);
  const [ currentValue, setCurrentValue ] = useState('');

  const handleChange = (e) => {
    console.log('elems', elems)
    let length = e.target.value.length
    let lastChar = e.target.value[length - 1]
    let newElems = [...elems]
    newElems[elems.length - 1] = {
      ...newElems[elems.length - 1], 
      val: newElems[elems.length - 1].val + e.target.value
    }
    setElems(newElems)
    if(lastChar == ' ') {
      setElems([...elems, {id: elems.length + 1, val: ''}])
      setCurrentValue('')
    }

  }

  return (
    <>
      <div style={{maxWidth: '80vw'}}>
        {
          elems && elems.map(elem => {
            return (
              <span key={elem.id}>{elem.val}</span>
            )
          })
        }
        <input value={currentValue} onChange={handleChange}/>
      </div>
    </>
  );
}

export default FocusTest