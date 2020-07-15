import React from 'react';
import './App.css';
import styled from 'styled-components';

import { Github } from '@styled-icons/fa-brands';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 52px;
  color: #fff;
  background-color: var(--primary);
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  overflow: hidden;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  overflow: hidden;
`;

const GithubIcon = styled(Github)`
  height: 24px;
  width: 24px;
  margin-right: 6px;

  color: var(--white);
`;

const HomeContainer = styled(RowContainer)`
  background-color: var(--white);
  color: var(--black);

  .content {
    flex: 1;
    padding: 10px;
    overflow: auto;
  }

  .sidebar {
    padding: 12px;
    background-color: var(--black);
    color: var(--white);
    width: 220px;
    /* 
    @media (max-width: 400px) {
      display: block;
      position: absolute;
      top:0; left:0;
      
      z-index: 9999;
    } */
  }
`;

function App() {
  return (
    <div className="App">
      <Navbar>
        <div>
          <h4>Menu</h4>
        </div>

        <Row>
          <GithubIcon />
          <span>Github Finder</span>
        </Row>

        <div>
          <p>Menu direito</p>
        </div>
      </Navbar>

      <HomeContainer>
        <div className="sidebar">Opa</div>
        <div className="content">
          <div>
            <p>Teste</p>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}

export default App;
export { RowContainer, ColumnContainer };
