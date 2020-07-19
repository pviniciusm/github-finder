import React from "react";
import "./App.css";
import styled from "styled-components";

import { MenuAlt2 as Menu } from "@styled-icons/heroicons-outline";

import { Github } from "@styled-icons/fa-brands";
import Users from "./components/users";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 52px;
  color: #fff;
  font-family: var(--alternative-font);

  background-color: var(--primary);
  padding: 0 15px;

  p {
    font-size: 12px;
  }
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

const MenuIcon = styled(Menu)`
  height: 18px;
  width: 18px;
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

const Title = styled.span`
  font-family: var(--font-title);
`;

const App = () => {
  return (
    <div className="App">
      <Navbar>
        <Row>
          <MenuIcon />
          <p>Menu</p>
        </Row>

        <Row>
          <GithubIcon />
          <Title>Github Finder</Title>
        </Row>

        <div className="right-menu">
          <p>Sobre</p>
        </div>
      </Navbar>

      <HomeContainer>
        <div className="sidebar"></div>
        <div className="content">
          <Users />
        </div>
      </HomeContainer>
    </div>
  );
};

export default App;
export { RowContainer, ColumnContainer };
