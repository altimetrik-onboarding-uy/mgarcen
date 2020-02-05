({
      onSubmit: function(component,event,helper){  
        var compEvent = component.getEvent("submitButton");
        compEvent.setParams({"submit" : true});
        
        compEvent.fire();
    },
	filterSelected : function(component, event, helper) {
		    
        var all =component.find("allFilter").get("v.value");
        var submitted =component.find("submittedFilter").get("v.value");
        var notSubmitted =component.find("notSubmittedFilter").get("v.value");
        var compEvent = component.getEvent("filterEvent");
        var arrayParameter=[];
        if(submitted){
             arrayParameter.push("Submitted");
        }
        if(notSubmitted){
             arrayParameter.push("Not Submitted");
        }
        if(all){
             arrayParameter.push("All");
        }
         compEvent.setParams({"filter" : arrayParameter});

        compEvent.fire();

	}
})