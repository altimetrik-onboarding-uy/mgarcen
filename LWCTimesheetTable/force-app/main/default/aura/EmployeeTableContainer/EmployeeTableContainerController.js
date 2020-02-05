({
    doInit: function (component, event, helper) {
        
        helper.getData(component, event, helper,"getTotalTimesheets");
        helper.getData(component, event, helper,"getRecent");
        
    },
    
    totalTab: function (component, event, helper) {
        
        component.set("v.recent",false);           
    }, 
    recentTab: function (component, event, helper) {
        component.set("v.recent",true);      
    },
    onCheck: function (component, event, helper) {
        var filters =event.getParam("filter");
        var isAll=false;
        var isSubmitted=false;
        var isNotSubmitted=false;
               for (var i = 0; i < filters.length; i++) {
                   if(filters[i]==="All"){
                       isAll=true;
                   }
                    if(filters[i]==="Submitted"){
                       isSubmitted=true;
                   }
                    if(filters[i]==="Not Submitted"){
                       isNotSubmitted=true;
                   }
               }
			   

        helper.setListFiltered(component, event, helper,isAll,isSubmitted,isNotSubmitted);
    },
    
    addToSubList: function (component, event, helper) {
        
        var id =event.getParam("timesheetId");
        var addList=component.get("v.listToSubmit");
        var inList = addList.find(function(el) {
            return el== id;
        });
        
        if(inList){   
            
            let rowIndex = addList.indexOf(id);          
            addList.splice(rowIndex, 1);         
            component.set('v.listToSubmit', addList);
        }else{
            addList.push(id);
        }
    },
    submitSelected:function (component, event, helper) {
        
        helper.getData(component, event, helper,"submitTimesheets");
    }
    
});