///
// footer link btn_Watch and btn_buy
		
this.btn_Watch.addEventListener("click",btn_WatchToGoToWebPage);

function btn_WatchToGoToWebPage() {
	window.open("http://www.adobe.com", "_blank");
}		

this.btn_buy.addEventListener("click",btn_buyToGoToWebPage);

function btn_buyToGoToWebPage() {
	window.open("http://www.google.com", "_blank");
}


////////////////////////////////////////////////////////////////////////////////////////////////////////


// 01_FrankVsTrumpkin

// btn_VoteForFrankONE to 01_Results

	this.btn_VoteForFrankONE.addEventListener("click", VoteForFrankONE.bind(this));
			function VoteForFrankONE(){
				this.gotoAndPlay("01_Results");
				// EB.userActionCounter("VoteForSausage");
			}
			
	// btn_VoteForTranckONE to 01_Results

	this.btn_VoteForTrumpkinONE.addEventListener("click", VoteForTrumpkinONE.bind(this));
			function VoteForTrumpkinONE(){
				this.gotoAndPlay("01_Results");
				//EB.userActionCounter("VoteForTrumpkin");
			}	


// ResultsGotoBrendaVsChillary
this.btn_ResultsGotoBrendaVsChillary.addEventListener("click", GotoBrendaVsChillary.bind(this));
		function GotoBrendaVsChillary(){
			this.gotoAndPlay("02_BrendaVsChillary");
		}	

// ViewResultsLandingPageOne
this.btn_ViewResultsLandingPageOne.addEventListener("click", ViewResultsLandingPageOne.bind(this));
		function ViewResultsLandingPageOne(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 02_BrendaVsChillary

// btn_VoteForBrendaONE to 01_Results
this.btn_VoteForBrendaONE.addEventListener("click", VoteForBrendaONE.bind(this));
	function VoteForBrendaONE(){
			this.gotoAndPlay("02_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForChillaryONE to ResultsOne

	this.btn_VoteForChillaryONE.addEventListener("click", VoteForChillaryONE.bind(this));
			function VoteForChillaryONE(){
				this.gotoAndPlay("02_Results");
				//EB.userActionCounter("VoteForTrumpkin");
			}	

// ResultsGotoBrendaVsChillary
this.btn_ResultsGotoSammyBagelJrVsTrumpkin.addEventListener("click", SammyBagelJrVsTrumpkin.bind(this));
		function SammyBagelJrVsTrumpkin(){
			this.gotoAndPlay("03_SammyBagelJrVsTrumpkin");
		}	
// ViewResultsLandingPageTwo
this.btn_ViewResultsLandingPageTwo.addEventListener("click", ViewResultsLandingPageTWO.bind(this));
		function ViewResultsLandingPageTWO(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	



////////////////////////////////////////////////////////////////////////////////////////////////////////


// 03_SammyBagelJrVsTrumpkin

// VoteForSammyBagelJrONE to 01_Results
this.btn_VoteForSammyBagelJrONE.addEventListener("click", VoteForSammyBagelJrONE.bind(this));
	function VoteForSammyBagelJrONE(){
			this.gotoAndPlay("03_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForTrumpkinONE to ResultsOne

	this.btn_VoteForTrumpkinTWO.addEventListener("click", VoteForTrumpkinTWO.bind(this));
			function VoteForTrumpkinTWO(){
				this.gotoAndPlay("03_Results");
				//EB.userActionCounter("VoteForTrumpkin");
			}	


// ResultsGoto04_TeresaVsChillary
this.btn_ResultsGoto04_TeresaVsChillary.addEventListener("click", TeresaVsChillary.bind(this));
		function TeresaVsChillary(){
			this.gotoAndPlay("04_TeresaVsChillary");
		}	
// ViewResultsLandingPageTrhee
this.btn_ViewResultsLandingPageThree.addEventListener("click", ViewResultsLandingPageThree.bind(this));
		function ViewResultsLandingPageThree(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 04_TeresaVsChillary

// VoteForTeresaONE to 04_Results
this.btn_VoteForTeresaONE.addEventListener("click", VoteForTeresaONE.bind(this));
	function VoteForTeresaONE(){
			this.gotoAndPlay("04_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForChillaryONE to ResultsOne

	this.btn_VoteForChillaryTWO.addEventListener("click", VoteForChillaryTWO.bind(this));
			function VoteForChillaryTWO(){
				this.gotoAndPlay("04_Results");
				//EB.userActionCounter("VoteForChillary");
			}	


// ResultsGoto05_LavashVsTrumpkin
this.btn_ResultsGoto05_LavashVsTrumpkin.addEventListener("click", LavashVsTrumpkin.bind(this));
		function LavashVsTrumpkin(){
			this.gotoAndPlay("05_LavashVsTrumpkin");
		}	
// ViewResultsLandingPageFour
this.btn_ViewResultsLandingPageFour.addEventListener("click", ViewResultsLandingPageFour.bind(this));
		function ViewResultsLandingPageFour(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 05_LavashVsTrumpkin to 05_Results

// VoteForLavashONE to 01_Results
this.btn_VoteForLavashONE.addEventListener("click", VoteForLavashONE.bind(this));
	function VoteForLavashONE(){
			this.gotoAndPlay("05_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForTrumpkinTHREE to ResultsOne

	this.btn_VoteForTrumpkinTHREE.addEventListener("click", VoteForTrumpkinTHREE.bind(this));
			function VoteForTrumpkinTHREE(){
				this.gotoAndPlay("05_Results");
				//EB.userActionCounter("VoteForChillary");
			}	


// ResultsGoto05_LavashVsTrumpkin
this.btn_ResultsGoto06_FrankVsChillary.addEventListener("click", FrankVsChillary.bind(this));
		function FrankVsChillary(){
			this.gotoAndPlay("06_FrankVsChillary");
		}	

// ViewResultsLandingPageFive
this.btn_ViewResultsLandingPageFive.addEventListener("click", ViewResultsLandingPageFive.bind(this));
		function ViewResultsLandingPageFive(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}			

////////////////////////////////////////////////////////////////////////////////////////////////////////


// 06_FrankVsChillary

// btn_VoteForFrankTWO to 07_Results

	this.btn_VoteForFrankTWO.addEventListener("click", VoteForFrankTWO.bind(this));
			function VoteForFrankTWO(){
				this.gotoAndPlay("06_Results");
				// EB.userActionCounter("VoteForSausage");
			}
			
	// btn_VoteForTranckONE to 06_Results

	this.btn_VoteForChillaryTHREE.addEventListener("click", VoteForChillaryTHREE.bind(this));
			function VoteForChillaryTHREE(){
				this.gotoAndPlay("06_Results");
				//EB.userActionCounter("VoteForTrumpkin");
			}	


// ResultsGotoBrendaVsTrumpkin
this.btn_ResultsGotoBrendaVsTrumpkin.addEventListener("click", GotoBrendaVsTrumpkin.bind(this));
		function GotoBrendaVsTrumpkin(){
			this.gotoAndPlay("07_BrendaVsTrumpkin");
		}	

// ViewResultsLandingPageSix
this.btn_ViewResultsLandingPageSix.addEventListener("click", ViewResultsLandingPageSix.bind(this));
		function ViewResultsLandingPageSix(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 07_BrendaVsTrumpkin

// btn_VoteForBrendaTWO to 07_Results
this.btn_VoteForBrendaTWO.addEventListener("click", VoteForBrendaTWO.bind(this));
	function VoteForBrendaTWO(){
			this.gotoAndPlay("07_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForTrumpkinFOUR to 07_Results

	this.btn_VoteForTrumpkinFOUR.addEventListener("click", VoteForTrumpkinFOUR.bind(this));
			function VoteForTrumpkinFOUR(){
				this.gotoAndPlay("07_Results");
				//EB.userActionCounter("VoteForChillary");
			}	


// ResultsGotoSammyBagelJrVsChillary
this.btn_ResultsGotoSammyBagelJrVsChillary.addEventListener("click", SammyBagelJrVsChillary.bind(this));
		function SammyBagelJrVsChillary(){
			this.gotoAndPlay("08_SammyBagelJrVsChillary");
		}	

// ViewResultsLandingPageSeven
this.btn_ViewResultsLandingPageSeven.addEventListener("click", ViewResultsLandingPageSeven.bind(this));
		function ViewResultsLandingPageSeven(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 08_SammyBagelJrVsChillary to 08_Results

// VoteForSammyBagelJrTWO to 08_Results
this.btn_VoteForSammyBagelJrTWO.addEventListener("click", VoteForSammyBagelJrTWO.bind(this));
	function VoteForSammyBagelJrTWO(){
			this.gotoAndPlay("08_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForChillaryFOUR to 08_Results

	this.btn_VoteForChillaryFOUR.addEventListener("click", VoteForChillaryFOUR.bind(this));
			function VoteForChillaryFOUR(){
				this.gotoAndPlay("08_Results");
				//EB.userActionCounter("VoteForTrumpkin");
			}	

// ResultsGotoTeresaVsTrumpkin
this.btn_ResultsGotoTeresaVsTrumpkin.addEventListener("click", ResultsGotoTeresaVsTrumpkin.bind(this));
		function ResultsGotoTeresaVsTrumpkin(){
			this.gotoAndPlay("09_TeresaVsTrumpkin");
		}	

// ViewResultsLandingPageEight
this.btn_ViewResultsLandingPageEight.addEventListener("click", ViewResultsLandingPageEight.bind(this));
		function ViewResultsLandingPageEight(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 09_TeresaVsTrumpkin


// VoteForTeresaTWO to 09_Results
this.btn_VoteForTeresaTWO.addEventListener("click", VoteForTeresaTWO.bind(this));
	function VoteForTeresaTWO(){
			this.gotoAndPlay("09_Results");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForChillaryFIVE to 09_Results

	this.btn_VoteForTrumpkinFIVE.addEventListener("click", VoteForTrumpkinFIVE.bind(this));
			function VoteForTrumpkinFIVE(){
				this.gotoAndPlay("09_Results");
				//EB.userActionCounter("VoteForChillary");
			}	


// ResultsGoto10_LavashVsChillary to 09_Results
this.btn_ResultsGoto10_LavashVsChillary.addEventListener("click", LavashVsChillary.bind(this));
		function LavashVsChillary(){
			this.gotoAndPlay("10_LavashVsChillary");
		}	
// ViewResultsLandingPageNine
this.btn_ViewResultsLandingPageNine.addEventListener("click", ViewResultsLandingPageNine.bind(this));
		function ViewResultsLandingPageNine(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	


////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10_LavashVsChillary to 10_END


// VoteForLavashONE to to 10_END
this.btn_VoteForLavashTWO.addEventListener("click", VoteForLavashTWO.bind(this));
	function VoteForLavashTWO(){
			this.gotoAndPlay("10_END");
			// EB.userActionCounter("VoteForSausage");
			}
			
// btn_VoteForCillaryFIVE to 10_END

	this.btn_VoteForChillaryFIVE.addEventListener("click", ChillaryFIVE.bind(this));
			function ChillaryFIVE(){
				this.gotoAndPlay("10_END");
				//EB.userActionCounter("VoteForChillary");
			}	

// ViewResultsLandingPageTen
this.btn_ViewResultsLandingPageTen.addEventListener("click", ViewResultsLandingPageTen.bind(this));
		function ViewResultsLandingPageTen(){
			window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
		}	


// btn_ResultsGotoEND
//this.btn_ResultsGotoEND.addEventListener("click", ResultsGotoEND.bind(this));
//		function ResultsGotoEND(){
//			this.gotoAndPlay("10_END");		}	


////////////////////////////////////////////END_FEDE////////////////////////////////////////////////////



















///////////////////////////////////////////// End///////////////////////////////////////////////////////

// footer link btn_Watch and btn_buy
		
this.btn_Watch.addEventListener("click",btn_WatchToGoToWebPage);

function btn_WatchToGoToWebPage() {
	window.open("http://www.adobe.com", "_blank");
}		

this.btn_buy.addEventListener("click",btn_buyToGoToWebPage);

function btn_buyToGoToWebPage() {
	window.open("http://www.google.com", "_blank");
}


////////////////////////////////////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////////////////////////////////////
		
01_FrankVsTrumpkin
02_04_TeresaVsChillary
03_SammyBagelJrVsTrumpkin
04_TeresaVsChillary
05_LavashVsTrumpkin
06_FrankVsChillary
07_BrendaVsTrumpkin
08_SammyBagelJrVsChillary
09_TeresaVsTrumpkin
10_LavashVsChillary














a.    Frank
b.    Brenda
c.    Sammy Bagel Jr.
d.    Teresa
e.    Lavash
f.     Trumpkin
g.    Chillary