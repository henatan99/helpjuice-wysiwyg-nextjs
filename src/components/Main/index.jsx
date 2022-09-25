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
                <h1>
                    Front-end developer test project
                </h1>
                <hr></hr>
                <p style={{color: '#636a76', lineHeight: '1.5rem', fontSize: '15px'}}>
                    Your goal is to make a page that looks exactly like this one, and has the ability to create 
                    H1 text simply by typing text, and hitting enter.
                </p>
                <div style={{width: '100%'}}>
                    <Editor />
                </div>
            </div>
        </div>
        
    )
}

export default Main