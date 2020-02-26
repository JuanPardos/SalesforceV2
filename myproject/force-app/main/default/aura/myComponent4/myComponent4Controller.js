({
    onChildAttributeChange : function (component, event, helper) {
        
    },

    onChildAttributeChange2 : function (component, event, helper) {
        
    },

    callAura : function(component, event) {
        var action =component.get("c.callWithParam");
        action.setParams({
            msg:"buenosdias"           
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                component.set("v.myvariable",userInput+response.getReturnValue());                
            }
            if(state==="INCOMPLETE"){
            }
            if(state==="ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message ){
                        console.log(errors[0].message);
                    }
                    component.set("v.myvariable","error");
                }
            }

        });
        $A.enqueueAction(action);
    }
})
