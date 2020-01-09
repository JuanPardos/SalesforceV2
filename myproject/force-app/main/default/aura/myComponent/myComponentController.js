({
    doSomething : function(component, event, helper) {
        helper.helperMethod(component, event);
    },

    llamarAjs : function(component, event, helper) {
        console.log("llamarAjs");
        helper.helperJs(component, event);
    },
    
    handleClick : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
        alert("zona horaria:"+$A.get("$Locale.timezone"));
        alert("moneda:"+$A.get("$Locale.currency"));
    }
})
