({
    doInit: function (component, event, helper) {
       
      helper.getData(component, event, helper,"getTotalTimesheets");
       helper.getData(component, event, helper,"getRecent");
     
    },
   handleTimesheetsTab: function (component, event, helper) {
       
        component.set('v.recentList',false);
     
    },
        handleRecentTab: function (component, event, helper) {
       
component.set('v.recentList',true);        
        }
});