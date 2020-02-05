({
    
    filterAndFlatLists: function (component, event, helper, unfilteredList,recent,all,submitted,notSubmitted) {
        
        var rows=unfilteredList;
        var  retList=[];
        for (var i = 0; i < rows.length; i++) { 
            if(!recent){
                var row = rows[i];
                var timesheet={Total_Week_Hours__c:row.Total_Week_Hours__c,EmployeeBirthdate:row.Employee__r.Birthdate,Employee__c:row.Employee__c,Start_Date__c: row.Start_Date__c,Gross_Pay__c: row.Gross_Pay__c, Taxes__c: row.Taxes__c,End_Date__c: row.End_Date__c,EmployeeName: row.Employee__r.Name, Type:row.RecordType.Name,Taxes__c: row.Taxes__c,Id: row.Id,Submitted__c: row.Submitted__c};
                if(all){
                    retList.push(timesheet); 
                }
                if(row.Timesheet_Status__c=="SUBMITTED"&&submitted){
                    retList.push(timesheet);
                    
                }
                if(row.Timesheet_Status__c=="NOT SUBMITTED"&&notSubmitted){
                    retList.push(timesheet);
                }
               
            }else{
                var recentRow = rows[i]; 
                for (var j = 0; j <recentRow.length; j++) { 
                    var recentTimesheet={Total_Week_Hours__c:recentRow[j].Total_Week_Hours__c,EmployeeBirthdate:recentRow[j].Employee__r.Birthdate,Employee__c:recentRow[j].Employee__c,Start_Date__c: recentRow[j].Start_Date__c,Gross_Pay__c: recentRow[j].Gross_Pay__c, Taxes__c: recentRow[j].Taxes__c,End_Date__c: recentRow[j].End_Date__c,EmployeeName: recentRow[j].Employee__r.Name, Type:recentRow[j].RecordType.Name,Taxes__c: recentRow[j].Taxes__c,Id: recentRow[j].Id,Submitted__c: recentRow[j].Submitted__c};
                     if(all){
                    retList.push(recentTimesheet); 
                }
                    if(recentRow[j].Timesheet_Status__c=="SUBMITTED"&&submitted){
                        retList.push(recentTimesheet);
                        
                    }
                    if(recentRow[j].Timesheet_Status__c=="NOT SUBMITTED"&&notSubmitted){
                        retList.push(recentTimesheet);
                    }
                   
                }
                
               
            } 
             component.set("v.filteredList",retList);
        }
       
    },
    getData: function (component, event, helper,methodName) {
        
        var action = component.get("c."+methodName);
        
        if(methodName==="submitTimesheets"){
            let listToUpdate= component.get("v.listToSubmit");
            alert(listToUpdate);
            action.setParams({
                timesheets:listToUpdate
            });
            
        }
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                
                if(methodName=="submitTimesheets"&&state === "SUCCESS"){
                 
                    location.reload();

                }
                if(methodName=="getTotalTimesheets"){
                    component.set("v.timesheetList",response.getReturnValue());
                }
                if(methodName=="getRecent"){
                    component.set("v.recentTimesheetList",response.getReturnValue());
                    
                }
                
            }
        });
        $A.enqueueAction(action);
        
    },
    setListFiltered:function (component, event, helper,all,submitted,notSubmitted) {
    
        var recent=component.get("v.recent");
        var timesheetList =[];
        if(recent){
            timesheetList=  component.get("v.recentTimesheetList");
        }else{
            timesheetList=   component.get("v.timesheetList");
            
        } 
            this.filterAndFlatLists(component, event, helper, timesheetList,recent,all,submitted,notSubmitted);


    },
   
    
})