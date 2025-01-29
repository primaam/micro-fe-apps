import React, { Suspense } from "react";
import "./App.css";

const RemoteButton = React.lazy(() => import("module1/Button"));
const RemoteCard = React.lazy(() => import("module2/Card"));

function App() {
    return (
        <div>
            <h1>Host Application</h1>
            <Suspense fallback="Loading...">
                <RemoteButton />
                <RemoteCard />
            </Suspense>
        </div>
    );
}
export default App;
