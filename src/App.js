import {Navigate, Route, Routes} from "react-router-dom";

import {ExtensionPlanPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/extensionPlans'}/>}/>
                <Route path={'/extensionPlans'} element={<ExtensionPlanPage/>}/>
                
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
