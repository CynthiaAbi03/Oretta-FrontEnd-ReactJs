import React from 'react'
import './QuestionPage.css'
import SecondNavBar from '../../components/2nd_Navbar/SecondNavBar'
import Footer from '../../components/Footer/Footer'

const QuestionPage = () => {
  return (
    <div className='body-questionpage'>
        <SecondNavBar/>
        <div className='questionpage'>
            <div className='heading'>Posez une Question Publique</div>

          <section className='question-section'>

            <div className="input-titlecontainer">

              <div className='title'>Titre</div>
              <div className='subtitle'>Soyez precis</div>
              <input type="text" className='title-input' name="" id="" placeholder='e.g Difficultes dans mes études'/>
              <div className='button-container1'>
                <button className=''>Suivant</button>
              </div>

            </div>

            <div className="input-titlecontainer">
                <div className='title'>Posez votre question </div>
                <textarea className='question-input' placeholder='e.g Je trouve les maths très complexe etc'  name="" id="" cols="30" rows="5"></textarea>
                {/* <input type="text" className='question-input' name="" placeholder='e.g Je trouve les maths très complexe etc' /> */}
                <div className='button-container1'>
                <button className=''>Envoyez</button>
              </div>
            </div>
          </section>
            
        </div>

        <Footer/>
    </div>
  )
}

export default QuestionPage