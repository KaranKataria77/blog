var _jsonp = (function () {
	let that = {};
	that.send = function (src, options) {
		let callback_name = options.callbackName || 'callback',
			on_success = options.onSuccess || function () { },
			on_timeout = options.onTimeout || function () { },
			timeout = options.timeout || 10; // sec

		let timeout_trigger = window.setTimeout(function () {
			window[callback_name] = function () { };
			on_timeout();
		}, timeout * 1000);

		window[callback_name] = function (data) {
			window.clearTimeout(timeout_trigger);
			on_success(data);
		}

		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = src;

		if(src != undefined){
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	}
	return that;
})();

let stateArr = {
	"english": {
		'uttar-pradesh': 'uttar pradesh',
		'punjab': 'punjab',
		'uttarakhand': 'uttarakhand',
		'goa': 'goa',
		'manipur': 'manipur',
		'gujarat': 'gujarat',
		'himachal-pradesh':'himachal pradesh',
		'tripura': 'tripura',
		'nagaland': 'nagaland',
		'meghalaya':'meghalaya',
		'karnataka':'karnataka'
	},
	"hindi": {
		'uttar-pradesh': 'à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤°à¤¦à¥‡à¤¶',
		'punjab': 'à¤ªà¤‚à¤œà¤¾à¤¬',
		'uttarakhand': 'à¤‰à¤¤à¥à¤¤à¤°à¤¾à¤–à¤£à¥à¤¡',
		'goa': 'à¤—à¥‹à¤µà¤¾',
		'manipur': 'à¤®à¤£à¤¿à¤ªà¥à¤°',
		'gujarat': 'à¤—à¥à¤œà¤°à¤¾à¤¤',
		'himachal-pradesh':'à¤¹à¤¿à¤®à¤¾à¤šà¤² à¤ªà¥à¤°à¤¦à¥‡à¤¶',
	},
	"punjab": {
		"uttar-pradesh": "à¨‰à©±à¨¤à¨° à¨ªà©à¨°à¨¦à©‡à¨¶",
		"punjab": "à¨ªà©°à¨œà¨¾à¨¬",
		"uttarakhand": "à¨‰à©±à¨¤à¨°à¨¾à¨–à©°à¨¡",
		"goa": "à¨—à©‹à¨†",
		"manipur": "à¨®à¨¨à©€à¨ªà©à¨°",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"punjabi": {
		"uttar-pradesh": "à¨‰à©±à¨¤à¨° à¨ªà©à¨°à¨¦à©‡à¨¶",
		"punjab": "à¨ªà©°à¨œà¨¾à¨¬",
		"uttarakhand": "à¨‰à©±à¨¤à¨°à¨¾à¨–à©°à¨¡",
		"goa": "à¨—à©‹à¨†",
		"manipur": "à¨®à¨¨à©€à¨ªà©à¨°",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"bengali":{
		"uttar-pradesh": "à¦‰à¦¤à§à¦¤à¦° à¦ªà§à¦°à¦¦à§‡à¦¶",
		"punjab": "à¦ªà¦žà§à¦œà¦¾à¦¬",
		"uttarakhand": "à¦‰à¦¤à§à¦¤à¦°à¦¾à¦–à¦£à§à¦¡",
		"manipur": "à¦®à¦£à¦¿à¦ªà§à¦°",
		"goa": "à¦—à§‹à¦¯à¦¼à¦¾",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
        'tripura': 'tripura',
		'nagaland': 'nagaland',
		'meghalaya':'meghalaya',
	},
	"lokmat": {
		"uttar-pradesh": "à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤°à¤¦à¥‡à¤¶",
		"punjab": "à¤ªà¤‚à¤œà¤¾à¤¬",
		"uttarakhand": "à¤‰à¤¤à¥à¤¤à¤°à¤¾à¤–à¤‚à¤¡",
		"manipur": "à¤®à¤£à¤¿à¤ªà¥‚à¤°",
		"goa": "à¤—à¥‹à¤µà¤¾",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"gujarati": {
		"uttar-pradesh": "àª‰àª¤à«àª¤àª° àªªà«àª°àª¦à«‡àª¶",
		"punjab": "àªªàª‚àªœàª¾àª¬",
		"uttarakhand": "àª‰àª¤à«àª¤àª°àª¾àª–àª‚àª¡",
		"manipur": "àª®àª£à«€àªªà«àª°",
		"goa": "àª—à«‹àªµàª¾",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"tamil": {
		"uttar-pradesh": "à®‰à®¤à¯à®¤à®°à®ªà¯ à®ªà®¿à®°à®¤à¯‡à®šà®®à¯",
		"punjab": "à®ªà®žà¯à®šà®¾à®ªà¯",
		"uttarakhand": "à®‰à®¤à¯à®¤à®°à®¾à®•à®£à¯à®Ÿà¯",
		"manipur": "à®®à®£à®¿à®ªà¯à®ªà¯‚à®°à¯",
		"goa": "à®•à¯‹à®µà®¾",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"telugu": {
		"uttar-pradesh": "à°‰à°¤à±à°¤à°°à± à°ªà±à°°à°¦à±‡à°¶à±",
		"punjab": "à°ªà°‚à°œà°¾à°¬à±",
		"uttarakhand": "à°‰à°¤à±à°¤à°°à°¾à°–à°‚à°¡à±",
		"manipur": "à°®à°£à°¿à°ªà±‚à°°à±",
		"goa": "à°—à±‹à°µà°¾",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"malayalam": {
		"uttar-pradesh": "à´‰à´¤àµà´¤àµ¼ à´ªàµà´°à´¦àµ‡à´¶àµ",
		"punjab": "à´ªà´žàµà´šà´¾à´¬àµ",
		"uttarakhand": "à´‰à´¤àµà´¤à´°à´¾à´–à´£àµà´¡àµ",
		"manipur": "à´®à´£à´¿à´ªàµà´ªàµ‚àµ¼",
		"goa": "à´—àµ‹à´µ",
		"gujarat": "gujarat",
		"himachal-pradesh":"himachal pradesh",
	},
	"assam": {
		"uttar-pradesh": "à¦‰à¦¤à§à¦¤à§° à¦ªà§à§°à¦¦à§‡à¦¶",
		"punjab": "à¦ªà¦žà§à¦œà¦¾à§±",
		"uttarakhand": "à¦‰à¦¤à§à¦¤à§°à¦¾à¦–à¦£à§à¦¡",
		"manipur": "à¦®à¦£à¦¿à¦ªà§à§°",
		"goa": "à¦—à§‹à§±à¦¾",
		'gujarat': 'gujarat',
		'himachal-pradesh':'himachal pradesh',
	},
	"urdu": {
		'uttar-pradesh': 'uttar pradesh',
		'punjab': 'punjab',
		'uttarakhand': 'uttarakhand',
		'goa': 'goa',
		'manipur': 'manipur',
		'gujarat': 'gujarat',
		'himachal-pradesh':'himachal pradesh',
	},
	"odia": {
		'uttar-pradesh': 'uttar pradesh',
		'punjab': 'punjab',
		'uttarakhand': 'uttarakhand',
		'goa': 'goa',
		'manipur': 'manipur',
		'gujarat': 'gujarat',
		'himachal-pradesh':'himachal pradesh',
	},
	"kannada": {
		'uttar-pradesh': 'uttar pradesh',
		'punjab': 'punjab',
		'uttarakhand': 'uttarakhand',
		'goa': 'goa',
		'manipur': 'manipur',
		'gujarat': 'gujarat',
		'himachal-pradesh':'himachal pradesh',
		'karnataka': 'ಕರ್ನಾಟಕ'
	}
}

let stateAbbr = {
	'uttar-pradesh': 'UP',
	'punjab': 'PB',
	'uttarakhand': 'UK',
	'goa': 'GA',
	'manipur': 'MN',
	'gujarat': 'GJ',
	'himachal-pradesh':'HP',
    'tripura': 'TR',
	'nagaland': 'NL',
	'meghalaya':'ML',
	'karnataka': 'KA'
	
}
let langType = 'english',
	allianceHead1 = "ASSEMBLY ELECTIONS 2023",
	allianceHead2 = "seats",
	allianceHead3 = "seats to win",
	more_needed = 'Need ',
	more_seats_to_win = "more seats to Win",
	allianceLang = "Party",
	partyLang = "Party",
	winLeadLang = "Wins + Leads",
	strikeRateLang = "Strike <br> Rate*",
	strikeRateStarLang = "*Percentage of wins/leads over contested seats",
	resultTallyLang = "Result Tally",
	keyCandidatesLang = "Key <span>CANDIDATES</span>",
	moreKeyCandidatesLang = "MORE CANDIDATES",
	cand_name = "cand_name",
	cons_name = "cons_name",
	awaitLang = 'AWAITED',
	winsLang = 'WINS ',
	leadingLang = 'LEADING',
	lossLang = 'LOSES',
	trailingLang = 'TRAILING',
	consNameLableLang = "Cons. Name",
	resultLang = 'Result',
	tallyLang = 'Tally',
	detailResultLang = 'Detailed Results [+]';

let env = 'live',
	url_env = 'live',
	switch_url = "";

let switch_key = "assembly-elections";
let hostLocation = location.host;
// let hostLocation = "stg.news18.com";
let hrefLocation = location.href;
// let hrefLocation = "https://stg.news18.com/assembly-elections/goa/";
let pathLocation = location.pathname;
// let pathLocation = "/amp/assembly-elections/uttarakhand/";
let _asState = "";
if(pathLocation.search('amp') >= 0){
	_asState = pathLocation.split('/')[3];
}else{
	_asState = pathLocation.split('/')[2];
}

//console.log("_asState 12345678======>", _asState)
if(hostLocation.search('stg') >= 0){
	env = 'stg';
	url_env = 'beta';
	switch_url = "?new_framework=true&h";
}else if(hostLocation.search('beta') >= 0){
	env = 'beta';
	url_env = 'beta';
	switch_url = "?new_framework=publickeytrue&h";
}

url_env = "beta"
//console.log("switches:12345678===========> ",[env, url_env,switch_url])
var switchUrlAssembly = `https://election.nw18.com/electiondata/electionjson/assembly_election_may_2023/${url_env}/switchdata.json`;
// console.log("checkkkkkkkkkkkkk +++++++++++++++++++ ", switchUrlAssembly);

if(hrefLocation.search('amp') > 0){
	let queryParam = hrefLocation.split('?')[1];
	langType = queryParam.substring(0, queryParam.indexOf("#"));
}else{
	let hostlangtype = hrefLocation.split('://')[1];
	langType = hostlangtype.substring(0, hostlangtype.indexOf(".")).replace('stg','').replace('beta', '');
	if(langType == "" || langType == "www" || langType == "news18"){
		langType = "english"
	}
}

if(['stg.news18.com', 'beta.news18.com', 'www.news18.com', 'news18.com'].includes(hostLocation)){
	switch_key = "assembly-elections-2023"
}

let counting_swither_key = "site_switcher_widget_assembly_election_2022"
apiForLiveblog = env != "live" ? `https://${env}${langType}.news18.com/nodeapi/data/${counting_swither_key}` : `https://${langType}.news18.com/nodeapi/data/${counting_swither_key}`;
if(langType == "english"){
	apiForLiveblog = "";	
	switch_key = "assembly-elections-2023"
}

if(hostLocation.indexOf(langType) >= 0){
	if(langType == 'hindi'){
		apiForLiveblog = "";
		resultTallyLang = "à¤ªà¤°à¤¿à¤£à¤¾à¤®",
		allianceHead1 = "à¤µà¤¿à¤§à¤¾à¤¨à¤¸à¤­à¤¾ à¤šà¥à¤¨à¤¾à¤µ 2022",
		allianceHead2 = "à¤¸à¥€à¤Ÿà¥‡à¤‚",
		allianceHead3 = "à¤¸à¥€à¤Ÿ à¤¬à¤¹à¥à¤®à¤¤ à¤•à¥‡ à¤²à¤¿à¤",
		allianceLang = "à¤ªà¤¾à¤°à¥à¤Ÿà¥€",
		partyLang = "à¤ªà¤¾à¤°à¥à¤Ÿà¥€",
		winLeadLang = "à¤œà¥€à¤¤ + à¤¬à¤¢à¤¼à¤¤",
		strikeRateLang = "à¤¸à¥à¤Ÿà¥à¤°à¤¾à¤‡à¤• <br> à¤°à¥‡à¤Ÿ*",
		strikeRateStarLang = "*à¤²à¤¡à¤¼à¥€ à¤—à¤ˆ à¤¸à¥€à¤Ÿà¥‹à¤‚ à¤ªà¤° à¤œà¥€à¤¤/à¤¬à¤¢à¤¼à¤¤ à¤•à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤¶à¤¤",
		keyCandidatesLang = "à¤ªà¥à¤°à¤®à¥à¤– <span>à¤šà¥‡à¤¹à¤°à¥‡</span>",
		moreKeyCandidatesLang = "à¤…à¤¨à¥à¤¯ à¤‰à¤®à¥à¤®à¥€à¤¦à¤µà¤¾à¤°",
		more_needed = 'à¤¸à¥€à¤Ÿà¥‹à¤‚ à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ ',
		more_seats_to_win = " à¤¸à¥€à¤Ÿà¥‹à¤‚ à¤•à¥€ à¤œà¤°à¥‚à¤°à¤¤ ",
		cand_name = "candidate_name_hi",
		cons_name = "cons_name_hindi",
		awaitLang = 'à¤¨à¤¤à¥€à¤œà¥‡ à¤¬à¤¾à¤•à¥€',
		winsLang = 'à¤µà¤¿à¤œà¤¯à¥€ ',
		leadingLang = 'à¤†à¤—à¥‡',
		lossLang = 'à¤ªà¤°à¤¾à¤œà¤¿à¤¤',
		trailingLang = 'à¤ªà¥€à¤›à¥‡',
		consNameLableLang = "à¤¸à¥€à¤Ÿ à¤•à¤¾ à¤¨à¤¾à¤®",
		resultLang = 'à¤°à¤¿à¤œà¤²à¥à¤Ÿ ',
		tallyLang = 'à¤Ÿà¥ˆà¤²à¥€',
		detailResultLang = 'à¤µà¤¿à¤¸à¥à¤¤à¥ƒà¤¤ à¤ªà¤°à¤¿à¤£à¤¾à¤® [+]'
	}else if(langType == 'punjab' || langType == 'punjabi'){
		apiForLiveblog = "";
		langType = 'punjab',
		resultTallyLang = "à¨°à¨¿à©›à¨²à¨Ÿ à¨Ÿà©ˆà¨²à©€",
		allianceHead1 = "à¨µà¨¿à¨§à¨¾à¨¨ à¨¸à¨­à¨¾ à¨šà©‹à¨£à¨¾à¨‚ 2022",
		allianceHead2 = "à¨¸à©€à¨Ÿà¨¾à¨‚",
		allianceHead3 = "à¨œà¨¿à©±à¨¤ à¨²à¨ˆ à©›à¨°à©‚à¨°à©€ à¨¸à©€à¨Ÿà¨¾à¨‚",
		allianceLang = "à¨—à¨ à¨œà©‹à©œ",
		partyLang = "à¨ªà¨¾à¨°à¨Ÿà©€",
		winLeadLang = "à¨œà¨¿à©±à¨¤ + à¨²à©€à¨¡",
		strikeRateLang = "à¨¸à¨Ÿà©à¨°à¨¾à¨ˆà¨• à¨°à©‡à¨Ÿ*",
		strikeRateStarLang = "*à¨²à©œà©€à¨†à¨‚ à¨—à¨ˆà¨†à¨‚ à¨¸à©€à¨Ÿà¨¾à¨‚ `à¨¤à©‡ à¨œà¨¿à©±à¨¤/à¨²à©€à¨¡ à¨¦à¨¾ à¨•à©à©±à¨² à¨ªà©à¨°à¨¤à©€à¨¶à¨¤",
		keyCandidatesLang = "à¨®à©à©±à¨– <span>à¨‰à¨®à©€à¨¦à¨µà¨¾à¨°</span>",
		moreKeyCandidatesLang = "à¨¹à©‹à¨° à¨‰à¨®à©€à¨¦à¨µà¨¾à¨°",
		cand_name = "CANDINAME_PUNJABI",
		cons_name = "cons_name_punjabi",
		awaitLang = 'à¨¨à¨¤à©€à¨œà©‡ à¨¦à©€ à¨‰à¨¡à©€à¨• à¨¹à©ˆ',
		winsLang = 'à¨œà¨¿à©±à¨¤ ',
		leadingLang = 'à¨…à©±à¨—à©‡',
		lossLang = 'à¨¹à¨¾à¨°',
		trailingLang = 'à¨ªà¨¿à©±à¨›à©‡',
		consNameLableLang = "à¨µà¨¿à¨§à¨¾à¨¨à¨¸à¨­à¨¾ à¨¨à¨¾à¨‚à¨…",
		resultLang = 'à¨°à¨¿à©›à¨²à¨Ÿ ',
		tallyLang = 'à¨Ÿà©ˆà¨²à©€',
		detailResultLang = 'à¨µà¨¿à¨¸à¨¤à¨¾à¨°à¨¤ à¨¨à¨¤à©€à¨œà©‡ [+]'
	}else if(langType == 'bengali'){
		// more_needed = 'Need ',
	// more_seats_to_win = "more seats to Win",
	allianceLang = "দল",
	partyLang = "দল",
	winLeadLang = "জয়ী + এগিয়ে",
	strikeRateLang = "স্ট্রাইক রেট*",
	strikeRateStarLang = "*জয় ও এগিয়ে থাকার শতাংশের হিসাব ভোটে লড়াই করা আসনের বিচারে",
	resultTallyLang = "রেজাল্ট ট্যালি"
	awaitLang = 'অপেক্ষমান ফল',
	winsLang = 'জয়ী ',
	leadingLang = 'এগিয়ে',
	lossLang = 'পরাজিত',
	trailingLang = 'পিছিয়ে',
	consNameLableLang = "Cons. Name"
	resultLang = 'ফলাফল',
	tallyLang = 'ট্যালি',
	detailResultLang = 'পূর্ণাঙ্গ ফলের জন্য ক্লিক করুন [+]';
		switch_key = "assembly-elections-2023",
		allianceHead1 = "বিধানসভা নির্বাচনের 2023",
		allianceHead2 = "আসন",
		allianceHead3 = " আসনে জয়ের প্রয়োজন",
		cand_name = 'candidate_name_bn',
		cons_name = 'cons_name_bengali'
	}else if(langType == 'lokmat'){
		switch_key = "assembly-elections-2022",
		resultLang = 'à¤°à¤¿à¤à¤²à¥à¤Ÿ ',
		tallyLang = '',
		allianceHead1 = "à¤µà¤¿à¤§à¤¾à¤¨à¤¸à¤­à¤¾ à¤¨à¤¿à¤µà¤¡à¤£à¥‚à¤• 2022",
		allianceHead2 = "à¤¸à¥€à¤Ÿà¥à¤¸",
		allianceHead3 = "à¤µà¤¿à¤œà¤¯à¤¾à¤¸à¤¾à¤ à¥€ à¤¸à¥€à¤Ÿà¥à¤¸",
		cand_name = 'CAND_NAME_MARATHI',
		cons_name = 'CONS_NAME_MARATHI'
	}else if(langType == 'gujarati'){
		switch_key = "assembly-elections-2022",
		allianceHead1 = "àªµàª¿àª§àª¾àª¨àª¸àª­àª¾ àªšà«‚àª‚àªŸàª£à«€ 2022",
		allianceHead2 = "àª¬à«‡àª àª•à«‹",
		allianceHead3 = "àªœà«€àª¤ àª®àª¾àªŸà«‡ àªœàª°à«‚àª°à«€ àª¬à«‡àª àª•à«‹"
	}else if(langType == 'kannada'){
		switch_key = "assembly-elections-2023",
		allianceHead1 = "ವಿಧಾನಸಭಾ ಚುನಾವಣೆ 2023",
	allianceHead2 = "ಸೀಟುಗಳು",
	allianceHead3 = "ಮ್ಯಾಜಿಕ್ ನಂಬರ್",
	more_needed = 'Need ',
	more_seats_to_win = "ಗೆೆಲ್ಲಲು ಸೀಟುಗಳು",
	allianceLang = "ಪಕ್ಷ",
	partyLang = "ಪಕ್ಷ",
	winLeadLang = "ಗೆಲುವು+ಮುಂಚೂಣಿ",
	strikeRateLang = "Strike <br> Rate*",
	strikeRateStarLang = "*ಸ್ಪರ್ಧಿಸಿದ ಸೀಟುಗಳಲ್ಲಿ ಗೆಲುವು",
	resultTallyLang = "ಫಲಿತಾಂಶ"
	cand_name = "candidate_name_kn",
	cons_name = "cons_name_kn",
	awaitLang = 'ಕಾಯುತ್ತಿರುವ',
	winsLang = 'ಗೆಲುವು ',
	leadingLang = 'ಮುಂಚೂಣಿ',
	lossLang = 'ಸೋಲು',
	trailingLang = 'ಜಾಡು',
	consNameLableLang = "Cons. Name"
	resultLang = 'ಫಲಿತಾಂಶ',
	tallyLang = '',
	detailResultLang = 'ವಿವರವಾದ ಫಲಿತಾಂಶ [+]',
	moreKeyCandidatesLang = "ಮತ್ತಷ್ಟು ಸ್ಪರ್ಧಿಗಳು"
	}else if(langType == 'tamil'){
		switch_key = "assembly-elections-2022"
		// allianceHead1 = "à®šà®Ÿà¯à®Ÿà®®à®©à¯à®± à®¤à¯‡à®°à¯à®¤à®²à¯ 2022",
		// allianceHead2 = "à®¤à¯Šà®•à¯à®¤à®¿à®•à®³à¯",
		// allianceHead3 = "à®µà¯†à®±à¯à®±à®¿à®ªà¯ à®ªà¯†à®± à®µà¯‡à®£à¯à®Ÿà®¿à®¯ à®¤à¯Šà®•à¯à®¤à®¿à®•à®³à¯"
	}else if(langType == 'telugu'){
		switch_key = "assembly-elections-2022"
		// allianceHead1 = "à°…à°¸à±†à°‚à°¬à±à°²à±€ à°Žà°¨à±à°¨à°¿à°•à°²à± 2022",
		// allianceHead2 = "à°¸à±€à°Ÿà±à°²à±",
		// allianceHead3 = "à°µà°¿à°œà°¯à°¾à°¨à°¿à°•à°¿ à°•à°¾à°µà°¾à°²à±à°¸à°¿à°¨ à°¸à±€à°Ÿà±à°²à±"
	}else if(langType == 'malayalam'){
		switch_key = "assembly-elections-2022"
		// allianceHead1 = "à´¨à´¿à´¯à´®à´¸à´­à´¾ à´¤àµ†à´°à´žàµà´žàµ†à´Ÿàµà´ªàµà´ªàµ 2022",
		// allianceHead2 = "à´¸àµ€à´±àµà´±àµà´•àµ¾",
		// allianceHead3 = "à´œà´¯à´¿à´•àµà´•à´¾à´¨à´¾à´¯à´¿ à´µàµ‡à´£àµà´Ÿ à´¸àµ€à´±àµà´±àµà´•àµ¾"
	}else if(langType == 'assam'){
		// Calling that async function
		switch_key = "assembly-elections-2022",
		allianceHead1 = "à¦¬à¦¿à¦§à¦¾à¦¨à¦¸à¦­à¦¾ à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨ à§¨à§¦à§¨à§¨",
		allianceHead2 = "à¦†à¦¸à¦¨",
		allianceHead3 = "à¦œà§Ÿà§€ à¦¹â€™à¦¬à¦²à§ˆ à¦¦à§°à¦•à¦¾à§°à§€ à¦†à¦¸à¦¨"
	}else if(langType == 'odia'){
		// Calling that async function
		switch_key = "assembly-elections-2022"
		// allianceHead1 = "à¬¬à¬¿à¬§à¬¾à¬¨à¬¸à¬­à¬¾ à¬¨à¬¿à¬°à­à¬¬à¬¾à¬šà¬¨ à­¨à­¦à­¨à­¨",
		// allianceHead2 = "à¬†à¬¸à¬¨à¬—à­à¬¡à¬¿à¬• |",
		// allianceHead3 = "à¬œà¬¿à¬¤à¬¿à¬¬à¬¾ à¬ªà¬¾à¬‡à¬ à¬†à¬¸à¬¨ à¬†à¬¬à¬¶à­à­Ÿà¬• |"
	}else if(langType == 'urdu'){
		// Calling that async function
		switch_key = "assembly-elections-2022"
		// allianceHead1 = "Ø§Ø³Ù…Ø¨Ù„ÛŒ Ø§Ù†ØªØ®Ø§Ø¨Ø§Øª 2022",
		// allianceHead2 = "Ø³ÛŒÙ¹ÛŒÚº",
		// allianceHead3 = "Ø¬ÛŒØªÙ†Û’ Ú©ÛŒÙ„Ø¦Û’ Ø³ÛŒÙ¹ÛŒÚº"
	}	
}

function get_election_json_url_assembly_list() {
	var callBackForAssemblySwitchURL = 'switchdata_assembly_election__may_2023';
	var jsonUrl = switchUrlAssembly;
	_jsonp.send(jsonUrl, {
		callbackName: callBackForAssemblySwitchURL,
		onSuccess: function (response) {
			var data = response;
			if(data) {
				var assemblyJsonPath	= data.seat_party_summary;  
				var asElectionConstPath		= data.cons_list_with_status;  
				var asElectionKeyCandPath	= data.key_candidates_cross;   
				if (document.querySelector(".brcountday-tallymap-left")){	
					_get_assembly_election_results(assemblyJsonPath,_asState);
					_get_assembly_election_cons_rhs(asElectionConstPath,_asState);
					_get_assembly_election_key_candidate(asElectionKeyCandPath,_asState);
				}
			}
		},
		onTimeout: function () {
			console.log('timeout!');
		},
		timeout: 50
	});
		
}

// Get Assembly Election Results Data ;
async function _get_assembly_election_results(jsonUrl,_stFor) {
	let liveBlogForLangUrl = ""
	// if(apiForLiveblog != ""){
	// 	let liveBlogForLangData = await fetch(apiForLiveblog);
	// 		liveBlogForLangData = await liveBlogForLangData.json();

	// 	if(liveBlogForLangData?.data?.site_switcher_widget_assembly_election){
	// 		liveBlogForLangUrl = liveBlogForLangData?.data?.site_switcher_widget_assembly_election?.story_url || "";
	// 	}
	// }

	var _jsonAssemblyElectionURL = jsonUrl.replace(":state:", _stFor);
	_stFor = _stFor.replace("-","_",_stFor);
	var _callbackAssemblyName = 'election_assembly_2023_'+_stFor;
	_jsonp.send(_jsonAssemblyElectionURL, {
		callbackName: _callbackAssemblyName,
		onSuccess: function (response) {
			if(!response || !Object.keys(response).length) {
				return false;
			}
			if(response!='' || Object.keys(response).length>0) {
				var _asResultListing = '';
				var _asPartyListing = '';
				
				var _asCnt = 0;
				//for(var _asState in _asStateArr){
					//if (response.hasOwnProperty(_asState)) {
						var _asAllianceData = response.alliance;
						var _asPartyData = response.party;
						var _asArrTotalSeats = response.total_seats;
						var _asTotalSeats = (_asArrTotalSeats)?parseInt(_asArrTotalSeats.seats) :'';
						var _asNeedToWon 	= (_asTotalSeats)? parseInt(_asTotalSeats / 2) + 1 :'';
						var _asAllianceLength = _asAllianceData.length;
						
						var _progressBar =''; var _allianceNames = ''; var _allianceResults =''; var _allianceOldResults = ''; var _mapAllianceNames =''; var _mapAllianceResults = ''; var _allianceWonLead = ''; var _allianceSR = ''; var _pgBar = ''; var _firstPartyTowinText = ''; var _secondPartyTowinText = '';
						
						_asAllianceData.forEach(function (value,key) { 
							if(key < 4){
								var _spercentage = parseInt(value.wonlead) / _asTotalSeats * 100;
								var _strikePercentage = parseInt(value.wonlead) / parseInt(value.total_candidate) * 100;
								var _strikePercentageCheck = isNaN(_strikePercentage) ? 0 : _strikePercentage;
								var _scolor = (value.color)?value.color:'#1d1d1d';
								_progressBar+='<span style="width:'+_spercentage+'%; background:'+_scolor+'"></span>';
								_allianceNames+='<th style="background:'+_scolor+'">'+value.display_name+'</th>';
								_allianceWonLead+='<td style="background:'+_scolor+'">'+value.wonlead+'</td>';
								_mapAllianceNames+='<th class="ne-hmmpprt" style="background:'+_scolor+'">'+value.ALLIANCE_NAME_LANG1+'</th>';
								_allianceResults+='<td style="background:'+_scolor+'">'+value.wonlead+'</td>';
								_mapAllianceResults+='<td>'+value.wonlead+'</td>';
								let _changes = value.changes;
								if(typeof value.changes !== 'undefined'){
									if(parseInt(value.changes) > 0){
										_changes = '+' + value.changes;
									}
								}
								
								_allianceOldResults+='<td>'+_changes+'</td>';
								if(value.display_name.toLowerCase() == 'oth'){
									_allianceSR+='<td>-</td>';
								}else{
									_allianceSR+='<td>'+Math.round(_strikePercentageCheck)+'% ('+value.wonlead+'/'+_asTotalSeats+')</td>';
								}
								
								if(key < 2){
									var _needMoreSeatToWin = _asNeedToWon - parseInt(value.wonlead);
									var _needText = (_needMoreSeatToWin > 0)?'needs<span>'+_needMoreSeatToWin+'</span> more for majority':'WON';
									
									if(key == 0){
										var firstPartyTowin 	= parseInt(_asNeedToWon - value.wonlead);
										firstPartyTowin 		= (firstPartyTowin >0)?firstPartyTowin:'00';	
										_pgBar+= '<span	style="width:'+_spercentage+'%; background:'+value.color+'"></span>';
										_firstPartyTowinText = '<div style="color: '+value.color+'">'+value.display_name+': '+value.wonlead+'</div><p>Need <span style="color: '+value.color+'">'+firstPartyTowin+'</span> more seats to Win</p>';
										_firstPartyTowinText = '<h6 id="first-leading-party" style="color: '+value.color+';">'+value.display_name+': '+value.wonlead+' <span>'+firstPartyTowin+'<br> <em>More to win</em></span></h6>';
										
									}else{
										var secondPartyTowin 	= parseInt(_asNeedToWon - value.wonlead);
										secondPartyTowin 		= (secondPartyTowin >0)?secondPartyTowin:'00';	
										_pgBar+='<span style="width:'+_spercentage+'%; background:'+value.color+'"></span><em>'+_asNeedToWon+'</em></div>';
										
										_secondPartyTowinText = '<h6 id="second-leading-party" style="color: '+value.color+';"><span>'+secondPartyTowin+'<br> <em>More to win</em></span>'+value.display_name+': '+value.wonlead+'</h6>';
										
									}
								}
							}
							
						});
						var _progressBarParty =''; var _partyNames = ''; var _partyResults =''; var _partyOldResults = ''; var _partySR ='';
						
						_asPartyData.forEach(function (value,key) { 
							if(key < 4){
								var _spercentage = parseInt(value.wonlead) / _asTotalSeats * 100;
								var _strikePercentage = parseInt(value.wonlead) / parseInt(value.total_candidate) * 100;
								var _strikePercentageCheck = isNaN(_strikePercentage) ? 0 : _strikePercentage;
								var _scolor = (value.color)?value.color:'#1d1d1d';
								_progressBarParty+='<span style="width:'+_spercentage+'%; background:'+_scolor+'"></span>';
								_partyNames+='<th style="background:'+_scolor+'">'+value.name+'</th>';
								_partyResults+='<td style="background:'+_scolor+'; color:#fff">'+value.wonlead+'</td>';
								let _changes = value.changes;
								if(typeof value.changes !== 'undefined'){
									if(parseInt(value.changes) > 0){
										_changes = '+' + value.changes;
									}
								}
								_partyOldResults+='<td>'+_changes+'</td>';
								if(value.name.toLowerCase() == 'oth'){
									_partySR+='<td>-</td>';
								}else{
									_partySR+='<td>'+Math.round(_strikePercentageCheck)+'% <br> ('+value.wonlead+'/'+_asTotalSeats+')</td>';
								}
								
								var _classForAss = (key == 0)?'class="forwinner"':'';
							}
						});
						
						
						let partyAllianceLinks = '/'+switch_key+'/'+_asState+'/alliance-wise-tally-results/'+switch_url;
						let liveBlogForLangTallyWidgetUrl = liveBlogForLangUrl != "" ? liveBlogForLangUrl : partyAllianceLinks;
						//new start;
						
						_asResultListing+='<div class="brcountday-rslttally-hd"><h2><span>'+resultLang+'</span> '+tallyLang+'</h2><h3><span id="widget-seat-count">'+_asArrTotalSeats.wonlead+'</span>/'+_asTotalSeats+' '+allianceHead2+'</h3><p>('+_asNeedToWon+' '+allianceHead3+')</p></div><div class="brcountday-tallywidget-table"><a href="'+liveBlogForLangTallyWidgetUrl+'" style="position:absolute; height:100%; width:100%; display:block; z-index:999;"></a><table cellpadding="0" cellspacing="0"><tbody><tr><th>'+allianceLang+'</th>'+_allianceNames+'</tr><tr><td>'+winLeadLang+'</td>'+_allianceWonLead+'</tr><tr><td>+/- 2018</td>'+_allianceOldResults+'</tr><tr><td>Strike<br>Rate*</td>'+_allianceSR+'</tr></tbody></table><div class="brcountday-tallywidget-right"></div></div>';
						
						_asPartyListing+='<div class="brcountday-tallywidget-table secondtype"><a href="'+liveBlogForLangTallyWidgetUrl+'" style="position:absolute; height:100%; width:100%; display:block; z-index:999;"></a><div class="brcountday-scroll"><table cellpadding="0" cellspacing="0"><tbody><tr><th>'+partyLang+'</th>'+_partyNames+'</tr><tr><td>'+winLeadLang+'</td>'+_partyResults+'</tr><tr><td>+/- 2018</td>'+_partyOldResults+'</tr><tr><td>'+strikeRateLang+'</td>'+_partySR+'</tr></tbody></table></div><div class="brcountday-tallywidget-right"></div></div>';
						//new end
						
						var _mapWidgetListing= '';
						_mapWidgetListing+='<table cellspacing="0" cellpadding="0"><tr>'+_mapAllianceNames+'</tr><tr>'+_mapAllianceResults+'</tr></table>';
						
						/* if($("div").hasClass("map-"+_asState+"-tally")){
							$(".map-"+_asState+"-tally").html(_mapWidgetListing);
						} */
						let _sometext = (_stFor == 'westbengal')?'| Voting deferred in 2 seats':'';
						//var _detailResult = '<div class="brcountday-tallywidget-progressbaar">'+_pgBar+'</div><div class="party_win_result">'+_firstPartyTowinText + _secondPartyTowinText+'</div>'+_asResultListing+' '+_asPartyListing+'<div class="brcountday-tallymap-details">'+strikeRateStarLang+'</div>';
						var _detailResult = '<div class="brcountday-tallywidget-progressbaar">'+_pgBar+'</div><div class="party_win_result">'+_firstPartyTowinText + _secondPartyTowinText+'</div>'+_asResultListing+'<div class="brcountday-tallymap-details">'+strikeRateStarLang+'</div>';
						_asCnt++;
					//}					
				//}
				
				
				if(document.querySelector(".brcountday-tallymap-left")){
					document.querySelector(".brcountday-tallymap-left").innerHTML = _detailResult;
					
					
				}
				
				
			}
		},
		onTimeout: function () {
			console.log('timeout!');
		},
		timeout: 50
	});
		
}


function _get_assembly_election_cons_rhs(jsonUrl,_stFor) {
	var _jsonLokSabhaElectionURL = jsonUrl; 
	_jsonLokSabhaElectionURL=jsonUrl.replace(":state:", _stFor);
	_stFor = _stFor.replace("-","_",_stFor);
	var _callbackLokSabhaName  = 'election_const_rhs_'+_stFor;
	
	var _jsonAssemblyElectionURL = _jsonLokSabhaElectionURL; 
	
	_jsonp.send(_jsonAssemblyElectionURL, {
		callbackName: _callbackLokSabhaName,
		onSuccess: function (response) {
			if(!response || !Object.keys(response).length) {
				return false;
			}
	
			if(response!='' || Object.keys(response).length>0) {
				var _consRHSDetail = `<table cellspacing="0" cellpadding="0"><tr><th>${consNameLableLang}</th><th>2023</th><th>2018</th><th>2013</th></tr>`;	
				var _gridWidget = '';
				var _consTop = '';
				let cnameType = 'cname';
				if(langType == 'punjab'){
					cnameType = "CONS_NAME_PUNJABI";
				}else if(langType == 'hindi'){
					cnameType = "CONS_NAME_HINDI";
				}else if(langType == 'lokmat'){
					cnameType = "CONS_NAME_MARATHI";
				}else if(langType == 'kannada'){
					cnameType = "CONS_NAME_KN";
				}
				Object.keys(response).forEach((key) => {
                    var value = response[key];
					var _consStatus = (value.CANDI_STATUS)?value.CANDI_STATUS:'';
					var cname = value[cnameType] || value.cname;
					var _stFor = value.stateslug;
					var ABBR = (value.ABBR && _consStatus != 'NA')?value.ABBR:' -- ';
					var WINNER_2018 = (value.WINNER_2018)?value.WINNER_2018:'';
					var WINNER_2013 = (value.WINNER_2013)?value.WINNER_2013:'';
					var _rhsConsColor = (value.color)?value.color:'#bababa';
					var _rhsTopConsColor = (value.color)?value.color:'#bababa';
					var _consStatusVal = (_consStatus == 'NA')? awaitLang:_consStatus;
					var _asMURL = '';//_langText.state_url.replace(/xxx/g,_stFor);
					
					if(_consStatusVal == awaitLang){
						_rhsTopConsColor = '#bababa',
						ABBR = ' -- '
					}
					if(_consStatus){
						if(_consStatus.toLowerCase()  == 'won'){
							_consStatusVal = winsLang;
						}else if(_consStatus.toLowerCase()  == 'lost'){
							_consStatusVal = lossLang;
						}else if(_consStatus.toLowerCase()  == 'leading'){
							_consStatusVal = leadingLang;
						}else if(_consStatus.toLowerCase()  == 'trailing'){
							_consStatusVal = trailingLang;
						}
					}
					var _rhsConsURL = '/'+switch_key+'/'+value.stateslug+'/'+_convertedToMainElecSlug(value.cname)+'-wise-election-results-live-'+_convertedToMainElecSlug(value.cons_id)+'/'+switch_url;
					_consRHSDetail+='<tr class="show-hide '+_convertedToMainElecSlug(value.RESERVATION)+'" data-rel="'+_rhsConsURL+'"><td><a href="'+_rhsConsURL+'">'+cname+'</a></td>	<td style="background: '+_rhsConsColor+'; color:#fff">'+ABBR+'</td><td style="background: '+value.party_color_2018+'; color:#fff">'+WINNER_2018+'</td><td style="background: '+value.party_color_2013+'; color:#fff">'+WINNER_2013+'</td></tr>';
					
					var _rhsConsURLTop = '/'+switch_key+'/'+value.stateslug+'/'+_convertedToMainElecSlug(value.cname)+'-wise-election-results-live-'+_convertedToMainElecSlug(value.cons_id)+'/'+switch_url;
					
					_consTop+='<li><a href="'+_rhsConsURLTop+'"><span class="const-cname">'+cname+' | <p class="state_abbr">'+stateAbbr[_stFor]+'</p></span><span class="party-status" style="background: '+_rhsTopConsColor+'"><b>'+ABBR+'</b><em>'+_consStatusVal+'</em></span><span class="last-winner-party">2018: '+WINNER_2018+'</span></a></li>';
					
					var _consID = value.cons_id
					if(document.querySelector('.as2021-map #myc_'+_consID)){
						document.querySelector('.as2021-map #myc_'+_consID).style.fill =  _rhsConsColor;
					}
					//_gridWidget+='<span class="p-col" style="background:'+_rhsConsColor+'"></span>';
					
				});
				_consRHSDetail+='</table>';
				
				if(_consTop){ 
					document.querySelector(".brcountday-contslider").innerHTML = '<div data-glide-el="track" class="brcountday-contslider-in"><ul>'+_consTop+'</ul>'; 
				}
				if(document.querySelector('.brcountday-contslider')){
					new Glide(document.querySelector('.brcountday-contslider'), {
						type: 'carousel',	
						autoplay: 2000,
						perView: 2.5,
						rewind:false,
						slidesToScroll: 1,
						breakpoints: {
						600: {
							perView: 1.5
						}
					}
				}).mount();
				}
				if(document.querySelector(".constResultWra .tableWra")){
					document.querySelector(".constResultWra .tableWra").innerHTML = _consRHSDetail;
				}
			}
		},
		onTimeout: function () {
			console.log('timeout!');
		},
		timeout: 50
	});
}


//Key Candidate data 
async function _get_assembly_election_key_candidate(jsonUrl,_stFor) {
	let liveBlogForLangUrl = ""
	// if(apiForLiveblog != ""){
	// 	let liveBlogForLangData = await fetch(apiForLiveblog);
	// 		liveBlogForLangData = await liveBlogForLangData.json();

	// 	if(liveBlogForLangData?.data?.site_switcher_widget_assembly_election){
	// 		liveBlogForLangUrl = liveBlogForLangData?.data?.site_switcher_widget_assembly_election?.story_url || "";
	// 	}
	// }

	var _jsonLokSabhaElectionURL = jsonUrl.replace(":state:",_stFor); 
	_stFor = _stFor.replace("-","_",_stFor);
	var _callbackLokSabhaName  = 'election_key_cand';
	
	_jsonp.send(_jsonLokSabhaElectionURL, {
		callbackName: _callbackLokSabhaName,
		onSuccess: function (response) {
			
			if(!response || !Object.keys(response).length) {
				return false;
			}
			if(response!='' || Object.keys(response).length>0) {
				const _result = Object.keys(response).map(i => response[i]);
				
				var _candDetail = '<div class="ls_mainhead mb10"><h3 class="ls_pageheading"><a href="javascript:void(0);">'+keyCandidatesLang+'</a></h3></div><div data-glide-el="track" class="brcountday-candidateslider-in"><ul>';
				Object.keys(response).forEach(function (key){
					var value = response[key];
					var _candName = value[cand_name];
					var _consName = value[cons_name];
					var _consState = value.state;
					var _candStatus = (value.CANDI_STATUS)?value.CANDI_STATUS:'';
					var _candStatusClass = 'cndt-awaited';
					var candFullImage = value?.cand_full_image != "" ? value.cand_full_image : "https://images.news18.com/static_news18/pix/ibnhome/news18/election-2022/candidate_default_img.png";
					var _candStatusVal =  (_candStatus != "")?_candStatus: awaitLang; //'AWAITED';
					if(_candStatusVal == 'NA'){
						_candStatusVal = awaitLang; //'AWAITED';
					}
					if(_candStatus){
						if(_candStatus.toLowerCase()  == 'won'){
							_candStatusClass = 'cndt-won';
							_candStatusVal = winsLang;
						}else if(_candStatus.toLowerCase()  == 'lost'){
							_candStatusClass = 'cndt-lost';
							_candStatusVal = lossLang;
						}else if(_candStatus.toLowerCase()  == 'leading'){
							_candStatusClass = 'cndt-leading';
							_candStatusVal = leadingLang;
						}else if(_candStatus.toLowerCase()  == 'trailing'){
							_candStatusClass = 'cndt-trailing';
							_candStatusVal = trailingLang;
						}
					}
					var _candBelongStateSlug = '';
					var _candBelongState = value.state;
					if(_candBelongState){
						_candBelongStateSlug = _candBelongState.toLowerCase().replace(" ","-");
					}
					
					var _candURL = '/'+switch_key+'/key-candidates/'+_convertedToMainElecSlug(value.cand_name)+'-'+value.candidate_id.toLowerCase()+'/'+switch_url; 
					let liveBlogForLangKeyCandWidgetUrl = liveBlogForLangUrl != "" ? liveBlogForLangUrl : _candURL;

					_candDetail+='<li><a href="'+liveBlogForLangKeyCandWidgetUrl+'" class="'+_candStatusClass+'"><figure><img src="'+candFullImage+'" alt="'+_candName+'" title="'+_candName+'"></figure><div class="candidateslider-details"><h3><b class="widgetcandi_name">'+_candName+'</b> <span>'+value.ABBR+' | '+_consName+'</span></h3><p><b>'+_candStatusVal+'</b></p></div></a></li>';
				});
				if(langType == 'kannada' || langType == 'hindi' || langType == 'english'){
					_candDetail+='</ul></div><div class="moreBtn"><a href="/'+switch_key+'/key-candidates/'+switch_url+'">'+moreKeyCandidatesLang+'</a></div>';
				}else{
					_candDetail+='</ul></div>';
				}
				if(document.querySelector('.brcountday-candidateslider')) { 
					document.querySelector(".brcountday-candidateslider").innerHTML = _candDetail;
					new Glide(document.querySelector('.brcountday-candidateslider'), {
						type: 'carousel',
						autoplay: 2000,
						perView:4,
						rewind:false,
						slidesToScroll: 1,
						breakpoints: {
							650: {
								perView: 1.2
							}
						}
					}).mount();	
				}
				
			}
		},
		onTimeout: function () {
			console.log('timeout!');
		},
		timeout: 50
	});
}

function elecTab(evt, cityName, id) {
	var i, tabcontent, tablinks;
	
	var tabcat = document.getElementById(id);
	  
	tabcontent = tabcat.querySelectorAll(".tab-content");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].classList.add("hide");
	}
	tablinks = tabcat.querySelectorAll(".tab-links");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	var dynamiclass = document.querySelectorAll("."+cityName)
	for (l = 0; l < dynamiclass.length; l++) {
		dynamiclass[l].classList.remove("hide"); 
	}
	evt.currentTarget.className += " active";
}

function _convertedToMainElecSlug(e){if(e)return e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}
get_election_json_url_assembly_list();
searchFunc();
(function(){ 
	get_election_json_url_assembly_list();
}, 10000);

var statesData = [];
// Search function
async function searchFunc() {
	let switchUrlAssembly = `https://election.nw18.com/electiondata/electionjson/assembly_election_dec_2022/${url_env}/switchdata_normal.json`;

	let switchData = await fetch(switchUrlAssembly);
	switchData = await switchData.json();

	let cons_list_url = switchData.cons_list_with_lang;

	let partyPages = {
		'english': `/${switch_key}/:state:/:partabbr:-:party:-party-detail/${switch_url}`,
		'hindi':  `/${switch_key}/:state:/:partabbr:-:party:-party-detail/${switch_url}`,
	}


	let siteToName = {
		'english' : (name) => name == 'gujarat' || name == 'himachal-pradesh' || name == 'gujarat',
		'hindi' : (name) => name == 'gujarat' || name == 'himachal-pradesh' || name == 'gujarat',
		'gujarati' : (name) => name == 'gujarat' || name == 'himachal-pradesh' || name == 'gujarat',
		
	}

	let partyData = await fetch(switchData.top_parties_details_all);
	partyData = await partyData.json();

	if(partyData) {
		let langTypeforParty = langType == 'english' ? 'english' : 'hindi';
		Object.keys(partyData).filter(state => langType == 'hindi' ? true : siteToName[langType](state)).forEach(state => {
			Object.keys(partyData[state]).forEach((party) => {
				statesData.push({
					'state': state,
					'show':  `${party} - ${langType == 'hindi' ? partyData[state][party].party_full_name_hindi : partyData[state][party].party_full_name}, ${partyData[state][party].state_slug.toUpperCase()}`,
					'search': party,
					'searchtwo': partyData[state][party].party_full_name,
					'url': `${partyPages[langTypeforParty].replace(':state:', state).replace(':partabbr:', partyData[state][party].party_abbr.toLowerCase()).replace(':party:',partyData[state][party].party_full_slug)}${switch_url}`
				})
			})
		})
	}

	let canData = await fetch(switchData.key_candidates_all);
	canData = await canData.json();

	if(canData) {
		let cand_name = (langType == 'english' ? 'cand_name' : 'CANDINAME_PUNJABI');
		Object.keys(canData).filter(state => (langType == 'hindi' || langType == 'english' || langType == 'punjab') ? true : false).forEach(state => {
			Object.keys(canData[state]).forEach((can) => {
				statesData.push({
					'state': state,
					'show':  langType == 'hindi' ? `${canData[state][can].candidate_name_hi}, ${canData[state][can].state_hindi}` : `${canData[state][can][cand_name]}, ${canData[state][can].state}`,
					'search': canData[state][can].cand_name,
					'searchtwo': canData[state][can].cand_name,
					'url': langType == 'english' ?  canData[state][can].cand_url + switch_url : canData[state][can].cand_url_hindi + switch_url
				})
			});
		})
	}

let constPage = {
		'hindi': {
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		},
		'lokmat': {
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		},
		'punjab':{
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		},
		'assam':{
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		},
		'english':{
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		},
		'gujarati':{
			'gujarat': `/${switch_key}/gujarat/:const:-wise-election-results-live-:const_id:/${switch_url}`,
			'himachal-pradesh': `/${switch_key}/himachal-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`
		}
	}


	function searchconsadder(name, data) {
		let cons_name = (langType == 'hindi' ? 'cons_name_hindi' : 'cons_name');
		Object.keys(data).forEach(item => {
			statesData.push({
				'state': '',
				'show': `${data[item][cons_name]}`,
				'search': data[item]['cons_name'],
				'searchtwo': data[item]['cons_name_hindi'],
				'url': constPage[langType][name].replace(":const:", data[item]['cons_slug'].replaceAll(" " , "-")).replace(":const_id:",item)
			})
		})
    }

	/*if( langType == 'hindi' || langType == 'punjab' || langType == 'english' ) {
		let data = await fetch(cons_list_url.replace(/:state:/gi, 'uttar-pradesh'));
		data = await data.json();
		searchconsadder('uttar-pradesh', data);
		data = await fetch(cons_list_url.replace(/:state:/gi, 'uttarakhand'));
		data = await data.json();
		searchconsadder('uttarakhand', data);
		data = await fetch(cons_list_url.replace(/:state:/gi, 'punjab'));
		data = await data.json();
		searchconsadder('punjab', data);
	}
  
	if(langType == 'lokmat' || langType == 'punjab' || langType == 'hindi' || langType == 'english') {
		let data = await fetch(cons_list_url.replace(/:state:/gi, 'goa'));
		data = await data.json();
		searchconsadder('goa', data);
	}
  
	if(langType == 'assam' || langType == 'punjab' || langType == 'hindi' || langType == 'english') {
		let data = await fetch(cons_list_url.replace(/:state:/gi, 'manipur'));
		data = await data.json();
		searchconsadder('manipur', data);
	} */
	
		let data = await fetch(cons_list_url.replace(/:state:/gi, 'gujarat'));
		data = await data.json();
		searchconsadder('gujarat', data);

		data = await fetch(cons_list_url.replace(/:state:/gi, 'himachal-pradesh'));
		data = await data.json();
		searchconsadder('himachal-pradesh', data);

	let searchedResult = document.getElementById("ass-autocomplete-results");
	let searchInput = document.querySelector(".assembly-search");
	// console.log("statesData:", statesData)
	if(searchedResult != null){
		searchInput.addEventListener("keyup", function () {
			if(this.value.length > 2){
				const matches = searching(statesData, this.value);

				if (!matches.length || this.value === "") searchedResult.innerHTML = "";
				else {
					const html = matches.map((match) => {
						const displayName = `${match.show}${match.type ? " - " + match.type : ""}`;
						return `<li><a href=${match.url}>${displayName}</a></li>`;
					})
					.join("");
					searchedResult.innerHTML = `${html}`;
					searchedResult.style.display = 'block'; 
				}
			}else{
				searchedResult.style.display = 'none';
			}
		});
	}

	function searching(statesData, word) {
		return statesData.filter((state)=> {
			const regex = new RegExp('^' + word, "gi");
			return state["search"].match(regex) || state["searchtwo"].match(regex);
		});
	}
}