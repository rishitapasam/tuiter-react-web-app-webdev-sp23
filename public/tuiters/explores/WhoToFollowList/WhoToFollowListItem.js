//import who from "./who.js"
//function WhoToFollowListItem(who) {
//  return `
//    <div class="d-flex flex-row align-items-center who-to-follow-list-item">
//      <img src="${who.avatarIcon}" class="avatar-icon" alt="${who.userName}">
//      <div class="d-flex flex-column ml-3">
//        <span class="user-name">${who.userName}</span>
//        <span class="user-handle">@${who.handle}</span>
//      </div>
//      <button class="btn btn-primary ml-auto">Follow</button>
//    </div>
//  `;
//}

const whotofollowlistitem = (who) => {
return (`
<li class="list-group-item ">
    <div class="row">
        <div class="col-2">
         <img class="float-strat rounded-circle" src=${who.avatarIcon} height="45px" width="45px" >
             </div>
                    <div class="col-8">
                        <div class=" fw-bolder">${who.userName}<i class="fas fa-check-circle"></i> </div>
                        <div class="">${who.handle}</div>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary  rounded-pill btn-sm float-end">Follow</button>
                    </div>
    </div>
</li>

`)


};

export default whotofollowlistitem;