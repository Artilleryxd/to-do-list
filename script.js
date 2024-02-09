var listcontainer=document.getElementById("task-container")
$("button").on("click",function(){
    if($("#input-box").val()===''){
        alert("write something")
    }
    else{
        let li=$("<li>",{
            html: $("#input-box").val()
        })
        $("#task-container").append(li);
        let span = $("<span>",{
            html: "\u00d7"
        })
        $("li").append(span)
    }
    $("#input-box").val('')
    saveData() ;
});
$("ul").on("click","li", function(event){
    $(this).toggleClass("done");
    saveData() ;
})
$("ul").on("click","span", function(event){
    $(this).closest("li").remove();
    saveData() ;
})
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();