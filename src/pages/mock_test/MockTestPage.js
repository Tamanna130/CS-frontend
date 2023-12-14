import React, { useState } from 'react'
import AddExamCategories from './components/addExamCategories.js'
import ViewExamCategories from './components/viewExamCategories.js'
import AppHeader from '../../templates/Base/Navbar.js'
export default function () {
    const [reload, setReload] = React.useState(false);
    useState(() => {
        setReload(false);
    }, [reload]);
    return (
        <div>
            <AppHeader/>
                <AddExamCategories callReload={() => setReload(!reload)}/>
                <ViewExamCategories reload={reload}/>
        </div>
    )
}
