import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainPage({userName}) {
    const navigate = useNavigate();  
    
    // Подсказка 25:25
    
    useEffect(()=>{
         if (!userName) {
            navigate('/reg');
         }
    
    })
  return (
    <div>q{userName}</div>
  )
}
