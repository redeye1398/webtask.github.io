import gsap from "gsap";
import {  useRef   } from "react";
import styled from "styled-components";


import { ScrollTrigger } from "gsap/ScrollTrigger";


import "../Services/index.css";
// import Cone from "../../assets/3dtriangle.png";


import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #C1F6ED; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  // padding-top: 20rem;
`;

// const Background = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 100vw;
//   height: 85vh;
//   z-index: -1;
//   background-color: #C1F6ED;
//   background-size: auto 100vh;
//   background-repeat: no-repeat;
// `;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

// const Line = styled.span`
//   border-left: 4px solid var(--background);
//   height: 15rem;
//   margin-top: 2rem;
//   border-radius: 20px 20px 0 0;
// `;

// const Triangle = styled.span`
//   width: 0;
//   height: 0;
//   border-left: 1.2rem solid transparent;
//   border-right: 1.2rem solid transparent;
//   border-top: 2rem solid var(--background);
// `;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  //const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // useEffect(() => {
  //   const element = ref.current;
  //   ////
  //   const mq = window.matchMedia("(max-width: 48em)");
  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.getElementById("services"),

  //       start: "top top+=180",

  //       end: "bottom bottom",

  //       pin: element,
  //       pinReparent: true,
  //     },
  //   });
  //   t1.fromTo(
  //     document.getElementById("line"),

  //     {
  //       height: "15rem",
  //     },
  //     {
  //       height: "3rem",
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: document.getElementById("line"),
  //         start: "top top+=200",
  //         end: "bottom top+=220",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   revealRefs.current.forEach((el, index) => {
  //     // console.log(el.childNodes);
  //     if (mq.matches) {
  //       t1.from(
  //         el.childNodes[0],

  //         {
  //           x: -300,
  //           opacity: 0,
  //           duration: 2,

  //           ease: "power2",
  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el,
  //             start: "top center+=200",
  //             end: "bottom bottom-=100",
  //             scrub: true,
  //             snap: true,
  //             //
  //             // toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //         .to(el.childNodes[1], {
  //           transform: "scale(0)",

  //           ease: "power2.inOut",

  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el.childNodes[1],
  //             start: "top center",
  //             end: "bottom center",
  //             scrub: true,
  //             snap: true,

  //             // toggleActions: "play none none reverse",
  //           },
  //         })
  //         .from(
  //           el.childNodes[2],

  //           {
  //             y: 400,

  //             duration: 2,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top center+=100",
  //               end: "bottom bottom-=200",
  //               scrub: true,
  //               snap: true,
  //               //
  //               // toggleActions: "play none none reverse",
  //             },
  //           }
  //         )
  //         .to(
  //           el,

  //           {
  //             opacity: 0,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top top+=300",
  //               end: "center top+=300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //     } else {
  //       t1.from(
  //         el.childNodes[0],

  //         {
  //           x: -300,
  //           opacity: 0,
  //           duration: 2,

  //           ease: "power2",
  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el,
  //             start: "top center+=100",
  //             end: "bottom bottom-=200",
  //             scrub: true,
  //             snap: true,
  //             //
  //             // toggleActions: "play none none reverse",
  //           },
  //         }
  //       )
  //         .to(el.childNodes[1], {
  //           transform: "scale(0)",

  //           ease: "power2.inOut",

  //           scrollTrigger: {
  //             id: `section-${index + 1}`,
  //             trigger: el.childNodes[1],
  //             start: "top center",
  //             end: "bottom center",
  //             scrub: true,
  //             snap: true,

  //             // toggleActions: "play none none reverse",
  //           },
  //         })
  //         .from(
  //           el.childNodes[2],

  //           {
  //             y: 400,

  //             duration: 2,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top center+=100",
  //               end: "bottom bottom-=200",
  //               scrub: true,
  //               snap: true,
  //               //
  //               // toggleActions: "play none none reverse",
  //             },
  //           }
  //         )
  //         .to(
  //           el,

  //           {
  //             opacity: 0,

  //             ease: "power2",
  //             scrollTrigger: {
  //               id: `section-${index + 1}`,
  //               trigger: el,
  //               start: "top top+=200",
  //               end: "center top+=300",
  //               scrub: true,
  //             },
  //           }
  //         );
  //     }
  //   });
  // }, []);

  // const addToRefs = (el) => {
  //   if (el && !revealRefs.current.includes(el)) {
  //     revealRefs.current.push(el);
  //   }
  // };
  return (
    
    <ServiceSection id="services">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,165.3C960,139,1200,117,1320,106.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
      {/* //<Background ref={ref}> */}
        <Title className="title">What We Do</Title>
        {/* <Line id="line" />
        <Triangle id="triangle" /> */}
        
      
      {/* </Background> */}
      <Content>
        <TextBlock
          topic="Product"
          title={<h1>We provide below products</h1>}
          subText={
            <h5> 
        
    
             
              </h5>
          }
          
        />
        
        <OBJ>
          {/* <img src={Capsule} alt="Capsule Object" width="400" height="400" /> */}
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>

      {/* <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title={<h1>We build award winning Designs</h1>}
          subText={
            <h5>
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title={<h1>We Develope high quality Web & App</h1>}
          subText={
            <h5>
              We build appropriate solution to develope your website & app with
              best tools available
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content> */}
      
<div class="body">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>
  <div class="card card-one">
    <div class="profileImg first"></div>
    <p>The Katmap’s  Brillo Hair oil is Anti Hair fall oil and it has Rich formulation of Herbs . which are exactly needed for our hair health.
Mainly Brillo Hair oil formedwith  Erand oil , Maka , Aamlaki , Neem etc. So there god gifted herbs are mainly essential for to promote Hair regrowth , Reduce hair fall , Prevent Greying of hair the, Maintains healthy scalp</p>
    {/* <ul>
      <li><a href=""><i class="fab fa-instagram"></i></a></li>
      <li><a href=""><i class="fab fa-github"></i></a></li>
      <li><a href=""><i class="fab fa-stack-overflow"></i></a></li>
    </ul> */}
  </div>
  <div class="card card-two">
    <div class="profileImg second"></div>
    <p>
    Sora Lotion is a balanced blend of natural herbal extracts specifically chosen for their effectiveness in the treatment of Psoriasis. It is formulated to soothe chronically dry skin for the entire body which protects and enhances skin’s natural moisture. It is suitable for skin prone to eczema, psoriasis and dermatitis.

    </p>
    {/* <ul>
      <li><a href=""><i class="fab fa-instagram"></i></a></li>
      <li><a href=""><i class="fab fa-github"></i></a></li>
      <li><a href=""><i class="fab fa-stack-overflow"></i></a></li>
    </ul> */}
  </div>
 

</div>
      
    </ServiceSection>
    
  );
  
};

export default Services;
