import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
const Hello = () => {
    return <div>hello</div>;
}   // 아래에 App을 Hello로 바꾸면 루트 컴포넌트가 변경됨
*/

createRoot(document.getElementById('root')).render(
    <App />
)
