

var spaceImages = {
  'default': 'https://i.imgur.com/jFy7vOF.png',
  'Demystify': 'spaces-images/MozFest_DemystifyTheWeb.png',
  'Localisation': 'spaces-images/MozFest_Localisation.png',
  'MozEx': 'spaces-images/MozFest_MozEx.png',
  'Digital Arts And Culture': 'spaces-images/MozFest_DigitalArtCulture.png',
  'Dilemmas In Connected Spaces': 'spaces-images/MozFest_DilemmasInConnectedSpaces.png',
  'Fuel the Movement': 'spaces-images/MozFest_FuelTheMovement.png',
  'Open Badges': 'spaces-images/MozFest_OpenBadges.png',
  'Open Science': 'spaces-images/MozFest_OpenScience.png',
  'Youth': 'spaces-images/MozFest_YouthZone.png',
  'Barista Station': 'spaces-images/MozFest_BaristaStation.png'
  //'': 'spaces-images/MozFest_Toilets.png',
};

var tags = {
  'title': 3,
  'url': 5,
  'imageURL': 'https:i.imgur.com/jFy7vOF.png',
  'detailURL': 4
};


var fs = require('fs');
var tpl = fs.readFileSync('beacon-template.html', 'utf8');

//console.log(file);

//  "1","Youth","2","HTC Vive tilt brush; Minecraft for Artists","https://app.mozillafestival.org/#_session-35","https://autonome.github.io/mozfestation/beacon1.html",

var data = [
  ["1","Youth","2","HTC Vive tilt brush; Minecraft for Artists","https://app.mozillafestival.org/#_session-35","https://autonome.github.io/mozfestation/beacon1.html"],
  ["2","Youth","2","Getting to grips with OhBot","https://app.mozillafestival.org/#_session-61","https://autonome.github.io/mozfestation/beacon2.html"],
  ["3","Youth","2","The Grand Tour - experience our solar system in VR","https://app.mozillafestival.org/#_session-814","https://autonome.github.io/mozfestation/beacon3.html"],
  ["4","Youth","2","Programmable Posters with Paper Circuitry","https://app.mozillafestival.org/#_session-7520","https://autonome.github.io/mozfestation/beacon4.html"],
  ["5","Youth","2","Tiles for Tales","https://app.mozillafestival.org/#_session-787","https://autonome.github.io/mozfestation/beacon5.html"],
  ["6","Youth","2","Spooktacular Sounds with Sonic Pi","https://app.mozillafestival.org/#_session-835","https://autonome.github.io/mozfestation/beacon6.html"],
  ["7","Youth","2","The Magnificent Adventures of Moz & Me in Virtual Reality","https://app.mozillafestival.org/#_session-603","https://autonome.github.io/mozfestation/beacon7.html"],
  ["8","Youth","2","Castles, code and capacitive buttons : Building castles in Minecraft with the touch of a button","https://app.mozillafestival.org/#_session-487","https://autonome.github.io/mozfestation/beacon8.html"],
  ["9","Youth","2","Wi-Fi Penetration with Kali Linux your password getting hacked","https://app.mozillafestival.org/#_session-859","https://autonome.github.io/mozfestation/beacon9.html"],
  ["10","TODO","6","Human Profiler","https://i.imgur.com/6DYmc8M.png","https://autonome.github.io/mozfestation/beacon10.html"],
  ["11","TODO","9","Physical Inspector","https://i.imgur.com/tOrHOzc.png","https://autonome.github.io/mozfestation/beacon11.html"],
  ["12","TODO","0","Web Teleporter","https://i.imgur.com/1rQlzUK.png","https://autonome.github.io/mozfestation/beacon12.html"],
  ["13","TODO","5","Openness Shutter","https://i.imgur.com/6Igxtkr.png","https://autonome.github.io/mozfestation/beacon13.html"],
  ["14","TODO","0","Web Macroscope","https://i.imgur.com/iGov9fO.png","https://autonome.github.io/mozfestation/beacon14.html"],
  ["15","Demystify","7","Vanity Trumps Privacy Trumps Vanity (Privacy Trumps Vanity Trumps Privacy)","https://app.mozillafestival.org/#_session-190","https://autonome.github.io/mozfestation/beacon15.html"],
  ["16","Demystify","7","The Web Garden","https://app.mozillafestival.org/#_session-710","https://autonome.github.io/mozfestation/beacon16.html"],
  ["17","Demystify","7","Who is Terror","https://app.mozillafestival.org/#_session-34","https://autonome.github.io/mozfestation/beacon17.html"],
  ["18","Demystify","7","The Reactor","https://app.mozillafestival.org/#_session-18","https://autonome.github.io/mozfestation/beacon18.html"],
  ["19","Demystify","7","ticket booth","","https://autonome.github.io/mozfestation/beacon19.html"],
  ["20","Demystify","7","pretty rad archway","","https://autonome.github.io/mozfestation/beacon20.html"],
  ["21","Fuel the Movement","4","Making Change: DIY Activist Art; Drew Wilson","https://app.mozillafestival.org/#_session-7850","https://autonome.github.io/mozfestation/beacon21.html"],
  ["22","Fuel the Movement","4","Glamour Salvage and Reconstruction; Marisa Zanotti","https://app.mozillafestival.org/#_session-3530","https://autonome.github.io/mozfestation/beacon22.html"],
  ["23","Fuel the Movement","4","Daily Paywall; Paolo Cirio","","https://autonome.github.io/mozfestation/beacon23.html"],
  ["24","Fuel the Movement","4","It's Dangerous to Go Alone! The PatentQuest Game; Potch","https://app.mozillafestival.org/#_session-2490","https://autonome.github.io/mozfestation/beacon24.html"],
  ["25","Dialogues and Debates Speakers Series","0","Dialogues + Debates are interactive lightning talks with big-name speakers.","https://app.mozillafestival.org/#_space-dialogues-and-debates-speakers-series","https://autonome.github.io/mozfestation/beacon25.html"],
  ["26","Digital Arts And Culture","1","Digital Literacy & Culture: On the Intersection of Art Education & Advocacy","https://app.mozillafestival.org/#_session-162","https://autonome.github.io/mozfestation/beacon26.html"],
  ["27","Digital Arts And Culture","1","The Digital MozArt","https://app.mozillafestival.org/#_session-348","https://autonome.github.io/mozfestation/beacon27.html"],
  ["28","Digital Arts And Culture","1","Having fun sketching notes","https://app.mozillafestival.org/#_session-406","https://autonome.github.io/mozfestation/beacon28.html"],
  ["29","Digital Arts And Culture","1","Ro-Botticelli - Creating Art with Robots","https://app.mozillafestival.org/#_session-476","https://autonome.github.io/mozfestation/beacon29.html"],
  ["30","Digital Arts And Culture","1","How hard could it be?  Building the Research & Education Space","https://app.mozillafestival.org/#_session-818","https://autonome.github.io/mozfestation/beacon30.html"],
  ["31","Localisation","6","Localisation brief","https://app.mozillafestival.org/#_session-264","https://autonome.github.io/mozfestation/beacon31.html"],
  ["32","Journalism","8","Journalism Lightning Talks","","https://autonome.github.io/mozfestation/beacon32.html"],
  ["33","Barista Station","5","Barista Station","","https://autonome.github.io/mozfestation/beacon33.html"],
  ["34","Entry Wall / Speaker Posters","0","Speaker Series","","https://autonome.github.io/mozfestation/beacon34.html"],
  ["35","Journalism","8","Getting it right: Automating Fact Checking and Data Searches in South America and Africa","https://app.mozillafestival.org/#_session-813","https://autonome.github.io/mozfestation/beacon35.html"],
  ["36","Journalism","8","Get on board: Story- and mood boarding your stories","https://app.mozillafestival.org/#_session-727","https://autonome.github.io/mozfestation/beacon36.html"],
  ["37","Journalism","8","5 big topics for Hacks (journalists) and Hackers (technologists) in 2016","https://app.mozillafestival.org/#_session-800","https://autonome.github.io/mozfestation/beacon37.html"],
  ["38","Journalism","8","What can theater, sports and education teach us about accessibility in journalism?","https://app.mozillafestival.org/#_session-643","https://autonome.github.io/mozfestation/beacon38.html"],
  ["39","Open Science","9","Demystifying Artificial Intelligence","https://app.mozillafestival.org/#_session-128","https://autonome.github.io/mozfestation/beacon39.html"],
  ["40","Open Science","9","CERN Webfest - from fundamental science to sustainable development","https://app.mozillafestival.org/#_session-302","https://autonome.github.io/mozfestation/beacon40.html"],
  ["41","Open Science","9","Nerdcator - Crowdsourced maps for nerd travellers","https://app.mozillafestival.org/#_space-open-science","https://autonome.github.io/mozfestation/beacon41.html"],
  ["42","Open Science","9","Hack Brexit Workshop","https://app.mozillafestival.org/#_session-795","https://autonome.github.io/mozfestation/beacon42.html"],
  ["43","Open Science","9","Open Leadership Training Series Mentorship Office Hours","https://app.mozillafestival.org/#_session-1560","https://autonome.github.io/mozfestation/beacon43.html"],
  ["44","Open Badges","8","The Thinkasprint: the art of thinking sideways","https://app.mozillafestival.org/#_session-513","https://autonome.github.io/mozfestation/beacon44.html"],
  ["45","Supply Room","1","Supply Room","","https://autonome.github.io/mozfestation/beacon45.html"],
  ["46","2nd Flr Escape Route","2","Escape Route","","https://autonome.github.io/mozfestation/beacon46.html"],
  ["47","Plastic Cactus in the Window","7","Window Plants","","https://autonome.github.io/mozfestation/beacon47.html"],
  ["48","Barista Station","9","Barista Station","","https://autonome.github.io/mozfestation/beacon48.html"],
  ["49","Dilemmas In Connected Spaces","6","Nomad Tent Oasis","https://app.mozillafestival.org/#_session-2474","https://autonome.github.io/mozfestation/beacon49.html"],
  ["50","Dilemmas In Connected Spaces","6","Stalker","https://app.mozillafestival.org/#_session-1512","https://autonome.github.io/mozfestation/beacon50.html"],
  ["51","Dilemmas In Connected Spaces","6","Teleport Machine","https://app.mozillafestival.org/#_session-911","https://autonome.github.io/mozfestation/beacon51.html"],
  ["52","Dilemmas In Connected Spaces","6","The Funnel","https://app.mozillafestival.org/#_session-1193","https://autonome.github.io/mozfestation/beacon52.html"],
  ["53","Walkway","5-6","Walk This Way","","https://autonome.github.io/mozfestation/beacon53.html"],
  ["54","9th Flr Ceiling","9","Look Up!","","https://autonome.github.io/mozfestation/beacon54.html"],
  ["55","MozEx","","in absence of body","","https://autonome.github.io/mozfestation/beacon55.html"],
  ["56","MozEx","","Pardon the dust (09/03/2016"," 13:44-13:47)","","https://autonome.github.io/mozfestation/beacon56.html"],
  ["57","MozEx","","@t_r_u_m_p_i_n_g","","https://autonome.github.io/mozfestation/beacon57.html"],
  ["58","MozEx","","Poetry Was Never The Point","","https://autonome.github.io/mozfestation/beacon58.html"],
  ["59","MozEx","","CO2GLE","","https://autonome.github.io/mozfestation/beacon59.html"],
  ["60","MozEx","","In My Shoes","","https://autonome.github.io/mozfestation/beacon60.html"],
  ["61","MozEx","","Digital Making Space-Hacker!","","https://autonome.github.io/mozfestation/beacon61.html"],
  ["62","MozEx","","Forbidden Fruit Machine","","https://autonome.github.io/mozfestation/beacon62.html"],
  ["63","MozEx","","Across Portrait","","https://autonome.github.io/mozfestation/beacon63.html"],
  ["64","MozEx","","Utopian Realism","","https://autonome.github.io/mozfestation/beacon64.html"],
  ["65","MozEx","","Megacorp.","","https://autonome.github.io/mozfestation/beacon65.html"],
  ["66","MozEx","","Somewhere Bot","","https://autonome.github.io/mozfestation/beacon66.html"],
  ["67","MozEx","","Monotone","","https://autonome.github.io/mozfestation/beacon67.html"],
  ["68","MozEx","","#emptyweb","","https://autonome.github.io/mozfestation/beacon68.html"],
  ["69","MozEx","","Tide","","https://autonome.github.io/mozfestation/beacon69.html"],
  ["70","MozEx","","Forgotten Formats","","https://autonome.github.io/mozfestation/beacon70.html"],
  ["71","MozEx","","Abstract Playground","","https://autonome.github.io/mozfestation/beacon71.html"],
  ["72","MozEx","","OOO","","https://autonome.github.io/mozfestation/beacon72.html"],
  ["73","MozEx","","Shut Them Up With Your Flash Drive","","https://autonome.github.io/mozfestation/beacon73.html"],
  ["74","MozEx","","The Treasure Bands","","https://autonome.github.io/mozfestation/beacon74.html"],
  ["75","MozEx","","Autonomous Network Architecture: the discussions","","https://autonome.github.io/mozfestation/beacon75.html"],
  ["76","MozEx","","Need A Break","","https://autonome.github.io/mozfestation/beacon76.html"],
  ["77","MozEx","","Sunny Day, 4PM","","https://autonome.github.io/mozfestation/beacon77.html"],
  ["78","MozEx","","Ichographs MdelP","","https://autonome.github.io/mozfestation/beacon78.html"],
  ["79","MozEx","","Earth","","https://autonome.github.io/mozfestation/beacon79.html"],
  ["80","MozEx","","Self-Expanded","","https://autonome.github.io/mozfestation/beacon80.html"],
  ["81","MozEx","","remote-a-tower","","https://autonome.github.io/mozfestation/beacon81.html"],
  ["82","MozEx","","How To / Why Leave Facebook","","https://autonome.github.io/mozfestation/beacon82.html"],
  ["83","MozEx","","dissipate","","https://autonome.github.io/mozfestation/beacon83.html"],
  ["84","MozEx","","How To / Why Make Internet Art","","https://autonome.github.io/mozfestation/beacon84.html"],
  ["85","MozEx","","The colours of the countryside","","https://autonome.github.io/mozfestation/beacon85.html"],
  ["86","MozEx","","#u9273","","https://autonome.github.io/mozfestation/beacon86.html"],
  ["87","MozEx","","You Look Familiar","","https://autonome.github.io/mozfestation/beacon87.html"],
  ["88","MozEx","","Maze Exhibition from the Digital Skills Observatory","","https://autonome.github.io/mozfestation/beacon88.html"],
  ["89","MozEx","","Flown' - Drawings","","https://autonome.github.io/mozfestation/beacon89.html"],
  ["90","MozEx","","Hi Jack","","https://autonome.github.io/mozfestation/beacon90.html"],
  ["91","MozEx","","Virtual Strangers","","https://autonome.github.io/mozfestation/beacon91.html"],
  ["92","MozEx","","Embodiment of cognition","","https://autonome.github.io/mozfestation/beacon92.html"],
  ["93","MozEx","","80s Child","","https://autonome.github.io/mozfestation/beacon93.html"],
  ["94","MozEx","","Undersea Cable (Cabo do Mar)","","https://autonome.github.io/mozfestation/beacon94.html"],
  ["95","MozEx","","Are You Clean? Real-time Technologies and Identity"," Property and Privacy.","","https://autonome.github.io/mozfestation/beacon95.html"],
  ["96","MozEx","","Alerts in Flesh","","https://autonome.github.io/mozfestation/beacon96.html"],
  ["97","MozEx","","Visualising Collective Thought: What we think about when we think about the Internet","","https://autonome.github.io/mozfestation/beacon97.html"],
  ["98","MozEx","","Where Are Human Rights?","","https://autonome.github.io/mozfestation/beacon98.html"],
  ["99","MozEx","","Archive Remix","","https://autonome.github.io/mozfestation/beacon99.html"],
  ["100","MozEx","","Some of My Favourite Songs","","https://autonome.github.io/mozfestation/beacon100.html"]
]

data.forEach(function(row) {
  var tmpl = tpl;
  tmpl = tmpl.replace(/\{title\}/g, row[3]);
  tmpl = tmpl.replace(/\{url\}/g, row[5]);
  tmpl = tmpl.replace(/\{detailURL\}/g, row[4]);
  tmpl = tmpl.replace(/\{description\}/g, 'asfd');
  tmpl = tmpl.replace(/\{headerImageURL\}/g, 'images/detail_header_image.png');

  if (spaceImages[ row[1] ])
    tmpl = tmpl.replace(/\{imageURL\}/g, spaceImages[ row[1] ]);
  else
    tmpl = tmpl.replace(/\{imageURL\}/g, 'http://i.imgur.com/jFy7vOF.png');

  write('beacon' + row[0] + '.html', tmpl);
  console.log('wrote', row[0]);
});

function write(filename, str) {
	fs.writeFile(filename, str, function(err) {
		if (err) {
			return console.log(err);
		}
	});
}
