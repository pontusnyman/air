function initMap(){
	
	//Information om punkterna
	var sodervarn = {
		info: '<strong>Södervärn</strong><br>\
                <p>Korsningen:<br>\ Carl Gustavs väg/S. Förstadsgatan</p>\<a href="https://maps.apple.com/?daddr=55.589285,13.005419">Hitta hit</a>',
		lat: 55.589285,
		long: 13.005419
	};
	
	var erikslust = {
		info: '<strong>Erikslust</strong><br>\
              <p>Rundellen:\ Erikslustv./Köpenhamnsv.</p>\<a href="https://maps.apple.com/?daddr=55.59419,12.96658">Hitta hit</a>',
		lat: 55.59419,
		long: 12.96658
	};
	
	var lugnet = {
		info: '<strong>Lugnet</strong><br>\
                <p>Kaptensgatan vid Scandic</p>\<a href="https://maps.apple.com/?daddr=55.60072947,13.00439268">Hitta hit</a>',
		lat: 55.60072947,
		long: 13.00439268
	};
	
	var kungsparkern = {
		info: '<strong>Kungsparken</strong><br>\
              <p>Malmöhusv.</p>\<a href="https://maps.apple.com/?daddr=55.60570702,12.99209878">Hitta hit</a>',
		lat: 55.60570702,
		long: 12.99209878
	};
	
	var ribersborg = {
		info: '<strong>Ribersborg</strong><br>\
              <p>Ribersborgsstigen</p>\<a href="https://maps.apple.com/?daddr=55.60249025,12.96803266">Hitta hit</a>',
		lat: 55.60249025,
		long: 12.96803266
	};
	
	var vastrahamnen = {
		info: '<strong>Västra hamnen</strong><br>\
              <p>Stora Varvasgatan</p>\<a href="https://maps.apple.com/?daddr=55.61009613,12.97847316">Hitta hit</a>',
		lat: 55.61009613,
		long: 12.97847316
	};
	
	var bagersplats = {
		info: '<strong>Bagers plats</strong><br>\
              <p>Hjälmargatan.</p>\<a href="https://maps.apple.com/?daddr=55.60823267,12.99670413">Hitta hit</a>',
		lat: 55.60823267,
		long: 12.99670413
	};
	
	var centralen1 = {
		info: '<strong>Malmö Centralstation</strong><br>\
              <p>Vid Suellsbron/Anna Linds plats</p>\<a href="https://maps.apple.com/?daddr=55.60874778,13.00216913">Hitta hit</a>',
		lat: 55.60874778,
		long: 13.00216913
	};
	
	var centralen2 = {
		info: '<strong>Malmö Centralstation</strong><br>\
              <p>I cykelgaraget under Centralbron</p>\<a href="https://maps.apple.com/?daddr=55.60899322,13.00410032">Hitta hit</a>',
		lat: 55.60899322,
		long: 13.00410032
	};

	var lillatorg = {
		info: '<strong>Lilla torg</strong><br>\
              <p>Korsningen:\ Engelbrektsg/Larocheg.</p>\<a href="https://maps.apple.com/?daddr=55.6047161,12.99768448">Hitta hit</a>',
		lat: 55.6047161,
		long: 12.99768448
	};
	
	var varnhem = {
		info: '<strong>Värnhemstorget</strong><br>\
              <p>Föreningsgatan utanför Coop</p>\<a href="https://maps.apple.com/?daddr=55.60508884,13.02392721">Hitta hit</a>',
		lat: 55.60508884,
		long: 13.02392721
	};
	
	var lundavagen = {
		info: '<strong>Lundavägen</strong><br>\
              <p>Rundellen:\ Lundavägen/Sjölundaviadukten</p>\<a href="https://maps.apple.com/?daddr=55.61438023,13.04238081">Hitta hit</a>',
		lat: 55.61438023,
		long: 13.04238081
	};
	
	var bulltofta = {
		info: '<strong>Bulltofta</strong><br>\
              <p>Bulltofta motionscenter</p>\<a href="https://maps.apple.com/?daddr=55.59786842,13.06545317">Hitta hit</a>',
		lat: 55.59786842,
		long: 13.06545317
	};
	
	var videdal = {
		info: '<strong>Videdal</strong><br>\
              <p>Videdalsparken</p>\<a href="https://maps.apple.com/?daddr=55.58980241,13.06546658">Hitta hit</a>',
		lat: 55.58980241,
		long: 13.06546658
	};
	
	var rosengard = {
		info: '<strong>Rosengård</strong><br>\
              <p>Vid Örtagårdstorget</p>\<a href="https://maps.apple.com/?daddr=55.58640394,13.0393821">Hitta hit</a>',
		lat: 55.58640394,
		long: 13.0393821
	};
	
	var lonngarden = {
		info: '<strong>Lönngården</strong><br>\
              <p>Korsningen: Lönng/N. Grängesbergsg</p>\<a href="https://maps.apple.com/?daddr=55.58163165,13.0255419">Hitta hit</a>',
		lat: 55.58163165,
		long: 13.0255419
	};
	
	var nydalatorget = {
		info: '<strong>Nydalatorget</strong><br>\
              <a href="https://maps.apple.com/?daddr=55.57354366,13.02043766">Hitta hit</a>',
		lat: 55.57354366,
		long: 13.02043766
	};
	
	var soderkulla = {
		info: '<strong>Söderkulla</strong><br>\
              <p>Nydalastigen</p>\<a href="https://maps.apple.com/?daddr=55.56445213,13.01343374">Hitta hit</a>',
		lat: 55.56445213,
		long: 13.01343374
	};
	
	var kulladal = {
		info: '<strong>Kulladal</strong><br>\
              <p>Lindeborgsstigen</p>\<a href="https://maps.apple.com/?daddr=55.56798476,12.99118616">Hitta hit</a>',
		lat: 55.56798476,
		long: 12.99118616
	};
	
	var hylliestation = {
		info: '<strong>Hyllie Station</strong><br>\
              <p>Arenagatan</p>\<a href="https://maps.apple.com/?daddr=55.562888,12.977190">Hitta hit</a>',
		lat: 55.562888,
		long: 12.977190
	};
	
	var mollevangstorget = {
		info: '<strong>Möllevångstorget</strong><br>\
              <p>Korsningen: Bergsgatan/Möllevångstorget</p>\<a href="https://maps.apple.com/?daddr=55.5918726,13.00680064">Hitta hit</a>',
		lat: 55.5918726,
		long: 13.00680064
	};
	
	var triangeln1 = {
		info: '<strong>Triangeln Station Södra</strong><br>\
              <p>Bo Widerbergs plats</p>\<a href="https://maps.apple.com/?daddr=55.59217904,13.00195724">Hitta hit</a>',
		lat: 55.59217904,
		long: 13.00195724
	};
	
	var triangeln2 = {
		info: '<strong>Triangeln Station Norra</strong><br>\
              <p>Rådmansgatan</p>\<a href="https://maps.apple.com/?daddr=55.59386492,13.00063055">Hitta hit</a>',
		lat: 55.59386492,
		long: 13.00063055
	};
	
	var konsthallen = {
		info: '<strong>Konsthallen</strong><br>\
              <p>Pildammsvägen</p>\<a href="https://maps.apple.com/?daddr=55.59501804,12.99727611">Hitta hit</a>',
		lat: 55.59501804,
		long: 12.99727611
	};
		
	var malmostadion = {
		info: '<strong>Malmö Stadion</strong><br>\
              <p>John Ericssons väg</p>\<a href="https://maps.apple.com/?daddr=55.58757116,12.98863202">Hitta hit</a>',
		lat: 55.58757116,
		long: 12.98863202
	};
	
	var bunkeflo = {
		info: '<strong>Bunkeflostrand</strong><br>\
              <p>Rundellen på Klagshamnsvägen</p>\<a href="https://maps.apple.com/?daddr=55.55467275,12.9181543">Hitta hit</a>',
		lat: 55.55467275,
		long: 12.9181543
	};
	
	var oxie = {
		info: '<strong>Oxie</strong><br>\
              <p>Tegelbruksvägen</p>\<a href="https://maps.apple.com/?daddr=55.54141469,13.09661306">Hitta hit</a>',
		lat: 55.54141469,
		long: 13.09661306
	};
	
	var tygelsjo = {
		info: '<strong>Tygelsjö</strong><br>\
              <p>Korsningen: Tygelsjöv. / Gullkrageg.</p>\<a href="https://maps.apple.com/?daddr=55.51811141,12.99815319">Hitta hit</a>',
		lat: 55.51811141,
		long: 12.99815319
	};
    //Arlöv
	var arlovlundavagen = {
		info: '<strong>Lundavägen</strong><br>\
                <p>Vid cykelstället mellan Burlöv Center och busshållplatsen.</p>\<a href="https://goo.gl/maps/BvMtjxk5nzs">Hitta hit</a>',
		lat: 55.638967,   
		long: 13.085736
	};
    //Eskilstuna
    var torshallavagen = {
		info: '<strong>Torshällavägen</strong><br>\
                <p>Vid stora rundellen på torshällavägen</p>\<a href="https://maps.apple.com/?daddr=59.386162,16.504550">Hitta hit</a>',
		lat: 59.386162,    
		long: 16.504550
	};
	
	var faktorigatan = {
		info: '<strong>Faktorigatan 3</strong><br>\
              <p>Utanför Clarion Collection hotell</p>\<a href="https://maps.apple.com/?daddr=59.37625,16.51191">Hitta hit</a>',
		lat: 59.37625,    
		long: 16.51191
	};
	
	var fristadstorget = {
		info: '<strong>Fristadstroget</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.371308,16.514466">Hitta hit</a>',
		lat: 59.371308,    
		long: 16.514466
	};
    
    var gymnastikg = {
		info: '<strong>Gymniastikgatan</strong><br>\
                <p>Intill Rådhusbron</p>\<a href="https://maps.apple.com/?daddr=59.369698,16.513426">Hitta hit</a>',
		lat: 59.369698,     
		long: 16.513426
	};
    
    var smortorget = {
		info: '<strong>Smörtorget</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.369240,16.518193">Hitta hit</a>',
		lat: 59.369240,      
		long: 16.518193
	};
    
    var centralstation = {
		info: '<strong>Eskilstuna Centralstation</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.36905,16.50713">Hitta hit</a>',
		lat: 59.36905,        
		long: 16.50713
	};
    
    var tegelbruksv = {
		info: '<strong>Tegelbruksvägen</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=59.362156,16.506750">Hitta hit</a>',
		lat: 59.362156,         
		long: 16.506750
	};
    //götet
	var brantingsplatsen = {
		info: '<strong>Hjalmar Brantingsplatsen 1</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.720863,11.953047">Hitta hit</a>',
		lat: 57.720863,   
		long: 11.953047
	};
	
	var lindholmsallen = {
		info: '<strong>Lindholmsallén 33</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.70823,11.93861">Hitta hit</a>',
		lat: 57.70823,   
		long: 11.93861
	};
	
	var langedragsvagen = {
		info: '<strong>Långedragsvägen 21</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.680028,11.899313">Hitta hit</a>',
		lat: 57.680028,   
		long: 11.899313
	};
	
	var bangatan = {
		info: '<strong>Vaksala torg</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.698985,11.934420">Hitta hit</a>',
		lat: 57.698985,   
		long: 11.934420
	};
	
	var vasagatan = {
		info: '<strong>Vasagatan</strong><br>\
              <p>Korsningen Vasagatan-Karl Gustavsg</p>\<a href="https://maps.apple.com/?daddr=57.698248,11.967059">Hitta hit</a>',
		lat: 57.698248,   
		long: 11.967059
	};
	
	var emigrantvagen = {
		info: '<strong>Emigrantvägen</strong><br>\
              <p>Vid Masthamnsbron</p>\<a href="https://maps.apple.com/?daddr=57.702240,11.952446">Hitta hit</a>',
		lat: 57.702240,   
		long: 11.952446
	};
	
	var gustavadolfstorg = {
		info: '<strong>Gustav Adolfs torg</strong><br>\
              <p>Korsningen Köpmansg-Torgg.</p>\<a href="https://maps.apple.com/?daddr=57.707299,11.965809">Hitta hit</a>',
		lat: 57.707299,   
		long: 11.965809
	};
	
	var hotellplatsen = {
		info: '<strong>Hotellplatsen</strong><br>\
              <p>Vid Kvarnbron</p>\<a href="https://maps.apple.com/?daddr=57.707357,11.971743">Hitta hit</a>',
		lat: 57.707357,   
		long: 11.971743
	};
    
    var kapellplatsen = {
		info: '<strong>S:t Persgatan</strong><br>\
              <p>Korsningen Amund Grefweg.-Aschbergsg.</p>\<a href="https://maps.apple.com/?daddr=57.693640,11.972867">Hitta hit</a>',
		lat: 57.693640,    
		long: 11.972867
	};
    
    var sodravagen = {
		info: '<strong>Södravägen</strong><br>\
              <p>Utanför Universum</p>\<a href="https://maps.apple.com/?daddr=57.69589,11.98809">Hitta hit</a>',
		lat: 57.69589,     
		long: 11.98809
	};
    
    var sanktSigfridsPlan = {
		info: '<strong>Sankt Sigfrids Plan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.697971,11.999593">Hitta hit</a>',
		lat: 57.697971,     
		long: 11.999593
	};

    var danskavagen= {
		info: '<strong>Danska vägen 103</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.715386,12.004408">Hitta hit</a>',
		lat: 57.715386,      
		long: 12.004408
	};

    var artillerigatan = {
		info: '<strong>Artillerigatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.728718,12.010344">Hitta hit</a>',
		lat: 57.728718,      
		long: 12.010344
	};

    
    var frolundatorg = {
		info: '<strong>Frölunda torg</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.652461,11.911030">Hitta hit</a>',
		lat: 57.652461,     
		long: 11.911030
	};

    var torslanda = {
		info: '<strong>Torslanda</strong><br>\
              <p>Amhults Torg</p>\<a href="https://maps.apple.com/?daddr=57.710297,11.773469">Hitta hit</a>',
		lat: 57.710297,      
		long: 11.773469
	};
    
    var linneplatsen = {
		info: '<strong>Linnéplatsen 11</strong><br>\
              <p>Amhults Torg</p>\<a href="https://maps.apple.com/?daddr=57.689970,11.951945">Hitta hit</a>',
		lat: 57.689970,       
		long: 11.951945
	};
    //halmstad
	var actic = {
		info: '<strong>Actic</strong><br>\
                <p>Vid badhusplatsen</p>\<a href="https://maps.apple.com/?daddr=56.679804,12.855899">Hitta hit</a>',
		lat: 56.679804,    
		long: 12.855899
	};
	
	var halmstadC = {
		info: '<strong>Halmstad Centralstation</strong><br>\
              <p>Vid den nordvästra delen av stationsområdet.(nära gångbron)</p>\<a href="https://maps.apple.com/?daddr=56.669741,12.864379">Hitta hit</a>',
		lat: 56.669741,   
		long: 12.864379
	};
	
	var stationsParken = {
		info: '<strong>Stations Parken</strong><br>\
                <p>Vid cykelparkeringen tvärs emot stationen.</p>\<a href="https://maps.apple.com/?daddr=56.669166,12.863339">Hitta hit</a>',
		lat: 56.669166,   
		long: 12.863339
	};
    
    var storaTorg = {
		info: '<strong>Stora torg</strong><br>\
                <p>Korsningen Storgatan-Bangatan.</p>\<a href="https://maps.apple.com/?daddr=56.674330,12.858127">Hitta hit</a>',
		lat: 56.674330,   
		long: 12.858127
	};
    //helsingborg
    	var palsjogatan = {
		info: '<strong>Pålsjögatan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=56.057143,12.692707">Hitta hit</a>',
		lat: 56.057143,  
		long: 12.692707
	};
	
	var idrottenshus = {
		info: '<strong>Idrottens hus</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.052023,12.704589">Hitta hit</a>',
		lat: 56.052023,  
		long: 12.704589
	};
	
	var centralen1 = {
		info: '<strong>Helsingborgs Centralstation</strong><br>\
                <p>Vid Kungstorget utanför Knutpunkten</p>\<a href="https://maps.apple.com/?daddr=56.045262,12.693493">Hitta hit</a>',
		lat: 56.045262,  
		long: 12.693493
	};
	
	var centralen2 = {
		info: '<strong>Helsingborgs Centralstation</strong><br>\
              <p>Vid Knutpunktens södra entré</p>\<a href="https://maps.apple.com/?daddr=56.042348,12.696360">Hitta hit</a>',
		lat: 56.042348,  
		long: 12.696360
	};
	
	var masterpalm = {
		info: '<strong>Mäster Palms plats</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.040580,12.701795">Hitta hit</a>',
		lat: 56.040580,  
		long: 12.701795
	};
	
	var planteringen = {
		info: '<strong>Planteringen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.026966,12.708053">Hitta hit</a>',
		lat: 56.026966,  
		long: 12.708053
	};
	
	var ramlosa = {
		info: '<strong>Ramlösa Station</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.023963,12.728638">Hitta hit</a>',
		lat: 56.023963, 
		long: 12.728638 
	};
	
	var raavagen = {
		info: '<strong>Rååvägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=56.000587,12.738506">Hitta hit</a>',
		lat: 56.000587,  
		long: 12.738506
	};
    //jönköping
    var hotellplan = {
		info: '<strong>Hotellplan</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=57.783711,14.169379">Hitta hit</a>',
		lat: 57.783711,   
		long: 14.169379
	};
	
	var strandgatan = {
		info: '<strong>Södra Strandgatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=57.781673,14.170421">Hitta hit</a>',
		lat: 57.781673,   
		long: 14.170421
	};
	
	var jonköpingscentralstation = {
		info: '<strong>Jönköpings Centralstation</strong><br>\
                <p>Vid cykelställen på Järnvägsgatan</p>\<a href="https://maps.apple.com/?daddr=57.784032,14.164132">Hitta hit</a>',
		lat: 57.784032,   
		long: 14.164132
	};
    //kalmar
    var falkenbergsskolansSporthall = {
		info: '<strong>Falkenbergsskolans sporthall</strong><br>\
                <p>Falkenbergsvägen 12</p>\<a href="https://maps.apple.com/?daddr=56.662206,16.327107">Hitta hit</a>',
		lat: 56.662206,     
		long: 16.327107
	};
	
	var friskisSvettis = {
		info: '<strong>Friskis & Svettis</strong><br>\
              <p>Borgmästaregatan 11 vid cykelparkeringen ut mot Norra vägen</p>\<a href="https://maps.apple.com/?daddr=56.672664,16.350640">Hitta hit</a>',
		lat: 56.672664,    
		long: 16.350640
	};
	
	var järnvägsstationen1 = {
		info: '<strong>Järnvägsstationen 1</strong><br>\
                <p>Vid Pressbyrån.</p>\<a href="https://maps.apple.com/?daddr=56.661537,16.360718">Hitta hit</a>',
		lat: 56.661537,   
		long: 16.360718
	};
    
    var järnvägsstationen2 = {
		info: '<strong>Järnvägsstationen 2</strong><br>\
                <p>Inne i cykelparkeringen nära Tullbron.</p>\<a href="https://maps.apple.com/?daddr=56.661813,16.359136">Hitta hit</a>',
		lat: 56.661813,  
		long: 16.359136
	};
    
    var kalmarNyckeln = {
		info: '<strong>Kalmar Nyckel</strong><br>\
                <p>Vid stora cykelparkeringen.</p>\<a href="https://maps.apple.com/?daddr=56.677892,16.357051">Hitta hit</a>',
		lat: 56.677892,  
		long: 16.357051
	};
    
    var landstingshuset = {
		info: '<strong>Landstingshuset</strong><br>\
                <p>Strömgatan 13.</p>\<a href="https://maps.apple.com/?daddr=56.665515,16.362860">Hitta hit</a>',
		lat: 56.665515,  
		long: 16.362860
	};
    
    var aventyrsbadet = {
		info: '<strong>Äventyrsbadet</strong><br>\
                <p>Mitt emot entren, Smålandsgatan 23</p>\<a href="https://maps.apple.com/?daddr=56.668275,16.349685">Hitta hit</a>',
		lat: 56.668275,  
		long: 16.349685
	};
    
    var lassarettet = {
		info: '<strong>Länssjukhuset</strong><br>\
                <p>Till höger om akutmottagningen.</p>\<a href="https://maps.apple.com/?daddr=56.657546,16.333101">Hitta hit</a>',
		lat: 56.657546,  
		long: 16.333101
	};
    
    var synagogan = {
		info: '<strong>Synagogan</strong><br>\
                <p>På stortorget 38</p>\<a href="https://maps.apple.com/?daddr=56.663932,16.366069">Hitta hit</a>',
		lat: 56.663932,  
		long: 16.366069
	};
	    
    var varvsholmen = {
		info: '<strong>Varvasholmen utanför Sykes</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=56.670104,16.377383">Hitta hit</a>',
		lat: 56.670104,  
		long: 16.377383
	};
    //linköping
	var stationsoder = {
		info: '<strong>Vikingstads station söder</strong><br>\
                <p>Lokegatan</p>\<a href="https://maps.apple.com/?daddr=58.383295,15.433566">Hitta hit</a>',
		lat: 58.383295,  
		long: 15.433566
	};
	
	var stationnorr = {
		info: '<strong>Vikingstads station norr</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.384107,15.433879">Hitta hit</a>',
		lat: 58.384107,  
		long: 15.433879
	};
	
	var lambohovscentrum = {
		info: '<strong>Lambohovs centrum</strong><br>\
                <p></p>\<a href="https://maps.apple.com/?daddr=58.387971,15.566860">Hitta hit</a>',
		lat: 58.387971,  
		long: 15.566860
	};
	
	var rydscentrum = {
		info: '<strong>Ryds centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.408370,15.564625">Hitta hit</a>',
		lat: 58.408370,  
		long: 15.564625
	};
	
	var skaggetorpscentrum = {
		info: '<strong>Skäggtorps centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.426110,15.583248">Hitta hit</a>',
		lat: 58.426110,  
		long: 15.583248
	};
	
	var agatan = {
		info: '<strong>Ågatan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.411982,15.618926">Hitta hit</a>',
		lat: 58.411982,  
		long: 15.618926
	};
	
	var linkopingstation = {
		info: '<strong>Linköping station</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.415978,15.625416">Hitta hit</a>',
		lat: 58.415978,  
		long: 15.625416
	};
	
	var tanneforscentrum = {
		info: '<strong>Tannefors centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.405979,15.642512">Hitta hit</a>',
		lat: 58.405979,  
		long: 15.642512
	};
    
    var bergasoderleden = {
		info: '<strong>Berge söderleden</strong><br>\
              <p>Vid busshållplatsen</p>\<a href="https://maps.apple.com/?daddr=58.393244,15.645540">Hitta hit</a>',
		lat: 58.393244,   
		long: 15.645540
	};
    
    var johannelundscentrum = {
		info: '<strong>Johannelunds centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.395127,15.663579">Hitta hit</a>',
		lat: 58.395127,    
		long: 15.663579
	};
    
    var ekholmenscentrum = {
		info: '<strong>Ekholmens centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.381092,15.679299">Hitta hit</a>',
		lat: 58.381092,    
		long: 15.679299
	};

    var orkestervagen= {
		info: '<strong>Orkestervägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.366897,15.690202">Hitta hit</a>',
		lat: 58.366897,     
		long: 15.690202
	};

    
    var nackrosvagen = {
		info: '<strong>Näckrosvägen</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.335949,15.721289">Hitta hit</a>',
		lat: 58.335949,     
		long: 15.721289
	};

    
    var tallboda = {
		info: '<strong>Tallboda centrum</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.425560,15.678158">Hitta hit</a>',
		lat: 58.425560,    
		long: 15.678158
	};
    
    var ljungsbro = {
		info: '<strong>Ljungsbro busstation</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.509019,15.501551">Hitta hit</a>',
		lat: 58.509019,    
		long: 15.501551
	};
    
    var vretaklosterkyrka = {
		info: '<strong>Vreta kloster kyrkan</strong><br>\
              <p></p>\<a href="https://maps.apple.com/?daddr=58.482325,15.521955">Hitta hit</a>',
		lat: 58.482325,    
		long: 15.521955
	};
    //luleå
    var storgatan = {
		info: '<strong>Storgatan</strong><br>\
                <p>Korssningen: Storgatan-Hermelinsgatan</p>\<a href="https://maps.apple.com/?daddr=65.584991,22.159655">Hitta hit</a>',
		lat: 65.584991,   
		long: 22.159655
	};
    //lund
	var magistratsvagen = {
		info: '<strong>Magistratsvägen</strong><br>\
                <p>Cykelparkeringen vid bussens vändhållplats</p>\<a href="https://maps.apple.com/?daddr=55.720157,13.209625">Hitta hit</a>',
		lat: 55.720157, 
		long: 13.209625
	};
	
	var karhuset = {
		info: '<strong>Kårhuset</strong><br>\
              <p>Korsningen Sölvegatan John Ericsons väg, busshållplats Kårhuset</p>\<a href="https://maps.apple.com/?daddr=55.712385,13.208214">Hitta hit</a>',
		lat: 55.712385, 
		long: 13.208214
	};
	
	var ideon = {
		info: '<strong>Ideon</strong><br>\
                <p>Sölvegatan, busshållplats Ideon</p>\<a href="https://maps.apple.com/?daddr=55.715560,13.214575">Hitta hit</a>',
		lat: 55.715560, 
		long: 13.214575
	};
	
	var lundcentralen1 = {
		info: '<strong>Lunds centralstation</strong><br>\
              <p>Västra stationstorget</p>\<a href="https://maps.apple.com/?daddr=55.705309,13.185480">Hitta hit</a>',
		lat: 55.705309, 
		long: 13.185480
	};
	
	var lundcentralen2 = {
		info: '<strong>Lunds centralstation</strong><br>\
              <p>Bangatan, söder om huvudbyggnaden</p>\<a href="https://maps.apple.com/?daddr=55.704603,13.187687">Hitta hit</a>',
		lat: 55.704603, 
		long: 13.187687
	};
	
	var vavaregatan = {
		info: '<strong>Vävaregatan</strong><br>\
              <p>Kommunhuset Kristallen</p>\<a href="https://maps.apple.com/?daddr=55.708995,13.184617">Hitta hit</a>',
		lat: 55.708995, 
		long: 13.184617
	};
	
	var stortorget = {
		info: '<strong>Stortorget</strong><br>\
              <p>Mitt för Kungsgatan</p>\<a href="https://maps.apple.com/?daddr=55.703082,13.193237">Hitta hit</a>',
		lat: 55.703082, 
		long: 13.193237
	};
	
	var dalbyvagen = {
		info: '<strong>Dalbyvägen</strong><br>\
              <p>Vid busshållplats Jupitergatan</p>\<a href="https://maps.apple.com/?daddr=55.698969,13.213679">Hitta hit</a>',
		lat: 55.698969, 
		long: 13.213679
	};
    
    var malmovagen = {
		info: '<strong>Malmövägen</strong><br>\
              <p>Korsningen Malmövägen/Ringvägen, söder om Mejeriet</p>\<a href="https://maps.apple.com/?daddr=55.69537,13.18858">Hitta hit</a>',
		lat: 55.69537,  
		long: 13.18858
	};
    //sthlm
	var karlbergstation = {
		info: '<strong>Karlberg station</strong><br>\
                <p>Norrbackagatan 1-3</p>\<a href="https://goo.gl/maps/Whvof3C6n442">Hitta hit</a>',
		lat: 59.339696, 
		long: 18.030228
	};
	
	var bagarmossen = {
		info: '<strong>Bagarmossen centrum</strong><br>\
              <p>Vid T-banestationen</p>\<a href="https://goo.gl/maps/78DXoXfP2or">Hitta hit</a>',
		lat: 59.276293, 
		long: 18.131550
	};
	
	var farstastrand = {
		info: '<strong>Farsta strand station</strong><br>\
                <p>Vid Brattfosgatan</p>\<a href="https://goo.gl/maps/MgW3iv8bUQM2">Hitta hit</a>',
		lat: 59.237037, 
		long: 18.101061
	};
	
	var kungsholmen = {
		info: '<strong>Kungsholmen</strong><br>\
              <p>Fleminggatan 6</p>\<a href="https://goo.gl/maps/oQg7HUmbJQG2">Hitta hit</a>',
		lat: 59.332625, 
		long: 18.047423
	};
	
	var hammarbysjostad = {
		info: '<strong>Hammarby sjöstad</strong><br>\
              <p>Vid Lumabryggan</p>\<a href="https://goo.gl/maps/pXKfR6cShRP2">Hitta hit</a>',
		lat: 59.305575, 
		long: 18.099279
	};
	
	var hornstull = {
		info: '<strong>Västra hamnen</strong><br>\
              <p>På nya torget</p>\<a href="https://goo.gl/maps/yKq25SG2xA62">Hitta hit</a>',
		lat: 59.315997, 
		long: 18.034116
	};
	
	var hokarangen = {
		info: '<strong>Hökarängen T-banestation</strong><br>\
              <p></p>\<a href="https://goo.gl/maps/6JW4BzMS5Xk">Hitta hit</a>',
		lat: 59.25788, 
		long: 18.08210
	};
	
	var kista = {
		info: '<strong>Kista T-banestation</strong><br>\
              <p>Vid Vejlegatan</p>\<a href="https://goo.gl/maps/8LGa3YWEgpx">Hitta hit</a>',
		lat: 59.401749, 
		long: 17.943564
	};
	
	var munkbroleden = {
		info: '<strong>Munkbroleden, Gamla stan</strong><br>\
              <p>Vid T-banestationen</p>\<a href="https://goo.gl/maps/msRJTema3EB2">Hitta hit</a>',
		lat: 59.322953, 
		long: 18.067991
	};

	var raoulWallenbergstorg = {
		info: '<strong>Raoul Wallenbergs torg</strong><br>\
              <p>Nybroplan</p>\<a href="https://goo.gl/maps/JsbE9ZSuLu92">Hitta hit</a>',
		lat: 59.332688, 
		long: 18.075944
	};
	
	var skeppsbron = {
		info: '<strong>Skeppsbron, Slussen</strong><br>\
              <p>Vid tullhus 3</p>\<a href="https://goo.gl/maps/vTnzoRaskw52">Hitta hit</a>',
		lat: 59.321758, 
		long: 18.074256
	};
	
	var spangastation = {
		info: '<strong>Spånga station</strong><br>\
              <p></p>\<a href="https://goo.gl/maps/WVUAHqWJm1Q2">Hitta hit</a>',
		lat: 59.382517, 
		long: 17.898438
	};
	
	var stadsgardsleden = {
		info: '<strong>Stadsgårdsleden</strong><br>\
              <p>Vid Fotografiska museet/stora tullhuset</p>\<a href="https://goo.gl/maps/vm6QDZtngiR2">Hitta hit</a>',
		lat: 59.318032, 
		long: 18.084035
	};
	
	var ostermalm = {
		info: '<strong>Östermalm</strong><br>\
              <p>Strandvägen 15 vid kajen</p>\<a href="https://goo.gl/maps/PtAU4mDS73k">Hitta hit</a>',
		lat: 59.331760, 
		long: 18.082805
	};
	
	var stureplan = {
		info: '<strong>Stureplan</strong><br>\
              <p>Stureplan</p>\<a href="https://goo.gl/maps/bUbcNEjKXco">Hitta hit</a>',
		lat: 59.336072, 
		long: 18.072750
	};
	
	var vastertorp = {
		info: '<strong>Västertorp T-banestation</strong><br>\
              <p>Vid södra utgången mot E4:an</p>\<a href="https://goo.gl/maps/xSY1ZSVmgzS2">Hitta hit</a>',
		lat: 59.290367, 
		long: 17.965504
	};
	
	var akeshovTbanestation = {
		info: '<strong>Åkeshov T-banestation</strong><br>\
              <p>vid T-banestationen</p>\<a href="https://goo.gl/maps/Uvi8UJNezUz">Hitta hit</a>',
		lat: 59.342295, 
		long: 17.925060
	};
	
	var arstabergstation = {
		info: '<strong>Årstaberg station</strong><br>\
              <a href="https://goo.gl/maps/bYkxSG2vSE12">Hitta hit</a>',
		lat: 59.299908, 
		long: 18.030327
	};
	
	var alvsjostation = {
		info: '<strong>Älvsjö station</strong><br>\
              <a href="https://goo.gl/maps/G1FQyrpZbWv">Hitta hit</a>',
		lat: 59.278674, 
		long: 18.008428
	};
    //uppsala
	var stadstradgarden1 = {
		info: '<strong>Stadsträdgården</strong><br>\
                <p>vid entrén till Stadsträdgården, intill pumphuset och Svandammen</p>\<a href="https://maps.apple.com/?daddr=59.854762,17.640999">Hitta hit</a>',
		lat: 59.854762,  
		long: 17.640999
	};
	
	var svartbackegatan = {
		info: '<strong>Svartbäckegatan</strong><br>\
              <p>Korsningen Svartbäcksgatan–Skolgatan</p>\<a href="https://maps.apple.com/?daddr=59.862350,17.632149">Hitta hit</a>',
		lat: 59.862350,  
		long: 17.632149
	};
	
	var dragarbrunnsgatan = {
		info: '<strong>Dragarbrunnsgatan</strong><br>\
                <p>Korsningen Dragarbrunnsgatan–Vretgränd</p>\<p>(Olrogs plats)</p>\<a href="https://maps.apple.com/?daddr=59.856365,17.645618">Hitta hit</a>',
		lat: 59.856365,  
		long: 17.645618
	};
	
	var Vaksalatorg = {
		info: '<strong>Vaksala torg</strong><br>\
              <p>Västra stationstorget</p>\<a href="https://maps.apple.com/?daddr=59.861142,17.646946">Hitta hit</a>',
		lat: 59.861142,  
		long: 17.646946
	};
	
	var torsgatan = {
		info: '<strong>Torsgatan</strong><br>\
              <p>Korsningen Torsgatan–Börjegatan</p>\<a href="https://maps.apple.com/?daddr=59.860908,17.626556">Hitta hit</a>',
		lat: 59.860908,  
		long: 17.626556
	};
	
	var gamlaUppsalagatan1 = {
		info: '<strong>Gamla Uppsalagatan</strong><br>\
              <p>Korsningen Gamla Uppsalagatan–Svartbäcksgatan</p>\<a href="https://maps.apple.com/?daddr=59.87009,17.62743">Hitta hit</a>',
		lat: 59.87009,  
		long: 17.62743
	};
	
	var gamlaUppsalagatan2 = {
		info: '<strong>Stortorget</strong><br>\
              <p>Korsningen Gamla Uppsalagatan–Vattholmavägen</p>\<a href="https://maps.apple.com/?daddr=59.873307,17.638207">Hitta hit</a>',
		lat: 59.873307,  
		long: 17.638207
	};
	
	var bergsbrunnagatan = {
		info: '<strong>Dalbyvägen</strong><br>\
              <p>Korsningen Bergsbrunnagatan–Alsikegatan</p>\<a href="https://maps.apple.com/?daddr=59.856510,17.655123">Hitta hit</a>',
		lat: 59.856510,  
		long: 17.655123
	};
    
    var stPersgatan = {
		info: '<strong>S:t Persgatan</strong><br>\
              <p>Korsningen Salagatan–S:t Persgatan</p>\<a href="https://maps.apple.com/?daddr=59.862643,17.644262">Hitta hit</a>',
		lat: 59.862643,   
		long: 17.644262
	};
    
    var CarolinaParken = {
		info: '<strong>Carolina Parken</strong><br>\
              <p>Bakom Carolina Rediviva</p>\<a href="https://maps.apple.com/?daddr=59.855306,17.629664">Hitta hit</a>',
		lat: 59.855306,    
		long: 17.629664
	};
    
    var dagHammarskjoldsvag = {
		info: '<strong>Dag Hammarskjölds väg</strong><br>\
              <p>I höjd med infarten till Uppsala Science Park.</p>\<a href="https://maps.apple.com/?daddr=59.842480,17.639060">Hitta hit</a>',
		lat: 59.842480,    
		long: 17.639060
	};

    var resecentrum= {
		info: '<strong>Resecentrum</strong><br>\
              <p>Västra sidan, korsningen Bredgränd/Stadshusgatan</p>\<a href="https://maps.apple.com/?daddr=59.859053,17.644075">Hitta hit</a>',
		lat: 59.859053,     
		long: 17.644075
	};

    var kungsgatan = {
		info: '<strong>Kungsgatan</strong><br>\
              <p>Korsningen Kungsgatan-Kungsängsesplanaden</p>\<a href="https://maps.apple.com/?daddr=59.849341,17.660489">Hitta hit</a>',
		lat: 59.849341,     
		long: 17.660489
	};

    var stadstradgarden2 = {
		info: '<strong>Stadsträdgården</strong><br>\
              <p>Intill utomhusscenen Parksnäckan</p>\<a href="https://maps.apple.com/?daddr=59.851327,17.644350">Hitta hit</a>',
		lat: 59.851327,    
		long: 17.644350
	};

    var kyrkogardsgatan = {
		info: '<strong>Kyrkogårdsgatan</strong><br>\
              <p>Rundellen Kyrkogårdsgatan–S:t Johannesgatan</p>\<a href="https://maps.apple.com/?daddr=59.857576,17.625237">Hitta hit</a>',
		lat: 59.857576,     
		long: 17.625237
	};
    //växjö
	var vastraEsplanaden = {
		info: '<strong>Västra Esplanaden-Storgatan</strong><br>\
                <p>I allén utanför Mc Donalds</p>\<a href="https://maps.apple.com/?daddr=56.879111,14.801573">Hitta hit</a>',
		lat: 56.879111,    
		long: 14.801573
	};
	
	var vattentorget = {
		info: '<strong>Vattentorget</strong><br>\
              <p>Vid cykelparkeringen vid Vilhelm Mobergs gata</p>\<a href="https://maps.apple.com/?daddr=56.875977,14.810226">Hitta hit</a>',
		lat: 56.875977,   
		long: 14.810226
	};
	
	var vaxjoStation = {
		info: '<strong>Växjö Station</strong><br>\
                <p>Vid cykelgaraget på stationsområdet.</p>\<a href="https://maps.apple.com/?daddr=56.876844,14.807196">Hitta hit</a>',
		lat: 56.876844,   
		long: 14.807196
	};


	//Min Array
	var locations = [
		[sodervarn.info, sodervarn.lat, sodervarn.long, 0],
		[erikslust.info, erikslust.lat, erikslust.long, 1],
		[lugnet.info, lugnet.lat, lugnet.long, 2],
		[kungsparkern.info, kungsparkern.lat, kungsparkern.long, 3],
		[ribersborg.info, ribersborg.lat, ribersborg.long, 4],
		[vastrahamnen.info, vastrahamnen.lat, vastrahamnen.long, 5],
		[bagersplats.info, bagersplats.lat, bagersplats.long, 6],
		[centralen1.info, centralen1.lat, centralen1.long, 7],
		[centralen2.info, centralen2.lat, centralen2.long, 8],
		[lillatorg.info, lillatorg.lat, lillatorg.long, 9],
		[varnhem.info, varnhem.lat, varnhem.long, 10],
		[lundavagen.info, lundavagen.lat, lundavagen.long, 11],
		[bulltofta.info, bulltofta.lat, bulltofta.long, 12],
		[videdal.info, videdal.lat, videdal.long, 13],
		[rosengard.info, rosengard.lat, rosengard.long, 14],
		[lonngarden.info, lonngarden.lat, lonngarden.long, 15],		
		[nydalatorget.info, nydalatorget.lat, nydalatorget.long, 16],
		[soderkulla.info, soderkulla.lat, soderkulla.long, 17],	
		[kulladal.info, kulladal.lat, kulladal.long, 18],
		[hylliestation.info, hylliestation.lat, hylliestation.long, 19],
		[mollevangstorget.info, mollevangstorget.lat, mollevangstorget.long, 20],
		[triangeln1.info, triangeln1.lat, triangeln1.long, 21],
		[triangeln2.info, triangeln2.lat, triangeln2.long, 22],	
		[konsthallen.info, konsthallen.lat, konsthallen.long, 23],	
		[malmostadion.info, malmostadion.lat, malmostadion.long, 24],
		[bunkeflo.info, bunkeflo.lat, bunkeflo.long, 25],
		[oxie.info, oxie.lat, oxie.long, 26],
		[tygelsjo.info, tygelsjo.lat, tygelsjo.long, 27],
        [arlovlundavagen.info, arlovlundavagen.lat, arlovlundavagen.long, 28],
        [torshallavagen.info, torshallavagen.lat, torshallavagen.long, 29],
		[faktorigatan.info, faktorigatan.lat, faktorigatan.long, 30],
		[gymnastikg.info, gymnastikg.lat, gymnastikg.long, 31],
        [smortorget.info, smortorget.lat, smortorget.long, 32],
        [centralstation.info, centralstation.lat, centralstation.long, 33],
        [tegelbruksv.info, tegelbruksv.lat, tegelbruksv.long, 34],
        [brantingsplatsen.info, brantingsplatsen.lat, brantingsplatsen.long, 35],
		[lindholmsallen.info, lindholmsallen.lat, lindholmsallen.long, 36],
		[langedragsvagen.info, langedragsvagen.lat, langedragsvagen.long, 37],
		[bangatan.info, bangatan.lat, bangatan.long, 38],
		[vasagatan.info, vasagatan.lat, vasagatan.long, 39],
		[emigrantvagen.info, emigrantvagen.lat, emigrantvagen.long, 40],
		[gustavadolfstorg.info, gustavadolfstorg.lat, gustavadolfstorg.long, 41],
		[hotellplatsen.info, hotellplatsen.lat, hotellplatsen.long, 42],
		[kapellplatsen.info, kapellplatsen.lat, kapellplatsen.long, 43],
        [sodravagen.info, sodravagen.lat, sodravagen.long, 44],
        [sanktSigfridsPlan.info, sanktSigfridsPlan.lat, sanktSigfridsPlan.long, 45],
        [danskavagen.info, danskavagen.lat, danskavagen.long, 46],
        [artillerigatan.info, artillerigatan.lat, artillerigatan.long, 47],	
        [frolundatorg.info, frolundatorg.lat, frolundatorg.long, 48],
        [torslanda.info, torslanda.lat, torslanda.long, 49],
        [linneplatsen.info, linneplatsen.lat, linneplatsen.long, 50],
        [actic.info, actic.lat, actic.long, 51],
		[halmstadC.info, halmstadC.lat, halmstadC.long, 52],
		[stationsParken.info, stationsParken.lat, stationsParken.long, 53],	
        [storaTorg.info, storaTorg.lat, storaTorg.long, 54],
        [palsjogatan.info, palsjogatan.lat, palsjogatan.long, 55],
		[idrottenshus.info, idrottenshus.lat, idrottenshus.long, 56],
		[centralen1.info, centralen1.lat, centralen1.long, 57],
		[centralen2.info, centralen2.lat, centralen2.long, 58],
		[masterpalm.info, masterpalm.lat, masterpalm.long, 59],
		[planteringen.info, planteringen.lat, planteringen.long, 60],
		[ramlosa.info, ramlosa.lat, ramlosa.long, 61],
		[raavagen.info, raavagen.lat, raavagen.long, 62],
        [hotellplan.info, hotellplan.lat, hotellplan.long, 63],
		[strandgatan.info, strandgatan.lat, strandgatan.long, 64],
		[jonköpingscentralstation.info, jonköpingscentralstation.lat, jonköpingscentralstation.long, 65],
        [falkenbergsskolansSporthall.info, falkenbergsskolansSporthall.lat, falkenbergsskolansSporthall.long, 66],
		[friskisSvettis.info, friskisSvettis.lat, friskisSvettis.long, 67],
		[järnvägsstationen1.info, järnvägsstationen1.lat, järnvägsstationen1.long, 68],	
        [järnvägsstationen2.info, järnvägsstationen2.lat, järnvägsstationen2.long, 69],
        [kalmarNyckeln.info, kalmarNyckeln.lat, kalmarNyckeln.long, 70],
        [landstingshuset.info, landstingshuset.lat, landstingshuset.long, 71],
        [aventyrsbadet.info, aventyrsbadet.lat, aventyrsbadet.long, 72],
        [lassarettet.info, lassarettet.lat, lassarettet.long, 73],
        [synagogan.info, synagogan.lat, synagogan.long, 74],
        [varvsholmen.info, varvsholmen.lat, varvsholmen.long, 75],
        [stationsoder.info, stationsoder.lat, stationsoder.long, 76],
		[stationnorr.info, stationnorr.lat, stationnorr.long, 77],
		[lambohovscentrum.info, lambohovscentrum.lat, lambohovscentrum.long, 78],
		[rydscentrum.info, rydscentrum.lat, rydscentrum.long, 79],
		[skaggetorpscentrum.info, skaggetorpscentrum.lat, skaggetorpscentrum.long, 80],
		[agatan.info, agatan.lat, agatan.long, 81],
		[linkopingstation.info, linkopingstation.lat, linkopingstation.long, 82],
		[tanneforscentrum.info, tanneforscentrum.lat, tanneforscentrum.long, 83],
		[bergasoderleden.info, bergasoderleden.lat, bergasoderleden.long, 84],
        [johannelundscentrum.info, johannelundscentrum.lat, johannelundscentrum.long, 85],	
        [ekholmenscentrum.info, ekholmenscentrum.lat, ekholmenscentrum.long, 86],	
        [orkestervagen.info, orkestervagen.lat, orkestervagen.long, 87],
        [nackrosvagen.info, nackrosvagen.lat, nackrosvagen.long, 88],
        [tallboda.info, tallboda.lat, tallboda.long, 89],
        [ljungsbro.info, ljungsbro.lat, ljungsbro.long, 90],
        [vretaklosterkyrka.info, vretaklosterkyrka.lat, vretaklosterkyrka.long, 91],
        [storgatan.info, storgatan.lat, storgatan.long, 92],
        [magistratsvagen.info, magistratsvagen.lat, magistratsvagen.long, 93],
		[karhuset.info, karhuset.lat, karhuset.long, 94],
		[ideon.info, ideon.lat, ideon.long, 95],
		[lundcentralen1.info, lundcentralen1.lat, lundcentralen1.long, 96],
		[lundcentralen2.info, lundcentralen2.lat, lundcentralen2.long, 97],
		[vavaregatan.info, vavaregatan.lat, vavaregatan.long, 98],
		[stortorget.info, stortorget.lat, stortorget.long, 99],
		[dalbyvagen.info, dalbyvagen.lat, dalbyvagen.long, 100],
		[malmovagen.info, malmovagen.lat, malmovagen.long, 101],
        [karlbergstation.info, karlbergstation.lat, karlbergstation.long, 102],
		[bagarmossen.info, bagarmossen.lat, bagarmossen.long, 103],
		[farstastrand.info, farstastrand.lat, farstastrand.long, 104],
		[kungsholmen.info, kungsholmen.lat, kungsholmen.long, 105],
		[hammarbysjostad.info, hammarbysjostad.lat, hammarbysjostad.long, 106],
		[hornstull.info, hornstull.lat, hornstull.long, 107],
		[hokarangen.info, hokarangen.lat, hokarangen.long, 108],
		[kista.info, kista.lat, kista.long, 109],
		[munkbroleden.info, munkbroleden.lat, munkbroleden.long, 110],
		[raoulWallenbergstorg.info, raoulWallenbergstorg.lat, raoulWallenbergstorg.long, 111],
		[skeppsbron.info, skeppsbron.lat, skeppsbron.long, 112],
		[spangastation.info, spangastation.lat, spangastation.long, 113],
		[stadsgardsleden.info, stadsgardsleden.lat, stadsgardsleden.long, 114],
		[ostermalm.info, ostermalm.lat, ostermalm.long, 115],
		[stureplan.info, stureplan.lat, stureplan.long, 116],
		[vastertorp.info, vastertorp.lat, vastertorp.long, 117],		
		[akeshovTbanestation.info, akeshovTbanestation.lat, akeshovTbanestation.long, 118],
		[arstabergstation.info, arstabergstation.lat, arstabergstation.long, 119],	
		[alvsjostation.info, alvsjostation.lat, alvsjostation.long, 120],
		[stadstradgarden1.info, stadstradgarden1.lat, stadstradgarden1.long, 121],
		[svartbackegatan.info, svartbackegatan.lat, svartbackegatan.long, 122],
		[dragarbrunnsgatan.info, dragarbrunnsgatan.lat, dragarbrunnsgatan.long, 123],
		[Vaksalatorg.info, Vaksalatorg.lat, Vaksalatorg.long, 124],
		[torsgatan.info, torsgatan.lat, torsgatan.long, 125],
		[gamlaUppsalagatan1.info, gamlaUppsalagatan1.lat, gamlaUppsalagatan1.long, 126],
		[gamlaUppsalagatan2.info, gamlaUppsalagatan2.lat, gamlaUppsalagatan2.long, 127],
		[bergsbrunnagatan.info, bergsbrunnagatan.lat, bergsbrunnagatan.long, 128],
		[stPersgatan.info, stPersgatan.lat, stPersgatan.long, 129],
        [CarolinaParken.info, CarolinaParken.lat, CarolinaParken.long, 130],	
        [dagHammarskjoldsvag.info, dagHammarskjoldsvag.lat, dagHammarskjoldsvag.long, 131],	
        [resecentrum.info, resecentrum.lat, resecentrum.long, 132],
        [kungsgatan.info, kungsgatan.lat, kungsgatan.long, 133],
        [stadstradgarden2.info, stadstradgarden2.lat, stadstradgarden2.long, 134],
        [kyrkogardsgatan.info, kyrkogardsgatan.lat, kyrkogardsgatan.long, 135],
        [vastraEsplanaden.info, vastraEsplanaden.lat, vastraEsplanaden.long, 136],
		[vattentorget.info, vattentorget.lat, vattentorget.long, 137],
		[vaxjoStation.info, vaxjoStation.lat, vaxjoStation.long, 138]	
	]
	
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 5,
	center: new google.maps.LatLng(62.040731, 15.130184),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true
	});
    
    // Back button - Create the DIV to hold the control and call the CenterControl() constructor
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    // Back button end
	
    var gmarkers = [];
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});
        
        var infowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
        gmarkers.push(marker);
	}	
    
    var markerCluster = new MarkerClusterer(map, gmarkers);
}

function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Reset map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Reset map';
  controlUI.appendChild(controlText);
    
   // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
   map.setZoom(5);
  });
}