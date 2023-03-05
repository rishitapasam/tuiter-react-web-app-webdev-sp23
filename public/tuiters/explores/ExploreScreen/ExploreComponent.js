import PostSummaryList from "../PostSummaryList/index.js";
import post from "../PostSummaryList/post.js";

const ExploreComponent = () => {
    return(`

            <div class="row">
            <div class="col-11">
                <div class="position-relative">
                 <input class="form-control rounded-pill ps-5" placeholder= "Search Tuiter"/>
                 <span class="fas fa-search text-secondary position-absolute wd search"></span>
                </div>
                </div>
                <div class="col-1 mt-1">
                <a href="explore-settings.html" class="settings-icon">
                 <i class="fas fa-cog fa-lg text-primary"></i></a>
                </div>
        </div>

           <ul class="nav nav-tabs">
           <li class="nav-item ">
               <a class="nav-link active" href="for-you.html">
                   For you
               </a>
           </li>
           <li class="nav-item ">
               <a class="nav-link" href="Trending.html">
                   Trending
               </a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="News.html">
                   News</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="Sports.html">
               Sports</a>
           </li>
           <li class="nav-item d-none d-md-block">
               <a class="nav-link" href="Entertainment.html">
               Entertainment</a>
           </li>
        </ul>

        <div class="position-relative mt-3 ">
              <img src="./spacex.jpg" width="100%"/>
              <h1 class="position-absolute bottom-0 left-0 text-white">SPACE-X Spaceship</h1>
            </div>
           <div class="list-group">
           ${PostSummaryList(post)}
           </div>
    `);
}
export default ExploreComponent;