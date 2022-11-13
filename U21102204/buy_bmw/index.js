var searchBtn = document.querySelector(".sub_mit");
    var searchText = document.querySelector(".sub_nav_search_text");
    const searchInp = document.querySelector(".search_inp_last");

    document.querySelector(".sub_mit").addEventListener("click", function(){
        searchText.classList.toggle("search_inp_last");
        //console.log(searchInp);
    });

    var mother_menu_cross = document.querySelector(".menu_cross_container");
    let svg_cross = document.querySelector(".cross-menu"); 
    let svg_menu = document.querySelector(".menu_cross"); 

    //under menu cross animation
    mother_menu_cross.addEventListener("click", function(){
        svg_cross.classList.toggle("opacity_cont_cross_menu");
        svg_cross.classList.toggle("rotate_cont_cross_menu");
        svg_menu.classList.toggle("opacity_cont_cross_menu");
        svg_menu.classList.toggle("rotate_cont_cross_menu");

        setTimeout(()=>{
            svg_cross.classList.remove("rotate_cont_cross_menu");
            svg_menu.classList.remove("rotate_cont_cross_menu");
        },1000);
        console.log("click nemu cross");
    });

    let toggle_sidebar = document.querySelector(".menu_cross_container");
    let mother_sidebar_move = document.querySelector(".mother_sidebar");
    let cross_sign = document.querySelector(".menu_cross_container");
    let logout_move = document.querySelector(".log_out");

    toggle_sidebar.addEventListener("click", ()=>{
        mother_sidebar_move.classList.toggle("mother_sidebar_toggle");
        cross_sign.classList.toggle("menu_cross_container_toggle");
        logout_move.classList.toggle("log_out_toggle");
        console.log("cress button clicked for sidebar");
    });

    //pointer circle moving
    let glow_move = document.querySelector(".parallex_dream_car_1");
    window.addEventListener("mousemove", ()=>{
        //const valueX = event.pageX - (screen.width/2.5);//thats for total screen width
        //const valueY = event.pageY - (screen.height/2);

        const valueX = (event.pageX - (window.innerWidth/2)); // thats for browser width
        const valueY = (event.pageY - (window.innerHeight/2));
        
        
        console.log("valueX:" + valueX + " || valueY:"+ valueY);
    })
    // window.addEventListener("wheel", ()=>{
    //     const delX = event.deltaX;
    //     const delY = event.deltaY;
    //     console.log("deltaX:" + delX + " || deltaY:"+ delY);
    // })

    $(document).ready(function(){
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            console.log("scrollTop:"+ scrollTop);
        })
    })










