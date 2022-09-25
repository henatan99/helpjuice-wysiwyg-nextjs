import Image from "next/image"
import { StyledHeaderContainer, StyledNavWrapper } from "./styles"
import styles from './styles.module.css'

const HeaderNav = () => {

    const left = [
        {id: 1, content: <Image src='/assets/right-arrow-double.svg' width='10px' height='9px' alt='right-arrow' />, margin: '1.8rem', opacity: 0.4},
        {id: 2, content: <Image src='/assets/book.png' width='15px' height='12.2px' alt='book'/>, margin: '0.6rem'},
        {id: 3, content: "Main", margin: '0.7rem', underlined: true},
        {id: 4, content: "/", margin: '0.7rem', fontSize: '14px'},
        {id: 5, content: "Getting Started", margin: '0.7rem'},
        {id: 6, content: "/", margin: '0.7rem', fontSize: '14px'},
        {id: 7, content: "Front-end developement test proje...", margin: '1rem'},
    ]
    const right = [
        {id: 1, content: <Image src='/assets/lock.png' width='15px' height='16.9px' alt='lock' />, margin: '0.8rem'},
        {id: 2, content: "Editing", margin: '1rem'},
        {id: 3, content: "|", margin: '1rem' ,opacity: 0.6},
        {id: 4, content: "Publish Space", margin: '1rem', color: '#3565a9', fontWeight: 700},
        {id: 5, content: <Image src='/assets/down_expand.svg' width='10px' height='10px' alt='expand' />},
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
            <div style={{display: 'flex'}}>
                {
                    left && left.map(elem => {
                        return (
                            <span key={elem.id} style={{
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
                            className={elem.id != 4 && elem.id != 6 && styles.interactive}
                            >{elem.content}</span>
                        )
                    })
                }
            </div>
            <div style={{display: 'flex'}}>
                {
                    right && right.map(elem => {
                        return (
                            <span key={elem.id} 
                                className={elem.id != 4  && styles.interactive}
                                style={{
                                    marginRight: elem.margin, 
                                    display: 'flex', 
                                    fontSize: '14px', 
                                    color: elem.color || '#969ba4', 
                                    fontWieght: elem.fontWeight && elem.fontWeight, 
                                    opacity: elem.opacity
                                }}
                            >{elem.content}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HeaderNav