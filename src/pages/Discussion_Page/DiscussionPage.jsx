import React from 'react'
import { useState } from 'react'
import SecondNavBar from '../../components/2nd_Navbar/SecondNavBar'
import './DiscussionPage.css'
import user_icon from '../../Assests/Images/user_icon.png'
// import like_icon from '../../Assests/Images/like-icon.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

// import Heart from "react-animated-heart";
import Heart from '@react-sandbox/heart'


const DiscussionPage = () => {


  const [active, setActive] = useState(false)

  const message_info = [
    {
      title: 'Titre Question',
      likes_count: '',
      question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, obcaecati veniam! Voluptatum ea quam illo eveniet, omnis neque quibusdam distinctio? Voluptates ullam, assumenda in impedit non earum ut maxime. Exercitationem.Repudiandae autem maxime amet quidem, nemo possimus fuga quos rerum impedit necessitatibus odio beatae eos? Magni alias, officiis asperiores ratione itaque quas possimus dolorum delectus perspiciatis at repellat nihil consequatur. Architecto error vel nulla atque ut aspernatur dolorem eaque delectus, neque modi impedit harum est ipsa, illum voluptas doloremque non numquam molestiae culpa in animi blanditiis. Eius reiciendis praesentium aut.'
    },
    {
      title: 'Titre Question',
      likes_count: '5 likes',
      question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, obcaecati veniam! Voluptatum ea quam illo eveniet, omnis neque quibusdam distinctio? Voluptates ullam, assumenda in impedit non earum ut maxime. Exercitationem.Repudiandae autem maxime amet quidem, nemo possimus fuga quos rerum impedit necessitatibus odio beatae eos? Magni alias'
    },
    {
      title: 'Titre Question',
      likes_count: '3 likes',
      question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, obcaecati veniam! Voluptatum ea quam illo eveniet, omnis neque quibusdam distinctio? Voluptates ullam, assumenda in impedit non earum ut maxime. Exercitationem.Repudiandae autem maxime amet quidem, nemo possimus fuga quos rerum impedit necessitatibus odio beatae eos? Magni alias, officiis asperiores ratione itaque quas possimus dolorum delectus perspiciatis at repellat nihil consequatur. Architecto error vel nulla atque ut aspernatur dolorem eaque delectus, neque modi impedit harum est ipsa, illum voluptas doloremque non numquam molestiae culpa in animi blanditiis. Eius reiciendis praesentium aut.'
    },
    {
      title: 'Titre Question',
      likes_count: '',
      question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, obcaecati veniam! Voluptatum ea quam illo eveniet, omnis neque quibusdam distinctio? Lorem ipsum dolor sit amet consectetur, adipisicing elit'
    }
  ]
  return (
    <div className='discussion-container'>
        <SecondNavBar/>

        <main className="discussionpage">

            <div className="section1">
              <div>Toutes <br /> les Questions</div>

              <div className="button-container">
                <Link to='/question'><button>Posez une Question</button></Link>
              </div>

            </div>
            <div className="main-body">
              {
                message_info.map((item, index) => {
                  return (
                    <div className="section2" key={index}>

                    <div className='question-info'>
                      <div className='icon-title'>
                          <img src={user_icon} alt="" />
                          <div className='question-title'>{item.title}</div>
                      </div>
                      <div className='like-count'>
                        <div className='likes-text'>{item.likes_count}</div>
                        <Heart
                          width={32}
                          height={32}
                          active={active === index}
                          onClick={() => setActive(index === active ? null : index)}
                        />
                      </div>
                    </div>
    
                    <div className="question-text">
                      {item.question}
                    </div>
    
                    </div>
                  )
                })
              }
             
            </div>
           

        </main>
        
        <Footer/>
    </div>
  )
}

export default DiscussionPage