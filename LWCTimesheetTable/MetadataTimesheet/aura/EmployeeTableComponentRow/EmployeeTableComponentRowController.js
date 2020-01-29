({
	  closeModal : function(component,event,helper){
        component.set('v.modal', false);
    },
    handleMouseHover: function(component, event, helper) {       
        component.set("v.togglehover",true);
    },
    handleMouseOut: function(component, event, helper) {       
         component.set("v.togglehover",false); 
    },
    
    openModal : function(component,event,helper){
        var selectedId=event.currentTarget.name;
        component.set('v.employeeId',selectedId);
        component.set('v.modal', true);
    },
})