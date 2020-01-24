({
  flatList: function (component, event, helper,returnedList) {
     
     			var rows=returnedList;
                var  retList=[];
                for (var i = 0; i < rows.length; i++) { 
                    var row = rows[i];                
                    for (var j = 0; j <row.length; j++) { 
                        var timesheet={Total_Week_Hours__c:row[j].Total_Week_Hours__c,EmployeeBirthdate:row[j].Employee__r.Birthdate,Employee__c:row[j].Employee__c,Start_Date__c: row[j].Start_Date__c,Gross_Pay__c: row[j].Gross_Pay__c, Taxes__c: row[j].Taxes__c,End_Date__c: row[j].End_Date__c,EmployeeName: row[j].Employee__r.Name, Type:row[j].RecordType.Name,Taxes__c: row[j].Taxes__c,Id: row[j].Id,Submitted: row[j].Submitted__c};
                        retList.push(timesheet);      
                    }
                } 
   component.set("v.recentTimesheetList", retList);   
  }
})