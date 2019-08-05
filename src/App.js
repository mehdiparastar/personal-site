import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar';
import Posts from './components/posts';
import Footer from './components/footer';
import Courses from './components/courses';
import Education from './components/edu';
import Skill from './components/skill';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container-fluid rtl'>
        <div className='row'>
          <Sidebar />
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <Switch>
              <Route path='/cources' component={Courses}/>
              <Route path='/education' component={Education}/>
              <Route path='/skill' component={Skill}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/' component={Posts}/>
            </Switch>            
          </main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
