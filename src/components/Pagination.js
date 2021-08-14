import React from 'react'

const Pagination = ({postsPerPage , totatlPosts , paginate}) => {
    const pageNmubers = [] ;
    for(let i = 1 ; i <= Math.ceil(totatlPosts/postsPerPage) ; i++) {
        pageNmubers.push(i)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNmubers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>

                    </li>
                ))}
                </ul>            
        </nav>
    )
}

export default Pagination
