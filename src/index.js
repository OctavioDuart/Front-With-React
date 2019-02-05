import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// Função que vai trazer as configurações das rotas
const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


