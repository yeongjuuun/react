import './App.css';
import { useState } from "react";
import { Route ,Routes ,useNavigate } from "react-router-dom";



function Join() {

    const navigate = useNavigate()

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    } 
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }}


        const createAccount = () =>{
            navigate('/');
        }


    return (
        <div className='Join'>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>Name</label>
                <input type='text' value={Name} onChange={onNameHandler}/>
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <label>Confirm Password</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br />
                <button formAction='' onClick={createAccount}>
                    회원가입
                </button>
            </form>
            <Routes>
                <Route path="/" element={<app />}></Route>
            </Routes>
        </div>
    )
}

export default Join;
