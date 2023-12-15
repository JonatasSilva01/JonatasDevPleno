import React from 'react';
import styled from 'styled-components';


interface HeaderComponentProps {
  title: string;
}


function HeaderComponent({title = ''}: HeaderComponentProps) {
  return (
    <React.Fragment>
      <HeaderLinkTitle title={title}>
        <h2>{title}</h2>
        <ListHeaderLink>
          <ul>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </ListHeaderLink>

        <PhotoProfileLink>
          <img src="https://avatars.githubusercontent.com/u/62606709?v=4" alt="foto do jonatas" />
        </PhotoProfileLink>

        <h1>Deixe um comentario do que achou? 🤠👍</h1>

      </HeaderLinkTitle>
    </React.Fragment>
  )
}


const HeaderLinkTitle = styled.header<HeaderComponentProps>`

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  h2:hover {
    text-decoration: underline;
    /* cursor: pointer; */
    transition: all ease .5s;
    color: #00fff2;
  }
`;
const ListHeaderLink = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    list-style: none;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
    }

    a:hover {
      color: #00fff2;
      transition: all ease .5s;
    }
  }
`;

const PhotoProfileLink = styled.div`
  width: 25vw;
  height: 50vh;
  background-color: white;
  border-radius: 50%;

  overflow: hidden;
  margin: 8rem auto;
  border: 0.5rem solid #00fff2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export default HeaderComponent;