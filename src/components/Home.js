import React, { Component , useState} from 'react';
import Clock from "../components/Clock";
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'; 
  
// 6992px

var backgroundImage = {
    width: "100%",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.png'})`,
    backgroundSize: '100% 100%',
    //  position: 'relative',
    //  backgroundSize: 'contain',
  };

  var backgroundHistory = {
    width: "100%",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/window.png'})`, 
   backgroundSize: '100% 100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  };
  var backgroundTicket = {
    width: "100%",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/sec3.png'})`,
    backgroundSize: '100% 100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  var backgroundPool = {
    width: "100%",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/sec5.png'})`, 
    backgroundSize: '100% 100%',
  };
  var backgroundQus = {
    width: "100%",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/lastsec.png'})`, 
    backgroundSize: '100% 100%',
  };
  var backgroundMenu = {
    width: "335px",
    height: "auto",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/Group11381.png'})`, 
    backgroundSize: 'cover',
  };

class Home extends Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      ModalShow :true,
    };
  }

    render() {
     
        const openNav = ()=> {
          document.getElementById("mySidenav").style.width = "335px";
          document.querySelector('#mySidenav').style.visibility = 'visible';
        
          }
        
        const closeNav = ()=> {
          document.getElementById("mySidenav").style.width = "0";
        } 
// Finished round and History section Scroll and tab
        // const  ControlledTabs = () => {
        //   const [key, setKey] = useState('Finished');
        
        //   return (
        //     <Tabs
        //       id="controlled-tab-example"
        //       activeKey={key}
        //       onSelect={(k) => setKey(k)}
        //       className="mb-3"
        //     >
        //       <Tab eventKey="Finished" title="Finished Rounds">
        //                      <div className = 'finishround'>
        //                          <h1 className = 'prizePot'>Prize Pot</h1>
        //                               <h1 className = 'dolarhistory'>$242,368</h1>
        //                               <div className = 'roundClass'>
        //                                        <h1 className = 'round61'>Round: 61</h1>
        //                                       <img className = 'Group8623' src = './image/Group8623.png' alt = 'img'/>
        //                                       <img  className = 'Group11244' src = './image/Group11244.png' alt = 'img'/>
        //                                       <img   className = 'Group8645' src = './image/Group8645.png' alt = 'img'/>
        //                               </div>
        //                               <h1 className = 'drawn'>Drawn 2 Aug 2021 9:00</h1>
        //                               <div className = 'winningNumber'>
        //                                     <img  className = 'Group11253' src = './image/Group11253.png' alt = 'img'/>
        //                                     <h1>Winning Numbers</h1>
        //                                </div>
        //                                <div className = 'winningButton'>
        //                                       <img  className = 'Group11401' src = './image/Group11396.png' alt = 'img'/>
        //                                       <img  className = 'Group11401' src = './image/Group11397.png' alt = 'img'/>
        //                                       <img  className = 'Group11401' src = './image/Group1399.png' alt = 'img'/>
        //                                       <img  className = 'Group11401' src = './image/Group21398.png' alt = 'img'/>
        //                                       <img  className = 'Group11401' src = './image/Group71400.png' alt = 'img'/>
        //                                </div>
        //                          </div>
        //       </Tab>
        //       <Tab eventKey="History" title="Your History">
        //              <div className = 'container history-section'> 
        //              <div className = 'history'> 
        //                  <table class="table table-borderless">
        //                          <thead className = 'history-heading'>
        //                                 <tr>
        //                                   <th scope="col">Round</th>
        //                                   <th scope="col">Transaction</th>
        //                                   <th scope="col">Winner</th>
        //                                   <th scope="col">Ticket</th>
        //                                   <th scope="col">Reward</th>
        //                                   <th scope="col">Result</th>                 
        //                                 </tr>
        //                           </thead>
        //                               <tbody className = 'history-body'>
        //                                 <tr>
        //                                   <th scope="row">61</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>268941</td>
        //                                   <td>628491</td>
        //                                   <td>$18756</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">61</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>286942</td>
        //                                   <td>268941</td>
        //                                   <td>$128</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>268941</td>
        //                                   <td>330987</td>
        //                                   <td>$21569</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>286942</td>
        //                                   <td>330987</td>
        //                                   <td>$142</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>268941</td>
        //                                   <td>628491</td>
        //                                   <td>$18756</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>-</td>
        //                                   <td>268941</td>
        //                                   <td>-</td>
        //                                   <td>No Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>-</td>
        //                                   <td>996032</td>
        //                                   <td>-</td>
        //                                   <td>No Reward</td>
        //                                 </tr>
        //                                 <tr>
        //                                   <th scope="row">60</th>
        //                                   <td>0x2544....5689</td>
        //                                   <td>286942</td>
        //                                   <td>996032</td>
        //                                   <td>$128</td>
        //                                   <td>Reward</td>
        //                                 </tr>
        //                               </tbody>
        //                   </table> 
        //             </div>
        //           </div>
        //       </Tab>
        //     </Tabs>
        //   );
        // }
        // counter  increament and decreament  
        const  ButtonIncrement = (props) =>{
  
          return (
            <img  className = 'increament' src = './image/Group8572.png' alt = 'img' onClick={props.onClickFunc} />
          )
       }
       const  ButtonDecrement = (props) =>{
         
         return (
             <img  className = 'decreament' src = './image/Group8563.png' alt = 'img' onClick={props.onClickFunc} />
         )
       }
       const  Display = (props) => {
         return (
           <label>{props.message}</label>
         )
       }
      const  Counter = () =>{
          const [counter, setCounter] = useState(1);
          const incrementCounter = () => setCounter(counter + 1);
          let decrementCounter = () => setCounter(counter - 1);
          if(counter<=1) {
            decrementCounter = () => setCounter(1);
          }
          return (
            <div className = 'increament-decreament'> 
              < ButtonDecrement onClickFunc={decrementCounter}/>
              <Display message={counter}/> 
              <ButtonIncrement onClickFunc={incrementCounter}/>
            </div>
          );
        }
        const showModel =()=>{
              document.querySelector('.buyticketpop').style.display = 'block';
              document.querySelector('.buyticketpop').style.transition = ".25s";
        }

        const closeBotton = () =>{
          document.querySelector('.buyticketpop').style.display = 'none';
          document.querySelector('.buyticketpop').style.transition = ".25s"
        }
        return (
          <div  className = 'body' style = {backgroundImage}>
                    <div className = 'container'>
                         {/* Header Menu */}
                         <div className  = 'header-menu mt-3'> 
                            <div className = 'logoclass'>
                                 <img src = './image/logo.png' alt = 'img'/>
                             </div> 
                             <div className = 'menuClass'>
                                      <span style={{cursor:'pointer'}} onClick={openNav}><img src = './image/menuber.png' alt = 'img'/></span> 
                             </div >
                                   <div id="mySidenav" className="sidenav" style = {backgroundMenu}>
                                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                         <div class="dropdown">
                                               <a href="#" class="dropbtn">Games <span><img className = 'png-transparent' src = './image/pngwing.com.png' alt = 'img'/> </span></a>
                                                  <div class="dropdown-content">
                                                       <a href="#">Lottery</a>
                                                 </div>
                                          </div>
                                        <a href="#">Team</a>
                                        <a href="#">Learn More</a>
                                        <a href="#">Dashboard</a>
                                        <a href="#">Contacts Us</a>

                                        <div className = 'menuButton'>
                                            <a href = 'https://t.me/delottoglobal'><img className = 'Group1140' src = './image/Group11401.png' alt = 'img'/></a>   
                                            <a href = 'https://twitter.com/delottoglobal'><img className = 'Group1140' src = './image/Group11400.png' alt = 'img'/>   </a>
                                            <a href = 'https://github.com/Delotto'><img className = 'Group1140' src = './image/Group113977.png' alt = 'img'/> </a>
                                            <a href = 'mailto:  delotto@protonmail.com'> <img className = 'Group1140' src = './image/Group113988.png' alt = 'img'/></a>
                                            <a href = 'https://avascan.info/'>  <img className = 'Group1140' src = './image/Group113999.png' alt = 'img'/>  </a>
                                        </div>
                                  </div>
                            </div>    

                         {/* After header menu      */}
                         <div className = 'after-header-section text-center pt-5'>
                              <div className = 'timeLeft'>
                                   <div className = 'ttimer'>
                                      <h1 style = {{color:'white'}}>Time Left : </h1>
                                      <h1 className = 'timer' style = {{color:'#ce4721',paddingLeft: '15px'}}><Clock/></h1>
                                   </div>
                                   <div className ='dolerTime'>
                                       <img src = './image/Group1123.png' alt = 'img'/>
                                       <h1 className = 'dolarClass'>$342,338</h1>
                                   </div>
                              </div>
                              <div className ='buyTicketButton'>
                                       <img src = './image/Group8540.png' alt = 'img'/>
                                       <h1 className = 'buyTicketText'  onClick = {showModel}>Buy Tickets</h1>
                              </div>
                         </div>
{/* buy ticket Modal */}

                  <div className = 'buyticketpop'>  
                              <div className = 'buypopImage'>
                                           <img  className = 'closeBotton' onClick = {closeBotton} src = './image/Group8722.png' alt = 'img'/> 
                                               <h1 className = 'buyticketh1'>Buy Tickets</h1>
                                            <img className = 'Group21396' src = './image/Group21396.png' alt = 'img'/> 
                                        <Counter/>
                                <div className = 'insufficient'>
                                    <h1 className = 'insufficienth1'> Insufficient Avax Balance</h1>
                                    <h1 className = 'insufficiendeth1'>DE LOTTO balance: 300.000 </h1>
                                </div>
                                <div className = 'costde'>
                                  <h1 className = 'costh1'>Cost(Avax)</h1>
                                  <h1 className = 'costprice'>$9.00</h1>
                                </div>
                                <h1 className = 'buyBotton'>BUY</h1>
                            </div>
                </div>

                         {/* Your History section  */}
                         <div className = "history-Section  text-center mt-5" style = {backgroundHistory}>
                                      {/* <ToggleGroup /> */}
                                      {/* <ControlledTabs/> */}
                            <div className = 'finishround'>
                              <div className = 'finsh text-center'><h1>Finished Rounds</h1></div>
                               <h1 className = 'prizePot'>Prize Pot</h1>
                                      <h1 className = 'dolarhistory'>$242,368</h1>
                                     <div className = 'roundClass'>
                                              <h1 className = 'round61'>Round: 61</h1>
                                            <img className = 'Group8623' src = './image/Group8623.png' alt = 'img'/>
                                             <img  className = 'Group11244' src = './image/Group11244.png' alt = 'img'/>
                                             <img   className = 'Group8645' src = './image/Group8645.png' alt = 'img'/>
                                    </div>
                                    <h1 className = 'drawn'>Drawn 2 Aug 2021 9:00</h1>
                                       <div className = 'winningNumber'>
                                            <img  className = 'Group11253' src = './image/Group11253.png' alt = 'img'/>
                                          <h1>Winning Numbers</h1>
                                      </div>
                                     <div className = 'winningButton'>
                                             <img  className = 'Group11401' src = './image/Group11396.png' alt = 'img'/>
                                              <img  className = 'Group11401' src = './image/Group11397.png' alt = 'img'/>
                                              <img  className = 'Group11401' src = './image/Group1399.png' alt = 'img'/>
                                              <img  className = 'Group11401' src = './image/Group21398.png' alt = 'img'/>
                                              <img  className = 'Group11401' src = './image/Group71400.png' alt = 'img'/>
                                      </div>
                                  </div>
 
                               </div>
                      </div>
                {/* Ticket Section */}

                <div className  = 'ticket-section' style = {backgroundTicket}>
                             <div className = 'container'> 
                                    <div className = 'yourTicket text-center pt-5 pb-5'> 
                                          <div className = "ticketImage">
                                                <h1>Your Tickets</h1>
                                               <img  className = 'Group12533' src = './image/Group12533.png' alt = 'img'/>
                                          </div>
                                          <h1 className = 'youhabe'>You have 0 tickets this round</h1>
                                          <h1 className = 'youwin'>You can win this prize!</h1>
                                          <div className = 'buydeLotto'>
                                               <a href = 'https://app.pangolin.exchange/'><h1 className = 'buydeText'>Buy De Lotto</h1></a>
                                                  <img  src = './image/Group11221.png' alt = 'img'/>
                                          </div>

                                           
                                    </div>
                             </div>
                </div>
                <div className = 'howPlay-section text-center pt-2 pb-2'>
                    <h1 className = 'playh1'>How to Play?</h1>
                    <p className = 'erty'>If the digits on your tickets match the winning nummbers in the random order, you win the portion of the prize pool Simple!</p>
                        <div className = 'playStar'>
                                  <img  src = './image/Group11235.png' alt = 'img'/>
                                  <p>Hold <span className = '50Delotto'>300,000 De Lotto </span> tokens in your wallet for buying tickets</p>
                                  <img  src = './image/Group11267.png' alt = 'img'/>
                        </div>
                        <div className = 'cloudSection'>
                               <div className = "cloudClass">
                                       <img className = 'cludImge' src = './image/Group1303.png' alt = 'img'/>
                                       <h1 className = 'cloudh1'>Buy Tickets</h1>
                                       <p className = 'cloudp'>Prices are set when the round starts, equal to 0,1 Avax per ticket.</p>
                               </div>
                               <div className = "cloudClass">
                                       <img className = 'cludImge' src = './image/Group1303.png' alt = 'img'/>
                                       <h1 className = 'cloudh2'>Wait for Draw</h1>
                                       <p className = 'cloudp'>There are two draws every day: one every 12 hours. </p>
                               </div>
                               <div className = "cloudClass">
                                       <img className = 'cludImge' src = './image/Group1303.png' alt = 'img'/>
                                       <h1 className = 'cloudh1'>Check Prizes</h1>
                                       <p className = 'cloudp'>Once the round's over, check to see if you've won! </p>
                               </div>
                         </div>
                </div>
                <div className = 'prizePool-section text-center' style = {backgroundPool}> 
                           
                                <div className = 'prizePoll'> 
                                <h1 className = 'allocations'> Prize Pool Allocations</h1>
                                       <img className = 'poolImge' src = './image/Group11398.png' alt = 'img'/> 
                                       <div className = 'Group11399'>
                                         <div className = 'matchhwr'>
                                            <h1 className = 'match05'>Matches 5</h1>
                                            <h1 className = 'seventy%'>70%</h1>
                                         </div>
                                         <img className = 'poolGroup11399' src = './image/Group11399.png' alt = 'img'/>   
                                        </div> 
                                        <div className = 'Group125099'>
                                            <div className = 'Group12o99'>
                                                 <div className = 'match0523'>
                                                    <h1 className = 'match04'>Matches 4</h1>
                                                     <h1 className = 'ten%'>10%</h1>
                                                 </div>
                                                <img className = 'poolImge533' src = './image/Group12533.png' alt = 'img'/> 
                                            </div> 
                                            <div className = 'Group52o99'>
                                              <div className = 'match751'>
                                                   <h1 className = 'matchde'>De lotto</h1>
                                                    <h1 className = 'tenty%'>20%</h1>
                                              </div>
                                                <img className = 'poolImge533' src = './image/Group12533.png' alt = 'img'/>      
                                            </div>
                                        </div>       
                                </div> 
                    </div>

              <div className = 'prizeFund-section'>
                <div className = 'container'>
                   <div className = 'prizeFunds pt-5'>
                              <h1 className = 'PrizeFounds'>Prize Founds</h1>
                              <img className = 'Group113963' src = './image/Group113963.png' alt = 'img'/> 
                              <img className = 'Group1109.png' src = './image/Group11090.png' alt = 'img'/>
                              <img className = 'Group11092.png' src = './image/Group11090.png' alt = 'img'/>
                              <p className = 'bushPaid'>80% of the <span style = {{color:'#ce4721'}}> Avax </span>  paid by people buying tickets that round goes back into the prize pools. </p>   
                              <p className = 'afterPaid'>After every round,if nobody wins in one of the prize brackets,the unclaimed <span style = {{color:'#ce4721'}}> Avax </span>  for that brackets rolls over into the next round and redistributed among the prize pools. </p>  
                    </div>
                </div>
               </div> 

               {/* Our team Sections */}
               <div className = 'ourTeam-sections text-center mt-5'>
               <h1 className = 'ourteams'>Our Team</h1>
                 <div className = 'container'>
                   <div className = 'row'>
                     <div className = 'col-md-6'>
                       <div className = 'ourTeam01'>
                        <div className = 'team0101'>
                           <img className = '5e6888f56d3b380006f21fdd' src = './image/5e68817b6d3b380006f06bcb.png' alt = 'img'/>   
                           <img className = 'Group11336' src = './image/Group11336.png' alt = 'img'/> 
                         <a href = 'https://www.linkedin.com/in/harold-nelson-5818a4210/'>
                             <div className = 'teamName'>
                               <h1 className = 'teamName1'>Harold Nelson</h1>
                              <h1 className = 'titlemember1'> CEO</h1>
                            </div>
                            </a>
                          <a href = 'https://www.linkedin.com/in/harold-nelson-5818a4210/'><img className = 'linkedin' src = './image/linkedin.png' alt = 'img'/>  </a> 
                        </div>
                      </div>
                     </div>
                     <div className = 'col-md-6'>
                       <div className = 'ourTeam01'>
                        <div className = 'team0101'>
                        <img className = '5e6888f56d3b380006f21fdd' src = './image/5e6889156d3b380006f22703.png' alt = 'img'/>   
                           <img className = 'Group11336' src = './image/Group11336.png' alt = 'img'/> 
                        <a href = 'https://www.linkedin.com/in/matt-hall-31b963210/'>
                           <div className = 'teamName'>  
                             <h1 className = 'teamName2'> Matt Hall </h1>
                             <h1 className = 'titlemember2'> Blockchain Developer</h1>
                            </div>
                          </a>
                          <a href = 'https://www.linkedin.com/in/matt-hall-31b963210/'><img className = 'linkedin' src = './image/linkedin.png' alt = 'img'/> </a>
                        </div>
                      </div>
                     </div>
                   </div>
                   <div className = 'row mt-5'>
                     <div className = 'col-md-6'>
                       <div className = 'ourTeam01'>
                        <div className = 'team0101'>
                           <img className = '5e6888f56d3b380006f21fdd' src = './image/5e6888f56d3b380006f21fdd.png' alt = 'img'/>   
                           <img className = 'Group11336' src = './image/Group11336.png' alt = 'img'/>  
                        <a href = 'https://www.linkedin.com/in/steve-haley-887993210/'>
                           <div className = 'teamName'> 
                               <h1 className = 'teamName3'>Steve Haley</h1>
                              <h1 className = 'titlemember3'> Full Stack Developer</h1>
                           </div>
                           </a>
                         <a href = 'https://www.linkedin.com/in/steve-haley-887993210/'> <img className = 'linkedin' src = './image/linkedin.png' alt = 'img'/>   </a>
                        </div>
                      </div>
                     </div>
                     <div className = 'col-md-6'>
                       <div className = 'ourTeam01'>
                        <div className = 'team0101'>
                        <img className = '5e6888f56d3b380006f21fdd' src = './image/60ce6bfeb1f6fc000f922cef.png' alt = 'img'/>   
                           <img className = 'Group11336' src = './image/Group11336.png' alt = 'img'/> 
                           <a href = 'https://www.linkedin.com/in/aaron-bell-9a0960210/'> 
                           <div className = 'teamName'>
                                <h1 className = 'teamName4'>Aaron Bell</h1>
                                <h1 className = 'titlemember4'> CMO-Puppy Fnzo</h1>
                           </div> 
                          </a>
                          <a href = 'https://www.linkedin.com/in/aaron-bell-9a0960210/'><img className = 'linkedin' src = './image/linkedin.png' alt = 'img'/>   </a>
                        </div>
                      </div>
                     </div>
                   </div>

                 </div>
               </div>

               <div className = 'question-section mt-5' style = {backgroundQus}>
                  <div className = 'row pt-5'> 
                       <div className = 'col-md-6 pt-5'>
                           <img className = 'Group11368' src = './image/Group11368.png' alt = 'img'/>   
                       </div>
                       <div className = 'col-md-6 Stills'>
                           <h1 className = 'quesh1'>Still got questions?</h1>
                           <p className = 'quesp'>Check our article how to play the  <span > <a  style = {{color:'white'}} href = "https://delotto.medium.com/">DELOTTO!</a></span></p>
                       </div>
                  </div>
               </div>
               <div className = "footer text-center"> 
                     <a href = 'https://t.me/delottoglobal'><img className = 'Group11401' src = './image/Group11401.png' alt = 'img'/></a>   
                     <a href = 'https://twitter.com/delottoglobal'><img className = 'Group11401' src = './image/Group11400.png' alt = 'img'/> </a>
                     <a href = 'https://github.com/Delotto'><img className = 'Group11401' src = './image/Group113977.png' alt = 'img'/> </a>
                     <a href = 'mailto:  delotto@protonmail.com'> <img className = 'Group11401' src = './image/Group113988.png' alt = 'img'/></a>
                     <a href = 'https://avascan.info/'>  <img className = 'Group11401' src = './image/Group113999.png' alt = 'img'/>  </a>
                     <h1 className = 'allright' >All rights reserved DE LOTTO</h1>    
               </div>
                   
          </div>

        );
    }
}

export default Home;