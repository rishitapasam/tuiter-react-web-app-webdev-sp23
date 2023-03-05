
const PostSummaryItem=(post)=>{

    return (`
    <li class="list-group-item">
    <div class="row">
        <div class="col-10 p-1">
            <div class="text-muted">${post.topic} </div>
            <div class=" fw-bolder pt-1 pb-1">${post.userName} <i class="fas fa-check-circle"></i>
            <span class="text-muted font-monospace">${post.time}</span> </div>
            <div class=" fw-bolder text-justify d-inline-block">${post.title}</div>
        </div>
        <div class="col-2">
         <img class="float-end rounded " width="80px" height="80px"
         src=${post.image} />
        </div>

    </div>
 </li>
    `)
    };

export default PostSummaryItem;







//const PostSummaryItem = (post) => {
//  return `
//      <div class="col-md-8">
//        <h5>${post.title}</h5>
//        <p>${post.userName} • ${post.time}</p>
//        <p>${post.topic}</p>
//      </div>
//      <div class="col-md-4">
//              <img src="${post.image}" class="img-fluid">
//      </div>
//      </div>
//  `;
//};
