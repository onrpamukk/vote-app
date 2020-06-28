/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


interface IPROPS {
    postsPerPage:any
    totalPosts:any
    paginate:any
    prevPage: () => any
    nextPage:() => any
}


const paging: React.FC<IPROPS> = props => {
    const { postsPerPage, totalPosts, paginate, prevPage, nextPage } = props;
    const pageNumbers = []; 
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        // @ts-ignore
        pageNumbers.push(i); 
    }

    return (
        <nav>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a href="#" className="page-link" onClick={() => prevPage()}>Previous</a>
            </li>
            {pageNumbers.map(num => ( 
                <li className="page-item" key={num}>
                    <a href="#" onClick={() => paginate(num)} className="page-link">{num}</a>
                </li>
            ))}
            <li className="page-item">
                <a href="#" className="page-link" onClick={() => nextPage()}>Next</a>
            </li>
        </ul>
    </nav>
    )
}

export default paging
