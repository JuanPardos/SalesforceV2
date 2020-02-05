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

    handleSubmit : function(component, event, helper){

    },

    callExternalUrl : function(component, event, helper){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = $A.getCallback(function(){
            if(this.readyState===4){
                if(xhttp.status === 200){
                    var response = JSON.parse(xhttp.responseText);
                    var mapa = new Map();
                    mapa.set("date",response.data.date);
                    mapa.set("time",response.data.time);
                    component.set("v.mapa",mapa)
                }
            }
        });
        //csp trusted definition
        xhttp.open("GET","http://www.worldclock.net");
        xhttp.send(null);

    },
    
    showAlert : function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));
        alert("zona horaria:"+$A.get("$Locale.timezone"));
        alert("moneda:"+$A.get("$Locale.currency"));
    }
})
