import postitem from "./postitem.js";
import posts from "./posts.js";


const postsummlist = () => {
    return (`
        ${posts.map(item => postitem(item)).join('')}
        </ul>
`); }

export default postsummlist;


