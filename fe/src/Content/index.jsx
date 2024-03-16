import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Result from "../Results";    

export default function Content(){
    return(
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/findjobs' element={<Main />} />
                    <Route path="/findjobs/jobs" element={<Result />} />
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}