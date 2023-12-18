import ReactDom from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {Provider} from "react-redux";
import {store} from "./redux";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);