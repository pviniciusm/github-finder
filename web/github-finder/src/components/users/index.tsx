import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: block;
  max-width: 1500px;
  margin: auto;
  padding: 10px;
`;

const UsersContainer = styled.div`
  display: grid;
  max-width: 1500px;
  grid-template-columns: 25% 25% 25% 25%;
  margin-top: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

const users = [
  {
    id: "faustao",
    name: "Fausto Silva",
    url: "https://github.com/pviniciusm",
    photo_url:
      "https://pbs.twimg.com/profile_images/983018479644303361/UD5uocVf_400x400.jpg",
  },
  {
    id: "fake_vindiesel",
    name: "Vin Diesel",
    url: "https://github.com/pviniciusm",
    photo_url:
      "https://pbs.twimg.com/profile_images/966817600108941317/Py3tW6no_400x400.jpg",
  },
  {
    id: "caracu",
    name: "Mlk Cara de Bunda",
    url: "https://github.com/pviniciusm",
    photo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMMGkf6l6lmE4V-zGWNHYLnn8A5HDvS2DnBA&usqp=CAU",
  },

  {
    id: "shrek_loco",
    name: "Shrek Loucão",
    url: "https://github.com/pviniciusm",
    photo_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_9AbJHhTnkQUAWBygXPVlDF21cYj0OZlnOw&usqp=CAU",
  },
];

const User = styled.a`
  padding: 12px 8px;
  margin: 10px 20px 10px 0;
  border-radius: 6px;
  box-shadow: 2px 2px 6px var(--gray1);

  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: var(--whitest);

  text-decoration: none;
  color: var(--black);

  &:hover {
    background-color: var(--white);
  }

  .user-name {
    font-family: var(--alternative-font);
    font-weight: 400;

    display: flex;
    justify-content: start;
    flex: 1;
    margin-left: 5px;
    margin-top: 10px;
  }

  .user-header {
    font-size: 10px;
    font-family: var(--alternative-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40%;
    margin-right: 5px;

    img {
      width: 60px;
      height: 60px;

      border-radius: 50%;
    }

    p {
      margin-top: 5px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .user-name {
      justify-content: center;
      margin: 0;
    }

    .user-header {
      width: 100%;
      margin: 0;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  color: var(--black);
  font-family: var(--alternative-font);
  font-size: 25px;

  margin-bottom: 15px;

  span {
    font-size: 12px;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-bottom: 0.5px solid #e5e5e5;
`;

const Users: React.FC = () => {
  return (
    <MainContainer>
      <Header>
        <p>Bem vindo ao Github Finder</p>
        <span>
          Projeto disponível em{" "}
          <a href="https://github.com/pviniciusm/github-finder">
            github/pviniciusm/github-finder
          </a>
        </span>
      </Header>

      <Divider />

      <UsersContainer>
        {users.map((user) => (
          <User key={user.name} href={user.url}>
            <span className="user-header">
              <img src={user.photo_url} alt={`@${user.name}`} />
              <p>{`@${user.id}`}</p>
            </span>
            <span className="user-name">
              <p>{user.name}</p>
            </span>
          </User>
        ))}
      </UsersContainer>
    </MainContainer>
  );
};

export default Users;
