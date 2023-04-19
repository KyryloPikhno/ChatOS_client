import {Navigate, Route, Routes} from "react-router-dom";

import {ExtensionPlanPage, NotFoundPage, UsersTablePage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/users-table'}/>}/>
                <Route path={'/users-table'} element={<UsersTablePage/>}/>
                <Route path={'/extension-plans'} element={<ExtensionPlanPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
