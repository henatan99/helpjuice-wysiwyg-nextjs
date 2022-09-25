import Image from "next/image"
import { StyledHeaderContainer, StyledNavWrapper } from "./styles"

const HeaderNav = () => {

    const left = [
        {content: <Image src='/assets/right-arrow-double.svg' width='10px' height='9px' alt='right-arrow' />, margin: '1.8rem', opacity: 0.4},
        {content: <Image src='/assets/book.png' width='15px' height='12.2px' alt='book'/>, margin: '0.6rem'},
        {content: "Main", margin: '0.7rem', underlined: true},
        {content: "/", margin: '0.7rem', fontSize: '14px'},
        {content: "Getting Started", margin: '0.7rem'},
        {content: "/", margin: '0.7rem', fontSize: '14px'},
        {content: "Front-end developement test proje...", margin: '1rem'},
    ]
    const right = [
        {content: <Image src='/assets/lock.png' width='15px' height='16.9px' alt='lock' />, margin: '0.8rem'},
        {content: "Editing", margin: '1rem'},
        {content: "|", margin: '1rem' ,opacity: 0.6},
        {content: "Publish Space", margin: '1rem', color: '#3565a9', fontWeight: 700},
        {content: <Image src='/assets/down_expand.svg' width='10px' height='10px' alt='expand' />},
    ]

    return (
        <div
            style={{
                display: 'flex',
                flexSirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.3rem 1.5rem'
            }}
         >
            <StyledNavWrapper style={{display: 'flex'}}>
                {
                    left && left.map(elem => {
                        return (
                            <span key={elem.content} style={{
                                marginRight: elem.margin, 
                                display: 'flex', 
                                fontSize: elem.fontSize || '14px', 
                                color: elem.color || '#969ba4', 
                                opacity: elem.opacity,
                                "&:hover": {
                                    cursor: 'pointer',
                                },
                                textDecoration: elem.underlined && 'underline'
                            }}
                            >{elem.content}</span>
                        )
                    })
                }
            </StyledNavWrapper>
            <StyledNavWrapper style={{display: 'flex'}}>
                {
                    right && right.map(elem => {
                        return (
                            <span key={elem.content} style={{marginRight: elem.margin, display: 'flex', fontSize: '14px', color: elem.color || '#969ba4', fontWieght: elem.fontWeight && elem.fontWeight, opacity: elem.opacity}}>{elem.content}</span>
                        )
                    })
                }
            </StyledNavWrapper>
        </div>
    )
}

export default HeaderNav