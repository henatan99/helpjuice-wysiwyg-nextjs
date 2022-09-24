import Image from "next/image"

const HeaderNav = () => {

    const left = [
        {content: <Image src='/assets/double-arrow-right.svg' width='10px' height='10px' />, margin: '1rem'},
        {content: <Image src='/assets/book.png' width='15px' height='12.2px'/>, margin: '1rem'},
        {conntent: "Main", margin: '1rem'},
        {content: "/", margin: '1rem'},
        {content: "Getting Started", margin: '1rem'},
        {content: "/", margin: '1rem'},
        {content: "Frontend developement test project...", margin: '1rem'},
    ]
    const right = [
        {content: <Image src='/assets/lock.png' width='10px' height='10px' />, margin: '1rem'},
        {content: "Editing", margin: '1rem'},
        {conntent: "|", margin: '1rem'},
        {content: "Publish Space", margin: '1rem'},
        {content: <Image src='/assets/down_expand.svg' width='10px' height='10px' />, margin: '1rem'},
    ]

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '1rem'
        }}>
            <div style={{display: 'flex'}}>
                {
                    left && left.map(elem => {
                        return (
                            <span style={{marginRight: elem.margin}}>{elem.content}</span>
                        )
                    })
                }
            </div>
            <div style={{display: 'flex'}}>
                {
                    right && right.map(elem => {
                        return (
                            <span style={{marginRight: elem.margin}}>{elem.content}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderNav