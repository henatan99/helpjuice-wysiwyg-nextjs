import Image from "next/image"

const left = [
    {id: 1, content: <Image src='/assets/P.png' width='23.7px' height='27.2px' alt='P' />, margin: '0.8rem'},
    {id: 2, content: "|", margin: '0.6rem',  fontSize: '11px'},
    {id: 3, content: <Image src='/assets/clock.png' width='13.2px' height='13.2px' alt='clock' />, margin: '0.3rem'},
    {id: 4, content: "0min", margin: '0.8rem', fontSize: '14px'},
    {id: 5, content: "|", margin: '0.7rem', fontSize: '11px'},
    {id: 6, content: <Image src='/assets/rabbit.png' width='21.5px' height='21.5px' alt='rabbit' />, margin: '0.8rem'},
    {id: 7, content: "|", margin: '0.7rem',  fontSize: '11px'},
    {id: 8, content: <Image src='/assets/arrow.png' width='8px' height='8px' alt='arrow' />, margin: '0.5rem'},
    {id: 9, content: "0", margin: '1rem', fontSize: '14px'},
]

const right = [
    {id: 1, content: <Image src='/assets/check_mark.png' width='14px' height='14px' alt='check-mark' />, margin: '0.6rem'},
    {id: 2, content: <Image src='/assets/cloud.png' width='14.5px' height='10.8px' alt='cloud' />, margin: '0.5rem'},
    {id: 3, content: <Image src='/assets/more.svg' width='14px' height='14px' alt='more' />},
]

const ToolBar = () => {
    return (
        <div  style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0.3rem',
            border: '0.2px solid #e5e7eb',
            borderRadius: '0.3rem',
            textAlign: 'center',
            boxShadow: '0 0.25px 0.89px 0.125px rgb(64 60 67 / 16%)'
        }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {
                    left && left.map(elem => {
                        return (
                            <span key={elem.id} style={{marginRight: elem.margin, fontSize: elem.fontSize, textAlign: 'center', color: '#9da3ae', display: 'flex'}}>{elem.content}</span>
                        )
                    })
                }
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {
                    right && right.map(elem => {
                        return (
                            <span key={elem.id} style={{marginRight: elem.margin, textAlign: 'center', color: '#9da3ae', display:'flex'}}>
                                {elem.content}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToolBar