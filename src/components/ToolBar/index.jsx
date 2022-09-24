import Image from "next/image"

const left = [
    {content: <Image src='/assets/P.png' width='10px' height='10px' />, margin: '1rem'},
    {content: "|", margin: '1rem',  fontSize: '10px'},
    {content: <Image src='/assets/clock.png' width='10px' height='10px' />, margin: '1rem'},
    {content: "0min", margin: '1rem'},
    {content: "|", margin: '1rem', fontSize: '10px'},
    {content: <Image src='/assets/rabbit.png' width='16px' height='16px' />, margin: '1rem'},
    {content: "|", margin: '1rem',  fontSize: '10px'},
    {content: <Image src='/assets/arrow.png' width='10px' height='10px' />, margin: '1rem'},
    {content: "0", margin: '1rem'},
]

const right = [
    {content: <Image src='/assets/check_mark.png' width='10px' height='10px' />, margin: '1rem'},
    {content: <Image src='/assets/cloud.png' width='10px' height='10px' />, margin: '1rem'},
    {content: <Image src='/assets/more.svg' width='10px' height='10px' />},
]

const ToolBar = () => {
    return (
        <div  style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0.2rem',
            border: '1px solid',
            borderRadius: '0.3rem',
            textAlign: 'center',
            boxShadow: '1px 1px 1px 1px #888888'
        }}>
            <div style={{display: 'flex'}}>
                {
                    left && left.map(elem => {
                        return (
                            <span style={{marginRight: elem.margin, fontSize: elem.fontSize}}>{elem.content}</span>
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

export default ToolBar