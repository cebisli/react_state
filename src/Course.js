import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

import './Course.css'

const courseMap = {
    Angular,
    Bootstrap,
    Ccharp,
    KompleWeb
};


function Course({ courseName }) {
    return ( 
        <div className='courseDiv'>
            <img className='courseImg' src={courseMap[courseName]} alt=''/>
        </div> 
    );
}

export default Course;