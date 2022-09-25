import { useState, useEffect } from "react"
import HeadingModal from "../HeadingModal"

const Editor = () => {
    let initBlocks = [
        {id: 1, content: '', style: {fontSize: '1rem'}}
    ]

    const placholders = [
        'Type / for blocks, @ to link docs or people',
        '',
        'Heading 1',
    ]

    const [ blocks, setBlocks ] = useState(initBlocks);
    const [ currentValue, setCurrentValue ] = useState('');
    const [ currentStyle, setCurrentStyle ] = useState(initBlocks.style)
    const [ currentPlaceholder, setCurrentPlacholder ] = useState(placholders[0])
    const [ modalOpen, setModalOpen ] = useState(true);
 
    useEffect(() => {
    }, []);
    
    const handleChange = (e) => {
        setCurrentValue(e.target.value)
        if(e.target.value == '/1') {
            setCurrentStyle({...currentStyle, fontSize: '2.5rem'})
            setCurrentValue('')
        }
    }
    
    const handleKeyDown = event => {       
        if (event.key === 'Enter') {
            blocks[blocks.length - 1] = {...blocks[blocks.length - 1], content: event.target.value, style: currentStyle}
            setBlocks([...blocks, {id: blocks.length, content: '', style: {...initBlocks[0].style}}])
            setCurrentValue('')
            setCurrentStyle({...initBlocks[0].style})
        }
    };
    
    return (
      <div style={{width: '100%', position: 'relative'}}>
        {
          blocks && blocks.map(block => {
            return (
              <div 
                key={block.id} 
                style={{
                    ...block.style
                }}
              >
                {block.content}
              </div>
            )
          })
        }
        <input 
          value={currentValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          focus
          placeholder={currentPlaceholder}
          style={{
            ...currentStyle,
            padding: 0,
            borderWidth: 0,
            width: '101%',
            maxWidth: 'unset',
            color: '#636a76',
            margin: '-1%',
            paddingLeft: '1%',
            outline: 'none'
          }}
        />
        {
          modalOpen && 
          <div style={{marginTop: '0.5rem'}}>
            <HeadingModal />
          </div>
        }
      </div>
    );
}

export default Editor