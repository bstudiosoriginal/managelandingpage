import "./App.css";
import manageiconlogo from '../public/logo.svg'
import introillustration from '../public/illustration-intro.svg'
import { useState } from "react";
import Comment from "./components/Comment";
import iconHamburger from '../public/icon-hamburger.svg'
import facebook from '../public/icon-facebook.svg'
import instagram from '../public/icon-instagram.svg'
import pinterest from '../public/icon-pinterest.svg'
import twitter from '../public/icon-twitter.svg'
import youtube from '../public/icon-youtube.svg'

import { MediaQuery } from "./components/MediaQuery";

function App() {

  const [comments, __] = useState([{name: "Anisha Li", profile_img: '/avatar-anisha.png', comment: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"},
                                   {name: "Ali Bravo", profile_img: '/avatar-ali.png', comment: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"},
                                   {name: "Richard Watts", profile_img: '/avatar-richard.png', comment: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"},
                                   {name: "Shanai Gough", profile_img: '/avatar-shanai.png', comment: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"}])
  const isMobile = MediaQuery({max_width: 900})
  const [information, _] = useState([{
                                      number: "01", 
                                      title: "Track company-wide progress", 
                                      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
                                     },
                                     {
                                      number: "02",
                                      title: "Advanced built-in reports",
                                      text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
                                     },
                                     {
                                      number: "03",
                                      title: "Everything you need in one place",
                                      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
                                     }
                                    ])

  return (
    <div className="main">
      <nav>
        <div className="logosection">
          <img src={manageiconlogo} alt='logo'></img>
        </div>
        {isMobile && <div className="navitems">
          <a>Pricing</a>
          <a>Product</a>
          <a>About Us</a>
          <a>Careers</a>
          <a>Community</a>
        </div>}
        <div className="moreinfo">
        {!isMobile ? 
          <img src={iconHamburger}/>: 
          <button>Get Started</button>
          }
        </div>
      </nav>
      <br></br>
      <section>
        <div className="summary">
          <div className="textcol">
            <h1>Bring everyone together to build better products.</h1>
            <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button>Get Started</button>
          </div>
          <img alt="summary of page" src={introillustration}></img>
        </div>
      </section>
      <br></br>
      <br></br>
      <section className="midsection">
        <div className="textcol2">
          <h2>What’s different about Manage?</h2>
          <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </div>
        <div className="textcol3">
          {information.map(
            (info) => 
                      <div className="textlist">
                        <div className="numbertitle">
                          <button>{info.number}</button>
                          <h5>{info.title}</h5>
                        </div>
                        <div className="textlisttextcontent">
                          
                          <p>{info.text}</p>
                        </div>
                      </div>
          )
          }
        </div>
      </section>
      <br/>
      <br/>
      <section className="midsection2">
        <h1>What they’ve said</h1>
        <div className="commentscontainer">
          {comments.map((comment_dict)=>
          <Comment profile_img={comment_dict.profile_img} name={comment_dict.name} comment={comment_dict.comment}/>)}
        </div>
        <div className="buttoncentered">
          <button>Get Started</button>
        </div>
        
      </section>
      <section>
        <div className="footerBar">
          <div className="orangebar">
            <div className="firstsectionorangebar">
            <h2>Simplify how your team works today.</h2>
            </div>
            <div className="secondsectionorangebar">
            <button>Get Started</button>
            </div>
           
          </div>
          <div className="blackbar">
            <div className="iconscontainer">
              <img className='logocls' src="/logowhite.svg"></img>
              <div className="socialmedia">
                <img src={facebook} alt="facebook"></img>
                <img src={youtube} alt="youtube"></img>
                <img src={twitter} alt="twitter"></img>
                <img src={pinterest} alt="pinterest"></img>
                <img src={instagram} alt="instagram"></img>
              </div>
            </div>
            <div className="listitems">
              <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
              </ul>
              <ul>
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="formsection">
              <div className="cardinputcontainer">
                <input placeholder="Updates in your inbox..." className="cardinput" name="email" key='email-registration'></input>
                <button>Go</button>
              </div>
              {isMobile && <p className="copyrightlabel">Copyright 2020. All Rights Reserved</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
