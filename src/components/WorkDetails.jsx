import React, { useContext } from 'react'
import codeContext from '../context/codeContext';
import CodeContext from '../context/codeContext';
import { useParams } from 'react-router-dom';

const WorkDetails = () => {

    const params = useParams()
    console.log(params.id);    
    const context = useContext(CodeContext);
    // eslint-disable-next-line
    const { title, html, css, javascript} = context;  
    console.log(title)
    console.log(html)
    console.log(css)
    console.log(javascript)
    console.log(context.codesnippets)
    
    return (
        <div className=''>
            {/* {context.codesnippets.find((x)=>x._id==params.id).title} */}
            <br />
            <h1>{html}</h1>
            <hr />
            <h2>{css}</h2>     
            <hr />
            <h2>{javascript}</h2> 

        </div>
    )
}

export default WorkDetails
