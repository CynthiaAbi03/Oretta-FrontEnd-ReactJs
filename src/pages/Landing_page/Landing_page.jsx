import React from 'react'
import './Landing_page.css'
import women_circle from '../../Assests/Images/women_circle.png'
import FirstNavBar from '../../components/1st_Navbar/FirstNavBar'
import journal_icon from '../../Assests/Images/journal.png'
import discussion_icon from '../../Assests/Images/discussion.png'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'


const Landing_page = () => {
  return (
    <div className='body-landingpage'>
      <FirstNavBar/>
      
      <section className='landingpage-section'>
        <div className="landingpage">

          <p className='introtext'>
            Bienvenue à Oretta - l'oreille attentive. Dans cet espace,
            votre voix trouve son écho. <br />
            C'est notre havre de paix pour poser des questions, 
            partager et grandir ensemble en tant que communauté. <br />
            Rejoignez-nous maintenant.
          </p>

          <div className='image-women'>
            <img src={women_circle} alt="" />
          </div>

        </div>

        <div className="main-section-landingpage">

          <div className="journal-section">

              <div className='image'>
                <img className='icon' src={journal_icon} alt="" />
              </div>
              <div className='title'>Journal</div>
              <p className='text-body'>
                Explorez nos articles et restez informée 
                des activités du club. Notre Journal est
                votre source d’inspiration pour tout ce
                qui concerne le leadership et encore plus.
              </p>
              <div className='journal-button'>
                <Link to='/connection'><button>Découvrir plus</button></Link>
              </div>
          </div>

          <div className="discussion-section">

            <div className='image'>
                <img className='icon' src={discussion_icon} alt="" />
              </div>
              <div className='title'>Forum de Discussion</div>
              <p className='text-body'>
              Posez toutes vos questions,
              engagez-vous dans des conversations enrichissantes 
              et connectez vous avec des nombreuses personnes .
              </p>
              <div className='discussion-button'>
                <Link to='/connection'><button>Découvrir plus</button></Link>
              </div>

          </div>

        </div>
      </section>

      <Footer/>
        


    </div>
  )
}

export default Landing_page