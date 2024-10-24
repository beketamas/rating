import star from '../../images/icon-star.svg'
import thankYou from '../../images/illustration-thank-you.svg'
const Rating = () => {
  return (
    <>
        <div className="container">
            <div className='star'>
                <img src={star}></img>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='buttonContainer'>
                {[1,2,3,4,5].map((num)=>(
                    <button type='button'>{num}</button>
                ))}
            </div>
            <button type='submit' className='submit'>submit</button>
        </div><p></p>
        <div className="container thankYou">
            <img src={thankYou}/>
            <p className='selectedRate'>You selected 4 out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    </>
  )
}

export default Rating