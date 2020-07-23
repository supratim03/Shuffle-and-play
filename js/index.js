function shuffle(){
    var parent_div = $(".flex-container");
    var childrens = parent_div.children();
    while (childrens.length) {
        parent_div.append(childrens.splice(Math.floor(Math.random() * childrens.length), 1)[0]);
    }
}

function sort() {
    var parent_div = $(".flex-container");
    var childrens = parent.children();
    childrens.sort(function(a,b){
        return $(a).data('id') - $(b).data('id')
    });
    $(".flex-container").html(childrens);
}