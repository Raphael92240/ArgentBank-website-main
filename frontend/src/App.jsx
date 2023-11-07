import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Pages/Public/Router.jsx';
import AdminRouter from '@/Pages/Auth/Router.jsx';
import AuthGuard from './_helpers/AuthGuard';



const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <AuthGuard>
                        <Route path="/admin/*" element={<AdminRouter />} />
                    </AuthGuard>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
