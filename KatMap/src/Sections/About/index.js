import styled from "styled-components";
import wave from "../../assets/waves.svg";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../About/index.css'; 
import rocket from "../../assets/rocket.jpg";
import human from "../../assets/human.jpg";
import hand from "../../assets/hand.jpg";

// const move = keyframes`
// 0% { transform: translateY(-5px)         }
//     50% { transform: translateY(10px) translateX(10px)        }
//     100% { transform: translateY(-5px)         }
// `;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
  color:var(--purple)
`;
// const Hand = styled.div`
//   position: absolute;
//   bottom: -1rem;
//   right: 0;

//   @media only Screen and (max-width: 40em) {
//     display: none;
//   }
// `;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
  color:black;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;


// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media only Screen and (max-width: 40em) {
//     flex-direction: column;
//   }
// `;

// const Rocket = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   width: 40%;
//   padding-bottom: 5rem;
//   animation: ${move} 2.5s ease infinite;
//   @media only Screen and (max-width: 40em) {
//     width: 50vw;
//     padding-bottom: 0;
//   }
// `;

// const Human = styled.div`
//   width: 50%;
//   position: absolute;
//   right: 0;
//   bottom: 100%;

//   @media only Screen and (max-width: 40em) {
//     display: none;
//   }
// `;
// const Text = styled.h4`
//   font-size: calc(0.5rem + 1vw);
//   line-height: 1.5;
//   color: rgba(0,0,0,0.65);
// `;
// const Circle = styled.span`
//   display: inline-block;
//   width: 1rem;
//   height: 1rem;
//   border-radius: 50%;
//   background-color: black;
//   margin-right: 0.5rem;
//   margin-top: 1rem;
// `;
// const AboutText = styled.div`
//   width: 50%;
//   position: relative;
//   @media only Screen and (max-width: 40em) {
//     width: 100%;
//   }
// `;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      {/* <Hand>
        <img src={hand} alt="" />
      </Hand> */}
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        {/* <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="600" />
          </Rocket>
          <AboutText>
            {/* <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human> 

            <Text>
            Serving with Herbs ??? ??? 
            that literally defines our existence. 
            Our Ayurvedic Expert Doctors have been serving in aesthetic industry Since 2015.
            As they are totally dedicated and devoted themselves in inventing and preparing something new but with an our Ancient touch. 
            As in their Daily practice Specially in Skin & Hair issues ,have been increased due to our life style , pollution , Bad eating habits , use of chemical products , Multi Lack of Exercise. etc.
             the originality of our Skin and Hair has been hampered  or we can say it has  changed drastically becoming worst day by day
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content> */}
         <Carousel  infiniteLoop="true"   autoPlay="300">
                <div>
                    <img src={rocket} alt=""/>
                    <p className="aboutWording">Our Ayurvedic Expert Doctors have been serving in aesthetic industry Since 2015.We are inventing preparing chemical free , paraben free products for our customers
                    </p>
                </div>
                <div>
                    <img src={human} alt="" />
                    <p className="aboutWording">Katmap???s most Important, Valuable and Research Based Product. 
                    Sora Lotion is Furished with  and eand oil, maka ,neem, Aamlaki which helps to remove dandruff, reduces hair fall, promotes hair regrowth, and Maintains quality & textures .</p>
                </div>
                <div>
                    <img src={hand} alt=""/>
                    
                    <p className="aboutWording">The Katmap???s  Brillo hair oil is anti hair fall oil and it has Rich formulation of herbs . which are exactly needed for our Hair Health.

Brillo hair oil is free from mineral oil and chemicals. Mainly Brillo hair oil formedwith  erand oil , maka , amlaki , neem etc. So there  god gifted herbs are mainly  essential for hairs promotes hair regrowth , reduce hair fall , Prevent greying of hair the, Maintains Healthy Scalp</p>
                </div>
            </Carousel>
      </Main>
      
    </AboutSection>
    
  );
};

export default About;
