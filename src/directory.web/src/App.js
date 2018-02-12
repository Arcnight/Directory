import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'

import Content from 'components/home/Content.js'
import Footer from 'components/common/Footer.js'
import NavBar from 'components/common/NavBar.js'
import SidebarMenu from 'components/common/SidebarMenu.js'

class App extends React.Component {
  render() {
    return (
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>        
        <div className="body">
          <div className="content">
            <Content />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>      
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Fabric>
    );
  }
}

export default App;