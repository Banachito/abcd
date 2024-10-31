		function sredniaF(){
				n=parseInt(document.abc.n.value);
				if (n<=0){
					document.abc.policz.value=("Wartość ciągu nie może być 0")
				}
				else{
					lCiagu=0;
					wynik=lCiagu;
					for (i=0; i<n; i++){
						a=parseFloat(prompt("Podaj kolejny element ciągu"));
						wynik=wynik+a;
						lCiagu=lCiagu+a+",";
					}
						document.abc.lCiagu.value=lCiagu;
						var srednia=wynik/n;
						document.abc.policz.value=srednia;
				}
			}