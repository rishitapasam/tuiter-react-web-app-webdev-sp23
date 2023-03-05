
import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryItem from "../explore/PostSummaryList/index.js";
import post from "../explore/PostSummaryList/post.js";
import postsummlist from "./PostList/index.js";
import posts from "./PostList/posts.js";
function exploreComponent() {
   $('#wd-explore').append(`
       <!--<h2>Explore</h2>-->
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    <!--<h3>NavigationSidebar</h3>-->
        ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
         ${postsummlist()}
   <div>
   </div>
   </div>

   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <!--<h3>PostSummarylist</h3>-->
        ${PostSummaryItem()}
   </div>
  </div>
   `);
}
$(exploreComponent);

