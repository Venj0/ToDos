import React from 'react'

import {DB} from "./context/db/DbState";
import {Content} from "./components/content";
import {GlobalState} from "./context/global/GlobalState";

export const App = () => {

    return (
        <DB>
            <GlobalState>
                <Content/>
            </GlobalState>

        </DB>
    )
}


