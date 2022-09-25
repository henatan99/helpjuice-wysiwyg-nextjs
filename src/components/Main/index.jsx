import Image from "next/image"
import Editor from "../Editor"
import ToolBar from "../ToolBar"

const Main = () => {
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            
            <div style={{width: '50%'}}>
                <div>
                    <ToolBar />
                </div>
                <h1 style={{fontSize: '2.4rem', marginBlockEnd: 0}}>
                    Front-end developer test project
                </h1>
                <hr style={{ color: '#e5e7eb', background: '#e5e7eb', border: '0.25px solid #e5e7eb'}}></hr>
                <p style={{color: '#636a76', lineHeight: '1.5rem', fontSize: '15px'}}>
                    Your goal is to make a page that looks exactly like this one, and has the ability to create 
                    H1 text simply by typing text, and hitting enter.
                </p>
                <div style={{width: '100%', marginTop: '3.5rem'}}>
                    <Editor />
                </div>
            </div>
        </div>
    )
}

export default Main