import { useEffect, useState, useRef } from "react"
import { h1Style, pStyle } from "../../utils/block_styles"

const Editor = () => {
    const initialStyle = {
        width: 'fit-content',
        fontSize: '20px',
        border: 'solid 1px black',
        height: 'fit-content',
        outline: 'none',
        padding: '1rem',
        display: 'inline-block',
        tabIndex: 0
    }

    const initialBlocks = {
        lastBlockId: 1,
        list: [
            {id: 1, content: "Hi there", style: {initialStyle}},
        ]
    } 

    const blocksRef = useRef(null);

    useEffect(() => {
        blocksRef.current.children[0].focus();
    }, []);
  
    const [ editable, setEditable ] = useState(true)
    const [ blocks, setBlocks ] = useState(initialBlocks)
    const [ currentBlock, setCurrentBlock ] = useState(blocks.list[0])

    console.log(blocks)

    const setFocus = (activeIndex) => {
        blocksRef.current.children[0].focus()
    }

    const handleChange = (e) => {
        const char = e.target.innerText[e.target.innerText.length - 1]
        console.log('blocks', blocks);
        console.log('currentBlock', currentBlock)
        console.log('boolean', 1 == currentBlock.id)
        const blockIndex = blocks.list.indexOf(block => block.id == 1) 
        console.log('my block index', blockIndex)
        if(char == 0) {
            let updatedBlocksList = blocks.list
            
            setBlocks(
                {
                    ...blocks,
                    list: [
                        ...updatedBlocksList, 
                        
                    ],
                    lastBlockId: blocks.lastBlockId + 1,
                }
            )
            setCurrentBlock({
                id: blocks.lastBlockId + 1, 
                content: "", 
                style: {...initialStyle, ...pStyle}, 
                focus: true,
                tabIndex: 1
            })

            setFocus(blocks.list.indexOf(block => block.id == blockIndex + 1))
        } 
        else if(blocks[blockIndex] === '/p') {
            setCurrentBlock(blocks.list[blocks.list.lastBlockId + 1])
            setBlocks(
                {
                    ...blocks,
                    list: [
                        ...blocks.list, 
                        {
                            id: blocks.lastBlockId + 1, 
                            content: "", 
                            style: {...initialStyle, ...pStyle}, 
                            focus: true,
                            tabIndex: 1
                        }
                    ],
                    lastBlockId: blocks.lastBlockId + 1,
                }
            )
        }
        else if(blocks[blockIndex] === '/1') {
            setCurrentBlock(blocks.list[blocks.list.lastBlockId + 1])
            setBlocks(
                {
                    ...blocks,
                    list: [
                        ...blocks.list, 
                        {
                            id: blocks.lastBlockId + 1, 
                            content: "", 
                            style: {...initialStyle, ...pStyle}, 
                            focus: true,
                            tabIndex: 1
                        }
                    ],
                    lastBlockId: blocks.lastBlockId + 1,
                }
            )
        }

        else {
            let updatedBlocksList = [...blocks.list]

            console.log('block index', currentBlock.id)
            updatedBlocksList[blockIndex] = { 
                ...updatedBlocksList[blockIndex], 
                content: updatedBlocksList[blockIndex] && updatedBlocksList[blockIndex].content ? 
                    updatedBlocksList[blockIndex].content + char : char
            }  
            setCurrentBlock(updatedBlocksList)
            setBlocks(
                {
                    ...blocks,
                    list: updatedBlocksList
                }
            )
        }
    }

    return (
        <div ref={blocksRef} >
            <button onClick={() => setEditable(!editable)}>Lock</button>
            {
                blocks.list && blocks.list.map(block => {
                    const { style } = block
                    return (
                        <EditableDiv 
                            editable={editable}
                            style={style}
                            handleChange={handleChange}
                        />
                    )
                })
            }
            <div>{JSON.stringify(currentBlock)}</div>
        </div>
    )
}

const EditableDiv = (props) => {
    const { editable, style, handleChange } = props
    
    return (
        <>
            <div 
                style={style} 
                contentEditable={editable} 
                placeholder="|" 
                onInput={handleChange}
            >
                {}
            </div>
        </>
    )
}

export default Editor 