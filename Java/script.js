//
    var maintenant=new Date();
    var jour=maintenant.getDate();
    var mois=maintenant.getMonth()+1;
    var an=maintenant.getFullYear();

 
    var initialDateValue=DateValue(jour,mois,an);
    
    var elementFR = document.getElementById("TextFR"); 
    elementFR.setAttribute("data", "FrTexteFolder/"+String(initialDateValue)+'.txt');

    var elementEN = document.getElementById("TextEN"); 
    elementEN.setAttribute("data", "EnTexteFolder/"+String(initialDateValue)+'.txt');

    var elementDate= document.getElementById("DateDemand"); 
    elementDate.textContent= "Current Date is : "+String(jour)+ "/"+String(mois)+"/"+String(an)+".";

    var NewDate= document.getElementById("NewDate");
    var input = document.getElementById( 'NewDate' ).value;
    var d = new Date( NewDate );

    var newdatevar= new Date(document.getElementById('NewDate').value);
    var newday= newdatevar.getDate();
    var newmonth= newdatevar.getMonth()+1;
    var newyear=newdatevar.getFullYear();

    //Fonction bissextile
    function IsBissextile(YearParam){
        if ((YearParam%100)==0)
        {
            if ((YearParam%400)==0){return true;}
            else {return false;}
        }
        else {
            if ((YearParam%4)==0){return true;}
            else {return false;}
        }
    }

    function DateValue(DateParam,MonthParam,YearParam){
        var valueofdate=DateParam;

        let Tab_bissex = [0,0,31,60,91,121,152,182,213,244,274,305,335];

        valueofdate=valueofdate+Tab_bissex[MonthParam];

        return valueofdate;
    }

    
    function ChangeData(){
        //MAJ Date
        newdatevar= new Date(document.getElementById('NewDate').value);
        newday= newdatevar.getDate();
        newmonth= newdatevar.getMonth()+1;
        newyear=newdatevar.getFullYear();

        if ((String(newday)=="NaN")||(String(newmonth)=="NaN")||(String(newyear)=="NaN") )
        {
            elementDate.textContent= "Current Date is Unvalid";
            return 0;
        }

        newdatevar= newday+'/'+newmonth+'/'+newyear;
        //elementDate.textContent= "Current Date is : "+ String(newdatevar);
        var newdatevalue= DateValue(newday,newmonth,newyear);
        //elementDate.textContent= "New date value is : "+ String(newdatevalue);
        elementDate.textContent= "Current Date is : "+ String(newdatevar)+"-"+ String(newdatevalue);
        
        //MAJ Texte FR
        elementFR.setAttribute("data", "FrTexteFolder/"+String(newdatevalue)+'.txt');

        //MAJ Texte EN
        elementEN.setAttribute("data", "EnTexteFolder/"+String(newdatevalue)+'.txt');

    }
     