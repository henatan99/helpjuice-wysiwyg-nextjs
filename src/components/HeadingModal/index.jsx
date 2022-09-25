import Image from "next/image"

const HeadingModal = () => {
    return (
        <div style={{border: '1px solid', minHeight: '345px', maxWidth: '280px', borderRadius: '0.3rem', border: '#e5e7eb solid 1px'}}>
            <div style={{padding: '0.4rem 0.6rem 0.3rem 0.6rem'}}>
                <h4 style={{marginBlockStart: '0.3rem', marginBlockEnd: 0}}>Add blocks</h4>
                <p style={{color: '#9da3ae', marginBlockStart: '0.5rem', fontSize: '13px'}}>keep typing to filter or escape to exit</p>
                <p style={{color: '#636a76', fontSize: '13px'}}>Filtering keyword <span style={{background: '#3565a9', color: 'white', padding: '0.2rem', borderRadius: '0.2rem', fontSize: '13px'}}>1</span></p>
            </div>
            <ul style={{
                listStyle: 'none', 
                marginBlockStart: 0,
                marginBlockEnd: 0,
                marginInlineStart: 0,
                marginInlineEnd: 0,
                paddingInlineStart: 0
                }}
            >
                <li style={{display: 'flex', background: '#f3f4f6'}}>
                    <div style={{position: 'relative', display: 'flex', marginRight: '0.8rem', padding: '0.8rem'}}>
                        <Image src='/assets/T.svg' width='20px' height='30px'/>
                    </div>
                    <div style={{padding: '0rem'}}>
                        <h5 style={{marginBlockStart: '0.5rem', marginBlockEnd: 0, fontSize: '14px'}}>Heading 1</h5>
                        <p style={{marginBlockStart: '0.2rem', marginBlockEnd: 0, color: '#9da3ae', fontSize: '14px'}}><small>Shortcut, type # + space</small></p>
                    </div>
                </li>
                <li style={{display: 'flex'}}>
                    <div style={{position: 'relative', display: 'flex', marginRight: '0.8rem', padding: '0.8rem'}}>
                        <Image src='/assets/T.svg' width='20px' height='30px'/>
                    </div>
                <div style={{padding: '0rem'}}>
                        <h5 style={{marginBlockStart: '0.5rem', marginBlockEnd: 0, fontSize: '14px'}}>Expandable Heading 1</h5>
                        <p style={{marginBlockStart: '0.2rem', marginBlockEnd: 0, color: '#9da3ae', fontSize: '14px'}}><small>Shortcut, type &gt;&gt;# + space</small></p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HeadingModal