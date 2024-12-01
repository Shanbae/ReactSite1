import './App.css';
import './_Layout.js';
import Layout from './_Layout.js';
import Contents from './Components/Contents';
import Content2 from './Components/Content2';
import Content3 from './Components/Content3';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="main-page">
   <Layout></Layout>
   <div className='content'>
   <Contents></Contents>
   <Content2></Content2>
   <Content3 />
   </div>
   <Footer />   
   </div>
  );
}

export default App;
