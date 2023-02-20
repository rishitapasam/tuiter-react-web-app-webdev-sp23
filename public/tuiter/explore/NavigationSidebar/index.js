const NavigationSidebar = () => {
 return(`
<div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="/">
       <span class="icon-text"><i class="fas fa-home"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
            Home</i></span></a>
     <a class="list-group-item" href="/">
       <span class="icon-text"><i class="fas fa-hashtag"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                   Explore</i></span></a>
     <a class="list-group-item" href="/">
       <span class="icon-text"><i class="fas fa-bell"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                   Notification</i></span></a>
     <a class="list-group-item" href="/">
       <span class="icon-text"><i class="fas fa-envelope"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                   Messages</i></span></a>
     <a class="list-group-item" href="/">
       <span class="icon-text"><i class="fas fa-list"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                   Lists</i></span></a>
     <a class="list-group-item" href="/">
            <span class="icon-text"><i class="fas fa-user"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                        Profile</i></span></a>
     <a class="list-group-item" href="/">
            <span class="icon-text"><i class="fas fa-ellipsis-h"><span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">
                        More</i></span></a>
</div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
`)
}
export default NavigationSidebar;







