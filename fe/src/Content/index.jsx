import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Result from "../Results";    
import NotFound from "../NotFound";

export default function Content(){
    return(
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/findjobs' element={<Main />} />
                    <Route path="/findjobs/jobs" element={<Result />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}