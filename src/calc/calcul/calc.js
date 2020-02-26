var Fcalc = document.calc;
var Currents = 0;
var FlagNewNum = false;
var PendingOp = "";



function NumPressed(Num) 
{
		if (FlagNewNum) 
		{
			Fcalc.ReadOut.value = Num;
			FlagNewNum = false;
		}	
		else 
		{
			if (Fcalc.ReadOut.value == "0")
				Fcalc.ReadOut.value = Num;
			else
				Fcalc.ReadOut.value += Num;
		}
}
	




function Operation (Op) 
{
		var Readout = Fcalc.ReadOut.value;
		if (FlagNewNum && PendingOp != "=")
		{
			Fcalc.ReadOut.value = Currents;
		}
		else
		{
			FlagNewNum = true;
			if ( '+' == PendingOp )
				Currents += parseFloat(Readout);
			else if ( '-' == PendingOp )
				Currents -= parseFloat(Readout);
			else if ( '/' == PendingOp )
				Currents /= parseFloat(Readout);
			else if ( '*' == PendingOp )
				Currents *= parseFloat(Readout);
			else
				Currents = parseFloat(Readout);
			Fcalc.ReadOut.value = Currents;
			PendingOp = Op;
		}
}
	


function clean() {
  document.calc.ReadOut.value = "0";
}





  
  
  
 