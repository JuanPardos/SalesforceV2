({
    helperJs : function(component,event){
        console.log(event);
        console.log(component);
        component.set("v.myvariable","componente1");
    },

    helperMethod : function(component, event) {
        var textodelusuario = component.find('entradausuario').getElement().value;
        
      
        var action =component.get("c.conparam");
        action.setParams({
            msg:"buenosdias"           
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                component.set("v.myvariable",textodelusuario+response.getReturnValue());                
            }
            if(state==="INCOMPLETE"){}
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
