({
    callControllerJs : function(component, event, helper) {
        helper.changeMyVariable(component, event);
    },

    callAura : function(component, event, helper) {
        console.log("llamarAjs");
        helper.callAuraMethod(component, event);
    },

    handleEvent1 : function(component, event){
        var message = event.getParam("message");
        console.log("observer component 1:"+message)
        component.set("v.myvariable",message)
    },
    
    showAlert : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
        alert("zona horaria:"+$A.get("$Locale.timezone"));
        alert("moneda:"+$A.get("$Locale.currency"));
    }
})
