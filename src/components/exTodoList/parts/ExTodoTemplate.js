import React from "react";
import styled from "styled-components"


const TodoTemplateBlock = styled.div`
    height: 668px;
    width: 512px;
    background: white;
    border-radius: 16px;
    margin: 48px auto 0;
    //padding: 18px;

    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .1);
    box-sizing: border-box;
`;

function ExTodoTemplate({children}) {
    return <TodoTemplateBlock>
        {children}
    </TodoTemplateBlock>
}

export default ExTodoTemplate;
