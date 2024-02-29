import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';
import { ConnectionPage } from './pages';
import { DiscussionPage} from './pages'
import {JournalPage} from './pages';
import {QuestionPage} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<LandingPage/>} />
        <Route path='/connection' element={<ConnectionPage/>}/>
        <Route path='/discussion' element={<DiscussionPage/>}/>
        <Route path='/journal' element={<JournalPage/>}/>
        <Route path='/question' element={<QuestionPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
