import whotofollowlistitem from "./whotofollowlistitem.js";
import who from "./who.js"

const whotofollowlist = () => {
return(`
<div class="row">
<ul class= "list-group">
            <li class="list-group-item">
                <div class="fw-bolder"> Who to follow </div>
            </li>

${(who.map(item=>whotofollowlistitem(item)).join(''))}
</ul>
</div>
`)
}

export default whotofollowlist;

//const whotofollowlist = () => {
//return(`
//<div class="row">
//<ul class= "list-group">
//            <li class="list-group-item">
//                <div class=" fw-bolder">Who to follow</div>
//            </li>
//</ul>
//${(who.map(item=>whotofollowlistitem(item)).join(''))}
//</div>
//`)
//}
//
//export default whotofollowlist;

//import WhoToFollowListItem from "./WhoToFollowListItem.js";
//import who from "./who.js";
//
//const WhoToFollowList = () => {
//  let listItems = "";
//
//  for (let i = 0; i < who.length; i++) {
//    listItems += WhoToFollowListItem(who[i]);
//  }
//
//  return (`
//    <ul class="list-group my-list-group" style= "padding: 1em width: 200px; height: 100px;">
//                    <li class="list-group-item" style="background-color: lightgrey;">Who to follow</li>
//                    <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightgrey;">
//
//
//                        <div class="image-text">
//                            <img src="java.jpg" class="rounded-circle" style="width: 50px; height: 50px; margin-right: 10px;">
//                            <div>
//                                <div class="font1">Java<i class="fas fa-check-circle"></i></i></div>
//                                <div class="font2">@Java</div>
//                            </div>
//                        </div>
//                        <button class="button2">Follow</button>
//                        </li>
//
//                    <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightgrey;">
//
//
//                        <div class="image-text">
//                            <img src="Relativityspace.jpg" class="rounded-circle" style="width: 50px; height: 50px; margin-right: 10px;">
//                            <div>
//                                <div class="font1">Relativity Space<i class="fas fa-check-circle"></i></i></div>
//                                <div class="font2">@relativityspace</div>
//                            </div>
//                        </div>
//                        <button class="button2">Follow</button>
//                    </li>
//
//                    <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightgrey;">
//
//
//                        <div class="image-text">
//                            <img src="Virgingalactic.jpg" class="rounded-circle" style="width: 50px; height: 50px; margin-right: 10px;">
//                            <div>
//                                <div class="font1">Virgin Galactic<i class="fas fa-check-circle"></i></i></div>
//                                <div class="font2">@virgingalactic</div>
//                            </div>
//                        </div>
//                        <button class="button2">Follow</button>
//                    </li>
//
//                    <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightgrey;">
//
//
//                        <div class="image-text">
//                            <img src="Nasa.jpg" class="rounded-circle" style="width: 50px; height: 50px; margin-right: 10px;">
//                            <div>
//                                <div class="font1">Nasa<i class="fas fa-check-circle"></i></i></div>
//                                <div class="font2">@Nasa</div>
//                            </div>
//                        </div>
//                        <button class="button2">Follow</button>
//                    </li>
//
//                    <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightgrey;">
//
//
//                        <div class="image-text">
//                            <img src="Tesla.jpg" class="rounded-circle" style="width: 50px; height: 50px; margin-right: 10px;">
//                            <div>
//                                <div class="font1">Tesla<i class="fas fa-check-circle"></i></i></div>
//                                <div class="font2">@Tesla</div>
//                            </div>
//                        </div>
//                        <button class="button2">Follow</button>
//                    </li>
//
//
//                </ul>
//  `);
//};

