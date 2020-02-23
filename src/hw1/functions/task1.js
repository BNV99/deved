
	let day=0;
	
        let nd=("");
        function funDay(n)  {
            day=n%7 ;
	switch (day)
{
    case 0:
        nd=("Monday");
       break;
    case 1:
        nd=("Tuesday");
        break;
    case 2:
        nd=("Wednesday");
        break;
    case 3:
       nd=("Thursday");
       break;
    case 4:
        nd=("Friday");
        break;
    case 5:
        nd=("Saturday");
        break;
			case 6:
        nd=("Sanday");
        break;

}


return nd;
    }
    
		console.log(funDay(6));