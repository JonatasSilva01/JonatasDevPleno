import React from "react";
import styled from 'styled-components';
import HeaderComponent from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Main>
        <HeaderComponent title='JonatasDev' />
      </Main>
    </React.Fragment>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  /* background-color: #181818; */

  background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D');

  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export default App;
