({
    changeAttribute : function(component, event) {
        var params = event.getParam("arguments");
        if(params){
            component.set("v.childAttribute",params.msg);
        }
    }
})
