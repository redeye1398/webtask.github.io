import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
// import ParticlesBg from "particles-bg";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));







function App() {

  
  return (
     
    <>
     
          
     <Suspense fallback={null}>
     {/* <ParticlesBg color="#FFFAFA"
       type="cobweb" bg={true} /> */}
      
      
        
         <GlobalStyle />
         
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
       
         
        <Home />
       
        <Footer />
        
      </Suspense>

    </>
  );
}

export default App;
