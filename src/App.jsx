import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import MainContainer from './Components/MainContainer';
import Contact from './Components/Contact';
import { Suspense } from 'react';
import Loading from './Components/Loading';
import LocaleContext from './LocaleContext';
import i18n from './i18n';

const App = () => {

  const [ locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <div className='App'>
        <Suspense fallback={(<Loading/>)}>
          <NavBar />
          <MainContainer />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </LocaleContext.Provider>
  )
}

export default App;
