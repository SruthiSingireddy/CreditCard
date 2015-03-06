
var regex = /^[0-9\b]+$/;  
$(document).ready(function(){
	
	$("#verify").click(function(){
	
		var ccnum = $("#ccnum").val();
		var cc=parseInt(ccnum);	
		if(cc==0)
		{
			$( "div" ).html( "<span class='red slabtext'>Don't fool me</span>" );
		}
		else
		{

			if(!regex.test(ccnum))
				{
					$( "div" ).html( "<span class='red slabtext'>Please enter numbers</span>" );
				}
		
			else
			{
				//last digit in credit card number
				var creditLastNum = parseInt(ccnum.substr(ccnum.length - 1));
				
				// cut last digit
				var lastNum = ccnum.slice(0,-1)
				
				// reverse order
				var ccreverse = lastNum.split("").reverse().join("");
				
				// Numbers in array
				var ccnewArray = ccreverse.split("");
				
				//multiply odd numbers
				var a = 2;
				var cardNumOdsMultiplied = [];
				 
				 for (var i = 0; i < ccnewArray.length; i++) 
				 {
					 if (a%2 == 0)
					 {
						var temp = ccnewArray[i]*2;
						//If num > 9 substract by 9
						if (temp > 9)
						{
							var temp = (temp -9);
						}
						cardNumOdsMultiplied.push(temp);
					 }
					 else
					 {
						cardNumOdsMultiplied.push(parseInt(ccnewArray[i]));
					 }
					 a++;
				 }
				
				var sum = 0;
				for (var i = 0; i < cardNumOdsMultiplied.length; i++) 
				{
					sum += cardNumOdsMultiplied[i];
				}
				sum = sum + creditLastNum;
				
				if (sum%10 == 0)
				{
					// number is a valid card number
					$( "div" ).html( "<span class='red slabtext'>Valid Credit Card Number</span>" );
				}
				else
				{
					 // number is not valid
					 $( "div" ).html( "<span class='red slabtext'>Invalid Credit Card Number</span>" );
				}
			}	
		}
		
	});

});