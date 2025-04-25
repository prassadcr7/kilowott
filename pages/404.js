import Link from 'next/link'
import {ErrorDiv,SeeMoreButton} from '../components/styled/styled-components'
const ErrorPage = () => {
    return(
        <>        
            <ErrorDiv style={errorDivStyle}>
                <h1 style={{margin:0}}>404</h1>
                <h4 style={{margin:0}}>Page Not Found</h4>
                <button style={buttonStyle}><Link href="/">Go To Home</Link></button>
            </ErrorDiv>
        </>

    )
}

const errorDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    height: '100vh',
}
const buttonStyle = {
    height: '40px',
    width: '120px',
    background: '#000',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',   
}
export default ErrorPage



