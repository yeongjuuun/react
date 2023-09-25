import './App.css';
import { Route ,Routes ,useNavigate } from "react-router-dom";
import { useState } from 'react'


function App() {

    const navigate = useNavigate()

    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');

    const saveUserId = event => {
        setId(event.target.value);
    };

    const saveUserPw = event => {
        setPw(event.target.value);
    };

    const login = () => {
        
        if(idValue=='syj'&&pwValue==1234){
            console.log('성공')
            navigate('/page');
        }else{
            alert("잘못된 아이디 혹은 비밀번호")
        }
    }

    const newAccount = () =>{
        navigate('/join');
    }

return (
        <div className='App'>
            <input className='userId' type='text' placeholder='Id'
            value={idValue} onChange={saveUserId}></input>
            <input className='pwd' type='password' placeholder='Password'
            value={pwValue} onChange={saveUserPw}></input>

            <a onClick={newAccount}>new account</a>
            <button onClick={login}>login</button>
        <Routes>
            <Route path="/page" element={<page />}></Route>
            <Route path="/join" element={<join />}></Route>
        </Routes>
        </div>
);
}



export default App;
