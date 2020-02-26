({
    saveData: function(component, event, helper) {
        var inputName = component.find('inputName').getElement().value;
        var inputYear = component.find('inputYear').getElement().value;
        var inputCapital = component.find('inputCapital').getElement().value;
        var inputRuinas = component.find('inputRuinas').getElement().value;

        var list = component.get("v.aux");
        var aux = component.get("v.list");
        var countID = component.get("v.count");

        aux.push({
            ID: countID,
            name: inputName,
            year: inputYear,
            capital: inputCapital,
            ruinas: inputRuinas,
        });

        countID++;
        component.set("v.count", countID);
        component.set("v.list", aux); 
    },

})
