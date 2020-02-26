({
    saveData: function(component, event, helper) {
        var inputName = component.find('inputName').getElement().value;
        var inputYear = component.find('inputYear').getElement().value;

        var list = component.get("v.aux");
        var aux = component.get("v.list");
  
        aux.push({
            name: inputName,
            year: inputYear,
        });

        component.set("v.list", aux); 
    },

})
