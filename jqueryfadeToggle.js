$("document").ready(()=>{

    $("#button").click(()=>{
        $("#new1").fadeToggle();
        $("#new2").fadeToggle("slow");
        $("#new3").fadeToggle(3000);
    })
})