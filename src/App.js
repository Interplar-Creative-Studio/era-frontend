import {BrowserRouter} from 'react-router-dom';
import {MainApplication} from "./MainAppication/MainApplication";

export function App() {
    return (
        <BrowserRouter>
            <MainApplication/>
        </BrowserRouter>
    );
}

