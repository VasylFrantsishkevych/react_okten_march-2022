import React from 'react';

import './TodoStyle.css';

const Todo = ({todo: {id, title, completed}}) => {
    return (
        <div className={'todo'}>
            {id} - {title}
            <p>completed: {`${completed}`}</p>
        </div>
    );
};

export {Todo};
