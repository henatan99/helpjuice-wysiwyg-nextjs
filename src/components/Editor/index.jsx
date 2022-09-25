import { useState, useEffect } from "react"
import Image from "next/image"
import HeadingModal from "../HeadingModal"
import { StyledContainer } from "./styles"

const Editor = () => {

    const heading1 = {
      fontSize: '1.8rem',
      marginBottom: '1.6rem',
      fontWeight: 'bold',
      lineHeight: '2.5rem',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }

    const p = {
      fontSize: '1rem',
      marginBottom: '1rem',
      lineHeight: '1.8rem',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }

    let initBlocks = [
        {id: 1, content: '', style: {...p}}
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
    const [ modalOpen, setModalOpen ] = useState(false);
 
    useEffect(() => {
    }, []);
    
    const handleChange = (e) => {
        setCurrentValue(e.target.value)
        if(e.target.value == '/1') {
            setModalOpen(true)
        }
        if(currentValue == '/1') {
          setCurrentStyle({...currentStyle, ...heading1 })
          setModalOpen(false)
          setCurrentValue('')
        }
    }
    
    const handleKeyDown = event => {   
        if(event.target.value == '/1') {
          setCurrentPlacholder(placholders[2])
          return
        }    
        if (event.key === 'Enter') {
            blocks[blocks.length - 1] = {...blocks[blocks.length - 1], content: event.target.value, style: currentStyle}
            setBlocks([...blocks, {id: blocks.length, content: '', style: {...initBlocks[0].style}}])
            setCurrentValue('')
            setCurrentStyle({...initBlocks[0].style})
            setCurrentPlacholder(placholders[1])
        }
    };

    const handleModalClick = () => {
      setModalOpen(false)
      setCurrentStyle({...currentStyle, ...heading1})
      setCurrentValue('')
      setCurrentPlacholder(placholders[2])
    }
    
    return (
      <StyledContainer>
        {
          blocks && blocks.map(block => {
            return (
              <div 
                key={block.id} 
                style={{
                    ...block.style,
                    position: 'relative'
                }}
              >
                {block.content}
                {
                  block.style.fontSize == '1.8rem' &&
                  <div style={{ position: 'absolute', left: '-25px', top: '-5px', opacity: 0.3}}>
                    <Image src='/assets/menu_icon.svg' width='15px' height='15px' alt='menu' />
                  </div>
                }
              </div>
            )
          })
        }
        <textarea 
          value={currentValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 
          focus
          rows={!modalOpen && 20}
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
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />
        {
          modalOpen && 
          <div style={{marginTop: '0.5rem'}}>
            <HeadingModal handleClick={handleModalClick}/>
          </div>
        }
      </StyledContainer>
    );
}

export default Editor