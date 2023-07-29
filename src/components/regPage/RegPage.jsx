import { useNavigate } from 'react-router-dom';
import './RegPage.css'

export default function RegPage({setuserName}) {
    const navigate = useNavigate();

    const loginHandler = (e) =>{
        if(e.key === 'Enter'){
          setuserName(e.target.value);
          navigate('/')
        }

    }

  return (
    <div className="regPage">
        <input 
        onKeyDown={loginHandler}
        
        type="text" placeholder="Введите имя"/>
    </div>
  )
}
