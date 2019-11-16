import React from "react"
import ExTodoTemplate from "./parts/ExTodoTemplate";
import ExTodoHead from "./parts/ExTodoHead";
import ExTodoList from "./parts/ExTodoList";
import ExTodoCreate from "./parts/ExTodoCreate";
import ExTodoContextProvider from "../../contextAPI/exTodoContext/ExTodoContextProvider";

function ExTodoApp() {
    return <ExTodoContextProvider>
        <ExTodoTemplate>
            <ExTodoHead/>
            <ExTodoList/>
            <ExTodoCreate/>
        </ExTodoTemplate>
    </ExTodoContextProvider>
}

export default ExTodoApp;
