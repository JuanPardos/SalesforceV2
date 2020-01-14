({
    doSomething : function(component, event, helper) {
        helper.helperMethod(component, event);
    },

    llamarAjs : function(component, event, helper) {
        console.log("llamarAjs");
        helper.helperJs(component, event);
    },

    handleEvent : function(component, event){
        var message = event.getParam("message");
        console.log("observer component 1:"+message)
        component.set("v.myvariable",message)
    },
    
    handleClick : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
        alert("zona horaria:"+$A.get("$Locale.timezone"));
        alert("moneda:"+$A.get("$Locale.currency"));
    }
})
