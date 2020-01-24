({
    init: function (component, event, helper) {
        
        var action = component.get("c.getTotalTimesheets");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set('v.timesheetList',response.getReturnValue());
                
            }
        });
        $A.enqueueAction(action);
        
        var action2 = component.get("c.getRecent");
        action2.setParams({
        });
        action2.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") { 
                                
             helper.flatList(component,event,helper,response.getReturnValue());   
            }
        });
        $A.enqueueAction(action2);
        
    },
    closeModal : function(component,event,helper){
        component.set('v.modal', false);
    },
    handleMouseHover: function(component, event, helper) {
        
        component.set("v.togglehover",true);
        component.set("v.hoverRow", parseInt(event.target.dataset.index));
      
    },
    handleMouseOut: function(component, event, helper) {
        
        component.set("v.hoverRow",-1);
        component.set("v.togglehover",false);
        
    },
    
    openModal : function(component,event,helper){
        var selectedId=event.currentTarget.name;
        component.set('v.employeeId',selectedId);
        component.set('v.modal', true);
    },
});