import NavigationSidebar from "./NavigationSidebar/index.js";
import whotofollowlistitem from "./whotofollowlist/index.js";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";
function exploreComponent() {
   $('#wd-explore').append(`
       <!--<h2>Explore</h2>-->
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
     <!--<h3>Navigation Sidebar</h3>-->
        ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-7">
    <!--<h3>ExploreComponent</h3>-->
         ${ExploreComponent()}

   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-3">
    <!--<h3>WhoToFollowList </h3>-->
       ${whotofollowlistitem()}
   </div>
  </div>
   `);
}
$(exploreComponent);










