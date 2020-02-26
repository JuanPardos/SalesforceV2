({
    onChildAttributeChange : function (component, event, helper) {},

    selectNumber : function(component, event) {
        var selectedCapital = component.find('select').get('v.value');

        component.set("v.aux", selectedCapital);
    },

    callAura : function(component, event) {
        var action = component.get("c.Operacion");

        action.setParams({
            capital: component.get("v.aux"),          
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                component.set("v.resultado",response.getReturnValue());                
            }
            if(state==="INCOMPLETE"){
                console.log("Error");
            }
            if(state==="ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message ){
                        console.log("Error");
                    }
                }
            }
        });
        $A.enqueueAction(action);
    }
})
