import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Pages/Public/Router.jsx';
import AdminRouter from '@/Pages/Auth/Router.jsx';




const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
