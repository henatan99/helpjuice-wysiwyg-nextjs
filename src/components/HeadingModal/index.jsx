import Image from "next/image"

const HeadingModal = () => {
    return (
        <div style={{border: '1px solid', padding: '1rem'}}>
            <h3>Add blocks</h3>
            <p style={{color: '#9da3ae'}}>keep typing to filter or escape to exit</p>
            <p style={{color: '#636a76'}}>Filtering keyword <span style={{background: '#3565a9', color: 'white'}}>1</span></p>
            <ul style={{
                listStyle: 'none', 
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                paddingInlineStart: 0
                }}
            >
                <li style={{display: 'flex'}}>
                    <div>
                        <Image src='/assets/T.svg' width='20px' height='30px'/>
                    </div>
                    <div>
                        <h4>Heading 1</h4>
                        <p>Shortcut, type # + space</p>
                    </div>
                </li>
                <li style={{display: 'flex'}}>
                    <div >
                        <Image src='/assets/T.svg' width='20px' height='30px'/>
                    </div>
                    <div>
                        <h4>Expandable Heading 1</h4>
                        <p>Shortcut, type `&gt;``&gt;`# + space</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HeadingModal