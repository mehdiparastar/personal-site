import React from 'react';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar';
import Posts from './components/posts';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container-fluid rtl'>
        <div className='row'>
          <Sidebar />
          <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
            <Posts />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
