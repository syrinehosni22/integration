import { useNavigate } from 'react-router-dom';

export default function Home (){
    const navigate = useNavigate();

    const goBack = ()=>{
        // go Back
        navigate(-1);
      }
      const next = () =>{
        // next
        window.location.href = "https://google.com"
      }
    return (
        <div>
             <div className='button-container'></div>
      <button className='primary-button'onClick={goBack}>Back</button>
      <button className='primary-button' onClick={next}>Forward</button>
        </div>
    )
}