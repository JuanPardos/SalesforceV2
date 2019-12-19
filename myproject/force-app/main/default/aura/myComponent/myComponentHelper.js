({
    helperMethod : function(component, event) {
        var textodelusuario = component.find('entradauusario').getelement().value;
        component.set("v.myvariable","valordelavariable");
      
        var action =component.get("c.conparam");
        action.setparams({
            hola:"buenosdias"           
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                component.set("v.data",response.getReturnValue());
            }
            if(state==="INCOMPLETE"){}
            if(state==="ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message ){
                        console.log(errors[0].message);
                    }
                }
            }
        })
    }
})
