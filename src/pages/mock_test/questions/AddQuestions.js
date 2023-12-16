import React, { useState } from 'react'

import AddQuestionForm from './addQuestions/components/AddQuestionForm.js';
import AppHeader from '../../../templates/Base/Navbar.js';
import ShowQuestions from './addQuestions/components/ShowQuestions.js';
export default function () {
    const [reload, setReload] = React.useState(false);
    useState(() => {
        setReload(false);
    }, [reload]);
    return (
        <div><AppHeader/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
        }}
        >
            
                <AddQuestionForm callReload={() => setReload(!reload)}/>
                <ShowQuestions reload={reload} callReload={() => setReload(!reload)}/>
            </div>
            </div>
    )
}
