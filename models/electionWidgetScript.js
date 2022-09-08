console.log("script calling ....... ")
var _jsonp = (function () {
  let that = {};
  that.send = function (src, options) {
    console.log("src .... ",src)
    console.log("src .... ",options)
    let callback_name = options.callbackName || "callback",
      on_success = options.onSuccess || function () {},
      on_timeout = options.onTimeout || function () {},
      timeout = options.timeout || 10; // sec

    let timeout_trigger = window.setTimeout(function () {
      window[callback_name] = function () {};
      on_timeout();
    }, timeout * 1000);

    window[callback_name] = function (data) {
      window.clearTimeout(timeout_trigger);
      on_success(data);
    };

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;

    if (src != undefined) {
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  };
  return that;
})();

// localization for hindi, default english starts
let stateArr = {
  english: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  hindi: {
    "uttar-pradesh": "उत्तर प्रदेश",
    punjab: "पंजाब",
    uttarakhand: "उत्तराखण्ड",
    goa: "गोवा",
    manipur: "मणिपुर",
  },
  punjab: {
    "uttar-pradesh": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
    punjab: "ਪੰਜਾਬ",
    uttarakhand: "ਉੱਤਰਾਖੰਡ",
    goa: "ਗੋਆ",
    manipur: "ਮਨੀਪੁਰ",
  },
  punjabi: {
    "uttar-pradesh": "ਉੱਤਰ ਪ੍ਰਦੇਸ਼",
    punjab: "ਪੰਜਾਬ",
    uttarakhand: "ਉੱਤਰਾਖੰਡ",
    goa: "ਗੋਆ",
    manipur: "ਮਨੀਪੁਰ",
  },
  bengali: {
    "uttar-pradesh": "উত্তর প্রদেশ",
    punjab: "পঞ্জাব",
    uttarakhand: "উত্তরাখণ্ড",
    manipur: "মণিপুর",
    goa: "গোয়া",
  },
  lokmat: {
    "uttar-pradesh": "उत्तर प्रदेश",
    punjab: "पंजाब",
    uttarakhand: "उत्तराखंड",
    manipur: "मणिपूर",
    goa: "गोवा",
  },
  gujarati: {
    "uttar-pradesh": "ઉત્તર પ્રદેશ",
    punjab: "પંજાબ",
    uttarakhand: "ઉત્તરાખંડ",
    manipur: "મણીપુર",
    goa: "ગોવા",
  },
  tamil: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  telugu: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  malayalam: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  assam: {
    "uttar-pradesh": "উত্তৰ প্ৰদেশ",
    punjab: "পঞ্জাৱ",
    uttarakhand: "উত্তৰাখণ্ড",
    manipur: "মণিপুৰ",
    goa: "গোৱা",
  },
  urdu: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  odia: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
  kannada: {
    "uttar-pradesh": "uttar pradesh",
    punjab: "punjab",
    uttarakhand: "uttarakhand",
    goa: "goa",
    manipur: "manipur",
  },
};

let stateAbbr = {
  "uttar-pradesh": "UP",
  punjab: "PB",
  uttarakhand: "UK",
  goa: "GA",
  manipur: "MN",
};

let langType = "english",
  allianceHead1 = "ASSEMBLY ELECTIONS 2022",
  allianceHead2 = "seats",
  allianceHead3 = "seats to win",
  allianceLang = "Alliance",
  partyLang = "Party",
  winLeadLang = "Wins + Leads",
  strikeRateLang = "Strike Rate*",
  strikeRateStarLang = "*Percentage of wins/leads over contested seats",
  resultTallyLang = "Result Tally",
  keyCandName = "cand_name",
  keyConsName = "cons_name",
  awaitLang = "AWAITED",
  winsLang = "WINS ",
  leadingLang = "LEADING",
  lossLang = "LOSES",
  trailingLang = "TRAILING",
  consNameLableLang = "Cons. Name";

let env = "live",
  url_env = "live",
  switch_url = "",
  apiForLiveblog = "";

let switch_key = "assembly-elections";
let hostLocation = location.host;
// let hostLocation = "www.news18.com";
let hrefLocation = location.href;
// let hrefLocation = "https://www.news18.com/?utm_source=Jio&utm_medium=referral&utm_campaign=news18lang_widget_click&comscorekw=JioXpress";
if (hostLocation.search("stg") >= 0) {
  env = "stg";
  url_env = "beta";
  switch_url = "?new_framework=true&h";
} else if (hostLocation.search("betav1") >= 0) {
  env = "betav1";
  url_env = "beta";
  switch_url = "?new_framework=publickeytrue&h";
} else if (hostLocation.search("beta") >= 0) {
  env = "beta";
  url_env = "beta";
  switch_url = "?new_framework=publickeytrue&h";
}
var switchUrlAssembly = `https://election.nw18.com/electiondata/electionjson/assembly_election_2022/${url_env}/switchdata.json`;

if (
  hrefLocation.includes("assembly-elections") &&
  hrefLocation.search("amp") > 0
) {
  let queryParam = hrefLocation.split("?")[1];
  langType = queryParam.substring(0, queryParam.indexOf("#"));
} else {
  let hostlangtype = hrefLocation.split("://")[1];
  langType = hostlangtype
    .substring(0, hostlangtype.indexOf("."))
    .replace("stg", "")
    .replace("betav1", "")
    .replace("beta", "");
  if (langType == "" || langType == "www" || langType == "news18") {
    langType = "english";
  }
}

if (
  [
    "stg.news18.com",
    "beta.news18.com",
    "betav1.news18.com",
    "www.news18.com",
    "news18.com",
  ].includes(hostLocation)
) {
  switch_key = "assembly-elections-2022";
}
let counting_swither_key = "site_switcher_widget_assembly_election_2022";
apiForLiveblog =
  env != "live"
    ? `https://${env}${langType}.news18.com/nodeapi/data/${counting_swither_key}`
    : `https://${langType}.news18.com/nodeapi/data/${counting_swither_key}`;
if (langType == "english") {
  apiForLiveblog = "";
  switch_key = "assembly-elections-2022";
}

console.log("langType", [langType, apiForLiveblog, env, url_env]);

if (hostLocation.indexOf(langType) >= 0) {
  // langType = 'hindi',
  if (langType == "hindi") {
    (apiForLiveblog = ""),
      (resultTallyLang = "परिणाम"),
      (allianceHead1 = "विधानसभा चुनाव 2022"),
      (allianceHead2 = "सीटें"),
      (allianceHead3 = "सीट बहुमत के लिए"),
      (allianceLang = "गठबंधन"),
      (partyLang = "पार्टी"),
      (winLeadLang = "जीत + बढ़त"),
      (strikeRateLang = "स्ट्राइक रेट*"),
      (strikeRateStarLang = "*लड़ी गई सीटों पर जीत/बढ़त का प्रतिशत"),
      (keyCandName = "candidate_name_hi"),
      (keyConsName = "cons_name_hindi"),
      (awaitLang = "नतीजे बाकी"),
      (winsLang = "विजयी "),
      (leadingLang = "आगे"),
      (lossLang = "पराजित"),
      (trailingLang = "पीछे"),
      (consNameLableLang = "सीट का नाम");
  } else if (langType == "punjab" || langType == "punjabi") {
    (apiForLiveblog = ""),
      (langType = "punjab"),
      (resultTallyLang = "ਰਿਜ਼ਲਟ ਟੈਲੀ"),
      (allianceHead1 = "ਵਿਧਾਨਸਭਾ ਚੋਣਾਂ 2022"),
      (allianceHead2 = "ਸੀਟਾਂ"),
      (allianceHead3 = "ਜਿੱਤ ਲਈ ਜ਼ਰੂਰੀ ਸੀਟਾਂ"),
      (allianceLang = "ਗਠਜੋੜ"),
      (partyLang = "ਪਾਰਟੀ"),
      (winLeadLang = "ਜਿੱਤ + ਲੀਡ"),
      (strikeRateLang = "ਸਟ੍ਰਾਈਕ ਰੇਟ*"),
      (strikeRateStarLang = "*ਲੜੀਆਂ ਗਈਆਂ ਸੀਟਾਂ `ਤੇ ਜਿੱਤ/ਲੀਡ ਦਾ ਕੁੱਲ ਪ੍ਰਤੀਸ਼ਤ"),
      (keyCandName = "CANDINAME_PUNJABI"),
      (keyConsName = "cons_name_punjabi"),
      (awaitLang = "ਨਤੀਜੇ ਦੀ ਉਡੀਕ ਹੈ"),
      (winsLang = "ਜਿੱਤ "),
      (leadingLang = "ਅੱਗੇ"),
      (lossLang = "ਹਾਰ"),
      (trailingLang = "ਪਿੱਛੇ"),
      (consNameLableLang = "ਵਿਧਾਨਸਭਾ ਨਾਂਅ");
  } else if (langType == "bengali") {
    (switch_key = "assembly-elections-2022"),
      (allianceHead1 = "বিধানসভা নির্বাচন ২০২২"),
      (allianceHead2 = "আসন"),
      (allianceHead3 = "জয়ের জন্য আসন দরকার");
  } else if (langType == "lokmat") {
    (switch_key = "assembly-elections-2022"),
      (resultTallyLang = "रिझल्ट"),
      (allianceHead1 = "विधानसभा निवडणूक 2022"),
      (allianceHead2 = "सीट्स"),
      (allianceHead3 = "विजयासाठी सीट्स"),
      (keyCandName = "CAND_NAME_MARATHI"),
      (keyConsName = "CONS_NAME_MARATHI");
  } else if (langType == "gujarati") {
    (switch_key = "assembly-elections-2022"),
      (allianceHead1 = "વિધાનસભા ચૂંટણી 2022"),
      (allianceHead2 = "બેઠકો"),
      (allianceHead3 = "જીત માટે જરૂરી બેઠકો");
  } else if (langType == "kannada") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "ವಿಧಾನಸಭಾ ಚುನಾವಣೆ 2022",
    // allianceHead2 = "ಆಸನಗಳು",
    // allianceHead3 = "ಗೆಲ್ಲಲು ಸ್ಥಾನಗಳು"
  } else if (langType == "tamil") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "சட்டமன்ற தேர்தல் 2022",
    // allianceHead2 = "தொகுதிகள்",
    // allianceHead3 = "வெற்றிப் பெற வேண்டிய தொகுதிகள்"
  } else if (langType == "telugu") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "అసెంబ్లీ ఎన్నికలు 2022",
    // allianceHead2 = "సీట్లు",
    // allianceHead3 = "విజయానికి కావాల్సిన సీట్లు"
  } else if (langType == "malayalam") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "നിയമസഭാ തെരഞ്ഞെടുപ്പ് 2022",
    // allianceHead2 = "സീറ്റുകൾ",
    // allianceHead3 = "ജയിക്കാനായി വേണ്ട സീറ്റുകൾ"
  } else if (langType == "assam") {
    (switch_key = "assembly-elections-2022"),
      (allianceHead1 = "বিধানসভা নির্বাচন ২০২২"),
      (allianceHead2 = "আসন"),
      (allianceHead3 = "জয়ী হ’বলৈ দৰকাৰী আসন");
  } else if (langType == "odia") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "ବିଧାନସଭା ନିର୍ବାଚନ ୨୦୨୨",
    // allianceHead2 = "ଆସନଗୁଡିକ |",
    // allianceHead3 = "ଜିତିବା ପାଇଁ ଆସନ ଆବଶ୍ୟକ |"
  } else if (langType == "urdu") {
    switch_key = "assembly-elections-2022";
    // allianceHead1 = "اسمبلی انتخابات 2022",
    // allianceHead2 = "سیٹیں",
    // allianceHead3 = "جیتنے کیلئے سیٹیں"
  }
}

// Get Election Json URL'S From Switcher Json;
var _glide = "";
function _get_election_json_url_assembly_list() {
  var callBackForAssemblySwitchURL = "switchdata_assembly_election_2022";
  var jsonUrl = switchUrlAssembly;
  console.log("url ..... ",jsonUrl)
  _jsonp.send(jsonUrl, {
    callbackName: callBackForAssemblySwitchURL,
    onSuccess: function (response) {
      var data = response;
      if (data) {
        var assemblyJsonPath = data.seat_party_summary_all;
        var asElectionConstPath = data.cons_list_with_status;
        var asElectionConstPathAll = data.cons_list_with_status_all;
        var asElectionKeyCandPath = data.key_candidates_cross_all;
        var _byPollJsonPath = data.by_poll_party_summary_cross;
        if (document.querySelector(".alliace-tally-homepage")) {
          _get_assembly_election_results(assemblyJsonPath);
          _get_assembly_election_key_candidate(asElectionKeyCandPath);
          _get_assembly_election_cons_home_slider(asElectionConstPathAll);

          _get_assembly_election_cons_rhs(asElectionConstPath, "uttar-pradesh");
          _get_assembly_election_cons_rhs(asElectionConstPath, "punjab");
          _get_assembly_election_cons_rhs(asElectionConstPath, "uttarakhand");
          _get_assembly_election_cons_rhs(asElectionConstPath, "goa");
          _get_assembly_election_cons_rhs(asElectionConstPath, "manipur");
        }
        if (document.querySelector(".election_day_widget_acr")) {
          _get_assembly_election_results(assemblyJsonPath);
          if (typeof _fState !== "undefined") {
            if (_fState != "") {
              _get_assembly_election_cons_rhs_f(asElectionConstPath, _fState);
            } else {
              _rhsCalling(asElectionConstPath);
            }
          } else {
            _rhsCalling(asElectionConstPath);
          }
        }
        if (document.querySelector(".constResultWrap .tableWrap")) {
          _rhsCalling(asElectionConstPath);
        }
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}
function _get_election_json_url_assembly_list_mapclick(_stFor) {
  // _stFor = _stFor.replace("-","",_stFor);

  var callBackForAssemblySwitchURL = "switchdata_assembly_election_2022";
  var jsonUrl = switchUrlAssembly;
  _jsonp.send(jsonUrl, {
    callbackName: callBackForAssemblySwitchURL,
    onSuccess: function (response) {
      var data = response;
      if (data) {
        var asElectionConstPath = data.cons_list_with_status;
        _get_assembly_election_cons_rhs(asElectionConstPath, _stFor);
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}

// Get Assembly Election Results Data ;
async function _get_assembly_election_results(jsonUrl) {
  var _jsonAssemblyElectionURL = jsonUrl;
  var _callbackAssemblyName = "election_assembly_2022_all";

  let liveBlogForLangUrl = "";
  if (apiForLiveblog != "") {
    let liveBlogForLangData = await fetch(apiForLiveblog);
    liveBlogForLangData = await liveBlogForLangData.json();

    if (liveBlogForLangData?.data?.site_switcher_widget_assembly_election) {
      liveBlogForLangUrl =
        liveBlogForLangData?.data?.site_switcher_widget_assembly_election
          ?.story_url || "";
    }
  }
  console.log("url .... ", _jsonAssemblyElectionURL)

  _jsonp.send(_jsonAssemblyElectionURL, {
    callbackName: _callbackAssemblyName,
    onSuccess: function (response) {
      if (!response || !Object.keys(response).length) {
        return false;
      }
      let newresObject = response;
      if (langType == "punjab") {
        newresObject = {
          punjab: response.punjab,
          "uttar-pradesh": response["uttar-pradesh"],
          uttarakhand: response.uttarakhand,
          goa: response.goa,
          manipur: response.manipur,
        };
      }
      if (langType == "lokmat") {
        newresObject = {
          goa: response.goa,
          "uttar-pradesh": response["uttar-pradesh"],
          uttarakhand: response.uttarakhand,
          punjab: response.punjab,
          manipur: response.manipur,
        };
      }
      if (langType == "assam") {
        newresObject = {
          manipur: response.manipur,
          "uttar-pradesh": response["uttar-pradesh"],
          uttarakhand: response.uttarakhand,
          goa: response.goa,
          punjab: response.punjab,
        };
      }
      if (langType == "hindi" || langType == "english") {
        newresObject = {
          "uttar-pradesh": response["uttar-pradesh"],
          punjab: response.punjab,
          uttarakhand: response.uttarakhand,
          manipur: response.manipur,
          goa: response.goa,
        };
      }

      if (newresObject != "" || Object.keys(newresObject).length > 0) {
        var _asResultListing = "";
        var _asPartyListing = "";
        var _detailResult = "";
        var _asCnt = 0;
        var _acrossWidget = "";
        Object.keys(newresObject).forEach(function (v, key) {
          //Object.keys(response[v]).forEach(function (value,key){
          var _asAllianceData = newresObject[v].alliance;
          var _asPartyData = newresObject[v].party;
          var _asArrTotalSeats = newresObject[v].total_seats;
          var wonlead =
            _asArrTotalSeats.wonlead != "" ? _asArrTotalSeats.wonlead : 0;
          var _asTotalSeats = _asArrTotalSeats
            ? parseInt(_asArrTotalSeats.seats)
            : "";
          var _asNeedToWon = _asTotalSeats
            ? parseInt(_asTotalSeats / 2) + 1
            : "";
          var _asAllianceLength = _asAllianceData.length;

          var _progressBar = "";
          var _allianceNames = "";
          var _allianceResults = "";
          var _allianceOldResults = "";
          var _mapAllianceNames = "";
          var _mapAllianceResults = "";
          var _allianceWonLead = "";
          var _allianceSR = "";
          var _pgBar = "";
          var _firstPartyTowinText = "";
          var _secondPartyTowinText = "";
          var _allianceAcrossWL = "";

          _asAllianceData.forEach(function (value, key) {
            if (key < 5) {
              var _spercentage =
                (parseInt(value.wonlead) / _asTotalSeats) * 100;
              let total_candidate =
                value?.total_candidate != "" ? value.total_candidate : 0;
              var _strikePercentage =
                (parseInt(value.wonlead) / parseInt(total_candidate)) * 100;
              if (total_candidate == 0) {
                _strikePercentage = 0;
              }
              var _strikePercentageCheck = isNaN(_strikePercentage)
                ? 0
                : _strikePercentage;
              var _scolor = value.color ? value.color : "#1d1d1d";
              _progressBar +=
                '<span style="width:' +
                _spercentage +
                "%; background:" +
                _scolor +
                '"></span>';
              _allianceNames +=
                '<th style="background:' +
                _scolor +
                '">' +
                value.display_name +
                "</th>";
              _allianceWonLead +=
                '<td style="background:' +
                _scolor +
                '"><div class="tally-tablebox"><div class="box-inner">' +
                value.wonlead +
                '</div><div class="box-inner">' +
                value.won +
                " <span>wins</span></div></div></td>";
              _allianceAcrossWL +=
                '<td style="background:' +
                _scolor +
                '">' +
                value.wonlead +
                "</td>";
              _mapAllianceNames +=
                '<td class="ne-hmmpprt" style="background:' +
                _scolor +
                '">' +
                value.display_name +
                "</td>";
              _allianceResults +=
                '<td style="background:' +
                _scolor +
                '">' +
                value.wonlead +
                "</td>";
              _mapAllianceResults +=
                '<td style="background:' +
                _scolor +
                '">' +
                value.wonlead +
                "</td>";
              let _changes = value.changes;
              if (typeof value.changes !== "undefined") {
                if (parseInt(value.changes) > 0) {
                  _changes = "+" + value.changes;
                }
              }
              _allianceOldResults += "<td>" + _changes + "</td>";
              if (value.display_name.toLowerCase() == "oth") {
                _allianceSR += "<td>-</td>";
              } else {
                _allianceSR +=
                  "<td>" +
                  Math.round(_strikePercentageCheck) +
                  "% (" +
                  value.wonlead +
                  "/" +
                  total_candidate +
                  ")</td>";
              }
            }
          });
          var _progressBarParty = "";
          var _partyNames = "";
          var _partyResults = "";
          var _partyOldResults = "";
          var _partySR = "";

          _asPartyData.forEach(function (value, key) {
            if (key < 8) {
              var _spercentage =
                (parseInt(value.wonlead) / _asTotalSeats) * 100;
              let total_candidate =
                value?.total_candidate != "" ? value.total_candidate : 0;
              var _strikePercentage =
                (parseInt(value.wonlead) / parseInt(total_candidate)) * 100;
              if (total_candidate == 0) {
                _strikePercentage = 0;
              }
              var _strikePercentageCheck = isNaN(_strikePercentage)
                ? 0
                : _strikePercentage;
              var _scolor = value.color ? value.color : "#1d1d1d";
              _progressBarParty +=
                '<span style="width:' +
                _spercentage +
                "%; background:" +
                _scolor +
                '"></span>';
              _partyNames +=
                '<th style="background:' +
                _scolor +
                '">' +
                value.name +
                "</th>";
              _partyResults +=
                '<td style="background:' +
                _scolor +
                '; color:#fff">' +
                value.wonlead +
                "</td>";
              let _changes = value.changes;
              if (typeof value.changes !== "undefined") {
                if (parseInt(value.changes) > 0) {
                  _changes = "+" + value.changes;
                }
              }
              _partyOldResults += "<td>" + _changes + "</td>";
              if (value.name.toLowerCase() == "oth") {
                _partySR += "<td>-</td>";
              } else {
                _partySR +=
                  "<td>" +
                  Math.round(_strikePercentageCheck) +
                  "% (" +
                  value.wonlead +
                  "/" +
                  total_candidate +
                  ")</td>";
              }

              var _classForAss = key == 0 ? 'class="forwinner"' : "";
            }
          });

          //new start

          var _stateName = v.replace("-", " ");
          var _extraLine = "";
          if (_asCnt == 4) {
            _extraLine =
              '<div class="allianceTableftr">' + strikeRateStarLang + "</div>";
          }
          let stateClickLink = "/" + switch_key + "/" + v + "/" + switch_url;
          let partyAllianceLinks =
            "/" +
            switch_key +
            "/" +
            v +
            "/alliance-wise-tally-results/" +
            switch_url;
          let acrossclickLink = "/" + switch_key + "/" + v + "/" + switch_url;

          let liveBlogForLangWidgetUrl =
            liveBlogForLangUrl != "" ? liveBlogForLangUrl : acrossclickLink;
          let liveBlogForLangTallyWidgetUrl =
            liveBlogForLangUrl != "" ? liveBlogForLangUrl : partyAllianceLinks;

          if (langType == "lokmat") {
            if (v == "goa") {
              liveBlogForLangWidgetUrl = acrossclickLink;
            } else {
              stateClickLink = liveBlogForLangUrl;
            }
          }
          if (
            langType == "tamil" ||
            langType == "bengali" ||
            langType == "telugu"
          ) {
            stateClickLink = liveBlogForLangUrl;
          }

          // console.log("langtype + state: ", [langType, v, liveBlogForLangWidgetUrl, liveBlogForLangTallyWidgetUrl])

          _asResultListing +=
            '<div class="allianceTableSec"><div class="allianceTableHead"><h2 class="allianceHead-1"><a href="' +
            stateClickLink +
            '"><span>' +
            stateArr[langType][v] +
            "</span></a> " +
            resultTallyLang +
            '</h2><h3 class="allianceHead-2"><span>' +
            wonlead +
            "</span> /" +
            _asTotalSeats +
            " " +
            allianceHead2 +
            '</h3><p class="allianceHead-3">(' +
            _asNeedToWon +
            " " +
            allianceHead3 +
            ')</p></div><div class="brcountday-tallywidget-table"><a href="' +
            liveBlogForLangTallyWidgetUrl +
            '" style="position:absolute; height:100%; width:100%; display:block; z-index:999;"></a><table cellpadding="0" cellspacing="0"><tbody><tr><th>' +
            allianceLang +
            "</th>" +
            _allianceNames +
            "</tr><tr><td>" +
            winLeadLang +
            "</td>" +
            _allianceWonLead +
            "</tr><tr><td>+/- 2017</td>" +
            _allianceOldResults +
            "</tr><tr><td>" +
            strikeRateLang +
            "</td>" +
            _allianceSR +
            '</tr></tbody></table><div class="brcountday-tallywidget-right"></div></div>' +
            _extraLine +
            "</div>";

          _asPartyListing +=
            '<div class="allianceTableSec"><div class="allianceTableHead"><h2 class="allianceHead-1"><a href="' +
            stateClickLink +
            '"><span>' +
            stateArr[langType][v] +
            "</span></a> " +
            resultTallyLang +
            '</h2><h3 class="allianceHead-2"><span>' +
            wonlead +
            "</span> /" +
            _asTotalSeats +
            " " +
            allianceHead2 +
            '</h3><p class="allianceHead-3">(' +
            _asNeedToWon +
            " " +
            allianceHead3 +
            ')</p></div><div class="brcountday-tallywidget-table"><a href="' +
            liveBlogForLangTallyWidgetUrl +
            '" style="position:absolute; height:100%; width:100%; display:block; z-index:999;"></a><table cellpadding="0" cellspacing="0"><tbody><tr><th>' +
            partyLang +
            "</th>" +
            _partyNames +
            "</tr><tr><td>" +
            winLeadLang +
            "</td>" +
            _partyResults +
            "</tr><tr><td>+/- 2017</td>" +
            _partyOldResults +
            "</tr><tr><td>" +
            strikeRateLang +
            "</td>" +
            _partySR +
            '</tr></tbody></table><div class="brcountday-tallywidget-right"></div></div>' +
            _extraLine +
            "</div>";
          //new end

          _acrossWidget +=
            '<div class="election-tallywidget-table" onclick="acrossclick(\'' +
            liveBlogForLangWidgetUrl +
            '\')"><div class="tallywidget-table-top"><p class="table-top-title">' +
            stateArr[langType][v] +
            " <span>" +
            allianceHead1 +
            '</span></p><p class="table-top-seats">' +
            wonlead +
            "<sub>/" +
            _asTotalSeats +
            " " +
            allianceHead2 +
            "</sub> <span>(" +
            _asNeedToWon +
            " " +
            allianceHead3 +
            ')</span></p></div><div style="position:relative"><table cellpadding="0" cellspacing="0"><tbody><tr><th>' +
            allianceLang +
            "</th>" +
            _allianceNames +
            "</tr><tr><td>" +
            winLeadLang +
            "</td>" +
            _allianceAcrossWL +
            "</tr><tr><td>+/- 2017</td>" +
            _allianceOldResults +
            '</tr></tbody></table><div class="brcountday-tallywidget-right"></div></div><div class="for_mobile_seats"><p class="seats_no">' +
            wonlead +
            "<span>/" +
            _asTotalSeats +
            " " +
            allianceHead2 +
            '</span></p><p class="seats_win">(' +
            _asNeedToWon +
            " " +
            allianceHead3 +
            ")</p></div></div>";

          var _mapWidgetListing = "";
          _mapWidgetListing +=
            "<tbody><tr>" +
            _mapAllianceNames +
            "</tr><tr>" +
            _mapAllianceResults +
            "</tr></tbody>";

          if (document.querySelector(".svgtable-" + v)) {
            document.querySelector(".svgtable-" + v).innerHTML =
              _mapWidgetListing;
          }

          _detailResult =
            '<div class="AllianceTally tab-content tab-content-f">' +
            _asResultListing +
            '</div><div class="PartyTally tab-content hide tab-content-f"> ' +
            _asPartyListing +
            "</div>";
          _asCnt++;
          //})
        });

        if (document.querySelector(".alliace-tally-homepage")) {
          document.querySelector(".alliace-tally-homepage").innerHTML =
            _detailResult;
        }
        if (document.querySelector(".election_day_widget_acr")) {
          document.querySelector(".election_day_widget_acr").innerHTML =
            '<div data-glide-el="track"><div class="glide__slides">' +
            _acrossWidget +
            '</div><div class="glide__bullets" data-glide-el="controls[nav]"><button class="glide__bullet" data-glide-dir="=0"></button><button class="glide__bullet" data-glide-dir="=1"></button><button class="glide__bullet" data-glide-dir="=2"></button><button class="glide__bullet" data-glide-dir="=3"></button> <button class="glide__bullet" data-glide-dir="=4"></button></div></div>';
          new Glide(document.querySelector(".widget_row_election"), {
            type: "carousel",
            perView: 2,
            gap: 20,
            slidesToShow: 2,
            dots: "#dots",
            autoplay: 2000,
            draggable: true,
            breakpoints: { 767: { perView: 1, gap: 10, slidesToShow: 1 } },
          }).mount();
          // getapi("https://stgurdu.news18.com/nodeapi/data/site_switcher_widget_assembly_election_2022");
        }
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}

async function _get_assembly_election_cons_home_slider(jsonUrl) {
  let response = await fetch(jsonUrl);
  response = await response.json();

  let cnameType = "cname";
  if (langType == "punjab") {
    cnameType = "CONS_NAME_PUNJABI";
  } else if (langType == "hindi") {
    cnameType = "CONS_NAME_HINDI";
  } else if (langType == "lokmat") {
    cnameType = "CONS_NAME_MARATHI";
  }
  let _consTop = "",
    _consTopOther = "";

  let liveBlogForLangUrl = "";
  if (apiForLiveblog != "") {
    let liveBlogForLangData = await fetch(apiForLiveblog);
    liveBlogForLangData = await liveBlogForLangData.json();

    if (liveBlogForLangData?.data?.site_switcher_widget_assembly_election) {
      liveBlogForLangUrl =
        liveBlogForLangData?.data?.site_switcher_widget_assembly_election
          ?.story_url || "";
    }
  }

  Object.values(response).map((value) => {
    let _consStatus = value.CANDI_STATUS ? value.CANDI_STATUS : "",
      cname = value[cnameType] || value.cname,
      _stFor = value.stateslug,
      ABBR = value.ABBR && _consStatus != "NA" ? value.ABBR : " -- ",
      WINNER_2017 = value.WINNER_2017 ? value.WINNER_2017 : "",
      _rhsTopConsColor = value.color ? value.color : "#bababa",
      _consStatusVal =
        _consStatus == "NA" || _consStatus == "" ? awaitLang : _consStatus,
      _rhsConsURL =
        "/" +
        switch_key +
        "/" +
        value.stateslug +
        "/" +
        _convertedToMainElecSlug(value.cname) +
        "-wise-election-results-live-" +
        _convertedToMainElecSlug(value.cons_id) +
        "/" +
        switch_url;
    if (_consStatusVal == awaitLang) {
      (_rhsTopConsColor = "#bababa"), (ABBR = " -- ");
    }
    if (_consStatus) {
      if (_consStatus.toLowerCase() == "won") {
        _consStatusVal = winsLang;
      } else if (_consStatus.toLowerCase() == "lost") {
        _consStatusVal = lossLang;
      } else if (_consStatus.toLowerCase() == "leading") {
        _consStatusVal = leadingLang;
      } else if (_consStatus.toLowerCase() == "trailing") {
        _consStatusVal = trailingLang;
      }
    }

    let liveBlogForLangConstWidgetUrl =
      liveBlogForLangUrl != "" ? liveBlogForLangUrl : _rhsConsURL;

    // console.log("langtype + url: ", [langType, liveBlogForLangConstWidgetUrl])

    if (langType == "punjab") {
      if (value.stateslug == "punjab") {
        _consTop +=
          '<li><a href="' +
          liveBlogForLangConstWidgetUrl +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      } else {
        _consTopOther +=
          '<li><a href="' +
          liveBlogForLangConstWidgetUrl +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      }
    } else if (langType == "lokmat") {
      if (value.stateslug == "goa") {
        _consTop +=
          '<li><a href="' +
          _rhsConsURL +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      } else {
        _consTopOther +=
          '<li><a href="' +
          liveBlogForLangConstWidgetUrl +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      }
    } else if (langType == "assam") {
      if (value.stateslug == "manipur") {
        _consTop +=
          '<li><a href="' +
          liveBlogForLangConstWidgetUrl +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      } else {
        _consTopOther +=
          '<li><a href="' +
          liveBlogForLangConstWidgetUrl +
          '"><span class="const-cname">' +
          cname +
          ' | <p class="state_abbr">' +
          stateAbbr[_stFor] +
          '</p></span><span class="party-status" style="background: ' +
          _rhsTopConsColor +
          '"><b>' +
          ABBR +
          "</b><em>" +
          _consStatusVal +
          '</em></span><span class="last-winner-party">2017: ' +
          WINNER_2017 +
          "</span></a></li>";
      }
    } else {
      _consTop +=
        '<li><a href="' +
        liveBlogForLangConstWidgetUrl +
        '"><span class="const-cname">' +
        cname +
        ' | <p class="state_abbr">' +
        stateAbbr[_stFor] +
        '</p></span><span class="party-status" style="background: ' +
        _rhsTopConsColor +
        '"><b>' +
        ABBR +
        "</b><em>" +
        _consStatusVal +
        '</em></span><span class="last-winner-party">2017: ' +
        WINNER_2017 +
        "</span></a></li>";
    }
  });

  if (_consTop) {
    if (document.querySelector(".brcountday-contslider") != null) {
      document.querySelector(".brcountday-contslider").innerHTML =
        '<div data-glide-el="track" class="brcountday-contslider-in"><ul>' +
        _consTop +
        _consTopOther +
        '</ul><div class="brcountday-arrow" data-glide-el="controls"><button data-glide-dir="<"></button><button data-glide-dir=">"></button></div>';
    }
  }
  if (document.querySelector(".brcountday-contslider")) {
    new Glide(document.querySelector(".brcountday-contslider"), {
      type: "carousel",
      autoplay: 2000,
      perView: 8,
      rewind: false,
      slidesToScroll: 1,
      breakpoints: {
        600: {
          perView: 1.5,
        },
      },
    }).mount();
  }
}

function _get_assembly_election_cons_rhs(jsonUrl, _stFor) {
  var _jsonLokSabhaElectionURL = jsonUrl.replace(":state:", _stFor);
  // console.log("_jsonLokSabhaElectionURL", [_jsonLokSabhaElectionURL, _stFor])
  var _callbackLokSabhaName =
    "election_const_rhs_" + _stFor.replace("-", "_", _stFor);

  var _jsonAssemblyElectionURL = _jsonLokSabhaElectionURL;
  var liveBlogForLangUrl = "";

  _jsonp.send(_jsonAssemblyElectionURL, {
    callbackName: _callbackLokSabhaName,
    onSuccess: function (response) {
      if (!response || !Object.keys(response).length) {
        return false;
      }

      if (response != "" || Object.keys(response).length > 0) {
        var _consRHSDetail = `<table cellspacing="0" cellpadding="0"><tr><th>${consNameLableLang}</th><th>2022</th><th>2017</th><th>2012</th></tr>`;
        var _gridWidget = "";
        var _consTop = "";
        let cnameType = "cname";
        if (langType == "punjab") {
          cnameType = "CONS_NAME_PUNJABI";
        } else if (langType == "hindi") {
          cnameType = "CONS_NAME_HINDI";
        } else if (langType == "lokmat") {
          cnameType = "CONS_NAME_MARATHI";
        }
        Object.keys(response).forEach(function (key) {
          var value = response[key];
          var _consStatus = value.CANDI_STATUS ? value.CANDI_STATUS : "";
          var cname = value[cnameType] || value.cname;
          var ABBR = value.ABBR && _consStatus != "NA" ? value.ABBR : " -- ";
          var WINNER_2017 = value.WINNER_2017 ? value.WINNER_2017 : "";
          var WINNER_2012 = value.WINNER_2012 ? value.WINNER_2012 : "";
          var _rhsConsColor = value.color ? value.color : "#bababa";
          var _rhsTopConsColor = value.color ? value.color : "#bababa";
          var _consStatusVal = _consStatus == "NA" ? "AWAITED" : _consStatus;
          var _asMURL = ""; //_langText.state_url.replace(/xxx/g,_stFor);

          var _rhsConsURL =
            "/" +
            switch_key +
            "/" +
            value.stateslug +
            "/" +
            _convertedToMainElecSlug(value.cname) +
            "-election-result-" +
            _convertedToMainElecSlug(value.cons_id) +
            "/" +
            switch_url;
          _consRHSDetail +=
            '<tr data-rel="' +
            _rhsConsURL +
            '"><td><a href="' +
            _rhsConsURL +
            '" target="_parent">' +
            cname +
            '</a></td><td style="background: ' +
            _rhsConsColor +
            '; color:#fff">' +
            ABBR +
            '</td><td style="background: ' +
            value.party_color_2017 +
            '; color:#fff">' +
            WINNER_2017 +
            '</td><td style="background: ' +
            value.party_color_2012 +
            '; color:#fff">' +
            WINNER_2012 +
            "</td></tr>";
          var _consID = value.cons_id.toUpperCase();
          if (document.querySelector(".as2021-map #my_" + _consID)) {
            document.querySelector(".as2021-map #my_" + _consID).style.fill =
              _rhsConsColor;
          }
        });
        _consRHSDetail += "</table>";

        if (document.querySelector("#rhs-table-" + _stFor)) {
          document.querySelector("#rhs-table-" + _stFor).innerHTML =
            _consRHSDetail;
        }
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}

function _get_assembly_election_cons_rhs_f(jsonUrl, _stFor) {
  _stFor = _stFor.replace("-", "", _stFor);
  var _jsonLokSabhaElectionURL = jsonUrl;
  _jsonLokSabhaElectionURL = jsonUrl.replace(":state:", _stFor);
  var _callbackLokSabhaName = "election_const_rhs_" + _stFor;

  var _jsonAssemblyElectionURL = _jsonLokSabhaElectionURL;

  _jsonp.send(_jsonAssemblyElectionURL, {
    callbackName: _callbackLokSabhaName,
    onSuccess: function (response) {
      if (!response || !Object.keys(response).length) {
        return false;
      }

      if (response != "" || Object.keys(response).length > 0) {
        var _consRHSDetail = `<table cellspacing="0" cellpadding="0"><tr><th>${consNameLableLang}</th><th>2022</th><th>2017</th><th>2012</th></tr>`;
        var _gridWidget = "";
        var _consTop = "";
        Object.keys(response).forEach(function (key) {
          var value = response[key];
          var _consStatus = value.CANDI_STATUS ? value.CANDI_STATUS : "";
          var cname = value.cname;
          var ABBR = value.ABBR && _consStatus != "NA" ? value.ABBR : " -- ";
          var WINNER_2017 = value.WINNER_2017 ? value.WINNER_2017 : "";
          var WINNER_2012 = value.WINNER_2012 ? value.WINNER_2012 : "";
          var _rhsConsColor = value.color ? value.color : "#5B5B5B";
          var _rhsTopConsColor = value.color ? value.color : "#5B5B5B";
          var _consStatusVal = _consStatus == "NA" ? "AWAITED" : _consStatus;
          var _asMURL = ""; //_langText.state_url.replace(/xxx/g,_stFor);
          //var _rhsConsURL = '/'+switch_key+'/'+value.stateslug+'/'+_convertedToMainElecSlug(value.cname)+'-election-result-'+_convertedToMainElecSlug(value.cons_id)+'/';
          //var _rhsConsURL = '/'+switch_key+'/'+value.stateslug+'/constituency-wise-election-results-live-'+_convertedToMainElecSlug(value.cons_id)+'/';

          var _rhsConsURL =
            "/" +
            switch_key +
            "/" +
            value.stateslug +
            "/" +
            _convertedToMainElecSlug(value.cname) +
            "-election-result-" +
            _convertedToMainElecSlug(value.cons_id) +
            "/" +
            switch_url;
          _consRHSDetail +=
            '<tr class="show-hide ' +
            _convertedToMainElecSlug(value.RESERVATION) +
            '" data-rel="' +
            _rhsConsURL +
            '"><td><a href="' +
            _rhsConsURL +
            '">' +
            cname +
            '</a></td>     <td style="background: ' +
            _rhsConsColor +
            '; color:#fff">' +
            ABBR +
            '</td><td style="background: ' +
            value.party_color_2017 +
            '; color:#fff">' +
            WINNER_2017 +
            '</td><td style="background: ' +
            value.party_color_2012 +
            '; color:#fff">' +
            WINNER_2012 +
            "</td></tr>";
        });
        _consRHSDetail += "</table>";

        if (document.querySelector(".constResultWrap .tableWrap")) {
          document.querySelector(".constResultWrap .tableWrap").innerHTML =
            _consRHSDetail;
        }
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}

//Key Candidate data
async function _get_assembly_election_key_candidate(jsonUrl) {
  let liveBlogForLangUrl = "";
  if (apiForLiveblog != "") {
    let liveBlogForLangData = await fetch(apiForLiveblog);
    liveBlogForLangData = await liveBlogForLangData.json();

    if (liveBlogForLangData?.data?.site_switcher_widget_assembly_election) {
      liveBlogForLangUrl =
        liveBlogForLangData?.data?.site_switcher_widget_assembly_election
          ?.story_url || "";
    }
  }

  var _jsonLokSabhaElectionURL = jsonUrl;
  var _callbackLokSabhaName = "election_key_cand";

  _jsonp.send(_jsonLokSabhaElectionURL, {
    callbackName: _callbackLokSabhaName,
    onSuccess: function (response) {
      if (!response || !Object.keys(response).length) {
        return false;
      }
      if (response != "" || Object.keys(response).length > 0) {
        let newresponse = response;
        if (langType == "punjab") {
          newresponse = {
            punjab: response.punjab,
            "uttar-pradesh": response["uttar-pradesh"],
            uttarakhand: response.uttarakhand,
            goa: response.goa,
            manipur: response.manipur,
          };
        } else if (langType == "lokmat") {
          newresponse = {
            goa: response.goa,
            "uttar-pradesh": response["uttar-pradesh"],
            punjab: response.punjab,
            uttarakhand: response.uttarakhand,
            manipur: response.manipur,
          };
        } else if (langType == "assam") {
          newresponse = {
            manipur: response.manipur,
            "uttar-pradesh": response["uttar-pradesh"],
            punjab: response.punjab,
            uttarakhand: response.uttarakhand,
            goa: response.goa,
          };
        }
        const _result = Object.keys(response).map((i) => response[i]);
        var _candDetail =
          '<div data-glide-el="track" class="brcountday-candidateslider-in"><ul>';
        Object.keys(newresponse).forEach(function (val, key) {
          var arrVal = newresponse[val];
          Object.keys(arrVal).forEach(function (v, key) {
            var value = arrVal[v];
            var _candName = value[keyCandName] || value.cand_name || "";
            var _consName = value[keyConsName] || value.cons_name || "";
            var _consState = value.state || "";
            var _candStatus = value.CANDI_STATUS ? value.CANDI_STATUS : "";
            var _candStatusClass = "cndt-awaited";
            var candFullImage =
              value?.cand_full_image != ""
                ? value.cand_full_image
                : "https://images.news18.com/static_news18/pix/ibnhome/news18/election-2022/candidate_default_img.png";
            var _candStatusVal = _candStatus != "" ? _candStatus : awaitLang; //'AWAITED';
            if (_candStatusVal == "NA") {
              _candStatusVal = awaitLang; //'AWAITED';
            }

            if (_candStatus) {
              if (_candStatus.toLowerCase() == "won") {
                _candStatusClass = "cndt-won";
                _candStatusVal = winsLang;
              } else if (_candStatus.toLowerCase() == "lost") {
                _candStatusClass = "cndt-lost";
                _candStatusVal = lossLang;
              } else if (_candStatus.toLowerCase() == "leading") {
                _candStatusClass = "cndt-leading";
                _candStatusVal = leadingLang;
              } else if (_candStatus.toLowerCase() == "trailing") {
                _candStatusClass = "cndt-trailing";
                _candStatusVal = trailingLang;
              }
            }
            var _candBelongStateSlug = "";
            var _candBelongState = value.state;
            if (_candBelongState) {
              _candBelongStateSlug = _candBelongState
                .toLowerCase()
                .replace(" ", "-");
            }
            let _consStateShort = _convertedToMainElecSlug(_consState);

            var _candURL =
              "/" +
              switch_key +
              "/key-candidates/" +
              _convertedToMainElecSlug(value.cand_name) +
              "-" +
              value.candidate_id.toLowerCase() +
              "/" +
              switch_url;

            let liveBlogForLangKeyCandWidgetUrl =
              liveBlogForLangUrl != "" ? liveBlogForLangUrl : _candURL;
            // console.log("langtype + key cand url: ", [langType, liveBlogForLangKeyCandWidgetUrl])

            _candDetail +=
              '<li><a href="' +
              liveBlogForLangKeyCandWidgetUrl +
              '" class="' +
              _candStatusClass +
              '" style="border-bottom-color: ' +
              value.color_code +
              '"><figure><img src="' +
              candFullImage +
              '" alt="' +
              _candName +
              '" title="' +
              _candName +
              '"></figure><div class="candidateslider-details"><h3><b class="widgetcandi_name">' +
              _candName +
              "</b> <span>" +
              value.ABBR +
              " | " +
              _consName +
              ", " +
              stateAbbr[_consStateShort] +
              "</span></h3><p><b>" +
              _candStatusVal +
              "</b></p></div></a></li>";
          });
        });
        _candDetail +=
          '</ul><div class="brcountday-arrow" data-glide-el="controls"><button data-glide-dir="<"></button><button data-glide-dir=">"></button></div>';

        if (document.querySelector(".brcountday-candidateslider")) {
          document.querySelector(".brcountday-candidateslider").innerHTML =
            _candDetail;
          new Glide(document.querySelector(".brcountday-candidateslider"), {
            autoplay: 2000,
            perView: 4,
            rewind: false,
            type: "carousel",
            slidesToScroll: 1,
            breakpoints: {
              650: {
                perView: 1.2,
              },
            },
          }).mount();
        }
      }
    },
    onTimeout: function () {
      console.log("timeout!");
    },
    timeout: 50,
  });
}

var _getSlide = "";

function showSelectYearMap() {
  let e = document.getElementById("yearChange");
  let selectYare = e.value;
  let elem = document.querySelector("#map_ul_list li.active");
  let dataIdd = elem.getAttribute("data-rel");
  let hideElem = document.querySelectorAll("." + dataIdd + "-MAP div");
  for (let ij = 0; ij < hideElem.length; ij++) {
    hideElem[ij].classList.add("hide");
  }
  let shwElem = document.querySelector(
    "." + dataIdd + '-MAP [data-map-id="' + dataIdd + "_" + selectYare + '"]'
  );
  shwElem.classList.remove("hide");
}

function elecsTab(evt, cityName, id) {
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
  var dynamiclass = document.querySelectorAll("." + cityName);
  for (l = 0; l < dynamiclass.length; l++) {
    dynamiclass[l].classList.remove("hide");
  }
  evt.currentTarget.className += " active";
  showSelectYearMap();
  if (cityName == "UP-MAP" || cityName == "UP") {
    _get_election_json_url_assembly_list_mapclick("uttar-pradesh");
  } else if (cityName == "PB-MAP" || cityName == "PB") {
    _get_election_json_url_assembly_list_mapclick("punjab");
  } else if (cityName == "UK-MAP" || cityName == "UK") {
    _get_election_json_url_assembly_list_mapclick("uttarakhand");
  } else if (cityName == "GA-MAP" || cityName == "GA") {
    _get_election_json_url_assembly_list_mapclick("goa");
  } else if (cityName == "MN-MAP" || cityName == "MN") {
    _get_election_json_url_assembly_list_mapclick("manipur");
  }
}

var _elecTabList = document.getElementsByClassName("elemaintab");
var _elecTabContent = document.getElementsByClassName("tab-content-f");
Array.from(_elecTabList).forEach(function (element) {
  element.addEventListener(
    "click",
    () => {
      let _t = element.getAttribute("data-rel");
      _removeClasses(_elecTabList);
      for (var i = 0; i < _elecTabContent.length; i++) {
        _elecTabContent[i].classList.add("hide");
      }
      element.classList.add("active");
      document.querySelector("." + _t).classList.remove("hide");
    },
    false
  );
});

function _removeClasses(els) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove("active");
  }
}

//Code for switch tabs
if (document.querySelector(".alliace-tally-homepage")) {
  var tabID = "aalliance";
  setInterval(function () {
    if (tabID == "aalliance") {
      tabID = "pparty";
      document.getElementById("pparty").click();
    } else {
      tabID = "aalliance";
      document.getElementById("aalliance").click();
    }
  }, 10000);
}

function _convertedToMainElecSlug(e) {
  if (e)
    return e
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
}
function acrossclick(url) {
  if (url) {
    let redirect_url = `${url}`;
    if (url.search("https:") < 0) {
      if (env == "live") {
        redirect_url =
          langType == "english"
            ? `https://www.news18.com${url}`
            : `https://${langType}.news18.com${url}`;
      } else {
        let localLangType = langType == "punjab" ? "punjabi" : langType;
        redirect_url =
          langType == "english"
            ? `https://${env}.news18.com${url}`
            : `https://${env}${localLangType}.news18.com${url}`;
      }
    }
    // location.href = url
    window.open(redirect_url, "_parent");
  }
}
function _rhsCalling(asElectionConstPath) {
  if (asElectionConstPath) {
    if (langType == "punjab") {
      _get_assembly_election_cons_rhs(asElectionConstPath, "punjab");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttar-pradesh");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttarakhand");
      _get_assembly_election_cons_rhs(asElectionConstPath, "goa");
      _get_assembly_election_cons_rhs(asElectionConstPath, "manipur");
    } else if (langType == "lokmat") {
      _get_assembly_election_cons_rhs(asElectionConstPath, "goa");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttar-pradesh");
      _get_assembly_election_cons_rhs(asElectionConstPath, "punjab");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttarakhand");
      _get_assembly_election_cons_rhs(asElectionConstPath, "manipur");
    } else if (langType == "assam") {
      _get_assembly_election_cons_rhs(asElectionConstPath, "manipur");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttar-pradesh");
      _get_assembly_election_cons_rhs(asElectionConstPath, "punjab");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttarakhand");
      _get_assembly_election_cons_rhs(asElectionConstPath, "goa");
    } else {
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttar-pradesh");
      _get_assembly_election_cons_rhs(asElectionConstPath, "punjab");
      _get_assembly_election_cons_rhs(asElectionConstPath, "uttarakhand");
      _get_assembly_election_cons_rhs(asElectionConstPath, "goa");
      _get_assembly_election_cons_rhs(asElectionConstPath, "manipur");
    }
  }
}
_get_election_json_url_assembly_list();

searchFunc();

setInterval(function () {
  _get_election_json_url_assembly_list();
}, 28500);
var statesData = [];

// Search function
async function searchFunc() {
  let switchUrlAssembly = `https://election.nw18.com/electiondata/electionjson/assembly_election_2022/${url_env}/switchdata_normal.json`;

  let switchData = await fetch(switchUrlAssembly);
  switchData = await switchData.json();

  let cons_list_url = switchData.cons_list_with_lang;

  let partyPages = {
    english: `/${switch_key}/:state:/:partabbr:-:party:-party-detail/${switch_url}`,
    hindi: `/${switch_key}/:state:/:partabbr:-:party:-party-detail/${switch_url}`,
  };

  let siteToName = {
    english: (name) =>
      name == "uttarpradesh" ||
      name == "uttar-pradesh" ||
      name == "uttarakhand",
    hindi: (name) =>
      name == "uttarpradesh" ||
      name == "uttar-pradesh" ||
      name == "uttarakhand",
    lokmat: (name) => name == "goa",
    punjab: (name) => name == "punjab",
    punjabi: (name) => name == "punjab",
    assam: (name) => name == "manipur",
  };

  let partyData = await fetch(switchData.top_parties_details_all);
  partyData = await partyData.json();

  if (partyData) {
    let langTypeforParty = langType == "english" ? "english" : "hindi";
    Object.keys(partyData)
      .filter((state) =>
        langType == "hindi" ? true : siteToName[langType](state)
      )
      .forEach((state) => {
        Object.keys(partyData[state]).forEach((party) => {
          statesData.push({
            state: state,
            show: `${party} - ${
              langType == "hindi"
                ? partyData[state][party].party_full_name_hindi
                : partyData[state][party].party_full_name
            }, ${partyData[state][party].state_slug.toUpperCase()}`,
            search: party,
            searchtwo: partyData[state][party].party_full_name,
            url: `${partyPages[langTypeforParty]
              .replace(":state:", state)
              .replace(
                ":partabbr:",
                partyData[state][party].party_abbr.toLowerCase()
              )
              .replace(
                ":party:",
                partyData[state][party].party_full_slug
              )}${switch_url}`,
          });
        });
      });
  }

  let canData = await fetch(switchData.key_candidates_all);
  canData = await canData.json();

  if (canData) {
    let cand_name = langType == "english" ? "cand_name" : "CANDINAME_PUNJABI";
    Object.keys(canData)
      .filter((state) =>
        langType == "hindi" || langType == "english" || langType == "punjab"
          ? true
          : false
      )
      .forEach((state) => {
        Object.keys(canData[state]).forEach((can) => {
          statesData.push({
            state: state,
            show:
              langType == "hindi"
                ? `${canData[state][can].candidate_name_hi}, ${canData[state][can].state_hindi}`
                : `${canData[state][can][cand_name]}, ${canData[state][can].state}`,
            search: canData[state][can].cand_name,
            searchtwo: canData[state][can].cand_name,
            url:
              langType == "english"
                ? canData[state][can].cand_url + switch_url
                : canData[state][can].cand_url_hindi + switch_url,
          });
        });
      });
  }

  let constPage = {
    hindi: {
      "uttar-pradesh": `/${switch_key}/uttar-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      goa: `/${switch_key}/goa/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      manipur: `/${switch_key}/manipur/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      uttarakhand: `/${switch_key}/uttarakhand/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      punjab: `/${switch_key}/punjab/:const:-wise-election-results-live-:const_id:/${switch_url}`,
    },
    lokmat: {
      goa: `/${switch_key}/goa/:const:-wise-election-results-live-:const_id:/${switch_url}`,
    },
    punjab: {
      "uttar-pradesh": `/${switch_key}/uttar-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      goa: `/${switch_key}/goa/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      manipur: `/${switch_key}/manipur/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      uttarakhand: `/${switch_key}/uttarakhand/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      punjab: `/${switch_key}/punjab/:const:-wise-election-results-live-:const_id:/${switch_url}`,
    },
    assam: {
      manipur: `/${switch_key}/manipur/:const:-wise-election-results-live-:const_id:/${switch_url}`,
    },
    english: {
      "uttar-pradesh": `/${switch_key}/uttar-pradesh/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      goa: `/${switch_key}/goa/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      manipur: `/${switch_key}/manipur/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      uttarakhand: `/${switch_key}/uttarakhand/:const:-wise-election-results-live-:const_id:/${switch_url}`,
      punjab: `/${switch_key}/punjab/:const:-wise-election-results-live-:const_id:/${switch_url}`,
    },
  };

  function searchconsadder(name, data) {
    let cons_name = langType == "hindi" ? "cons_name_hindi" : "cons_name";
    Object.keys(data).forEach((item) => {
      statesData.push({
        state: "",
        show: `${data[item][cons_name]}`,
        search: data[item]["cons_name"],
        searchtwo: data[item]["cons_name_hindi"],
        url: constPage[langType][name]
          .replace(":const:", data[item]["cons_slug"].replaceAll(" ", "-"))
          .replace(":const_id:", item),
      });
    });
  }

  if (langType == "hindi" || langType == "punjab" || langType == "english") {
    let data = await fetch(cons_list_url.replace(/:state:/gi, "uttar-pradesh"));
    data = await data.json();
    searchconsadder("uttar-pradesh", data);

    data = await fetch(cons_list_url.replace(/:state:/gi, "uttarakhand"));
    data = await data.json();
    searchconsadder("uttarakhand", data);

    data = await fetch(cons_list_url.replace(/:state:/gi, "punjab"));
    data = await data.json();
    searchconsadder("punjab", data);
  }

  if (
    langType == "lokmat" ||
    langType == "punjab" ||
    langType == "hindi" ||
    langType == "english"
  ) {
    let data = await fetch(cons_list_url.replace(/:state:/gi, "goa"));
    data = await data.json();
    searchconsadder("goa", data);
  }

  if (
    langType == "assam" ||
    langType == "punjab" ||
    langType == "hindi" ||
    langType == "english"
  ) {
    let data = await fetch(cons_list_url.replace(/:state:/gi, "manipur"));
    data = await data.json();
    searchconsadder("manipur", data);
  }

  let searchedResult = document.getElementById("ass-autocomplete-results");
  let searchInput = document.querySelector(".assembly-search");
  // console.log("statesData:", statesData)
  if (searchedResult != null) {
    searchInput.addEventListener("keyup", function () {
      if (this.value.length > 2) {
        const matches = searching(statesData, this.value);

        if (!matches.length || this.value === "") searchedResult.innerHTML = "";
        else {
          const html = matches
            .map((match) => {
              const displayName = `${match.show}${
                match.type ? " - " + match.type : ""
              }`;
              return `<li><a href=${match.url}>${displayName}</a></li>`;
            })
            .join("");
          searchedResult.innerHTML = `${html}`;
          searchedResult.style.display = "block";
        }
      } else {
        searchedResult.style.display = "none";
      }
    });
  }

  function searching(statesData, word) {
    return statesData.filter((state) => {
      const regex = new RegExp("^" + word, "gi");
      return state["search"].match(regex) || state["searchtwo"].match(regex);
    });
  }
}
