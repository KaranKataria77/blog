(function () {
  window.VIDGYOR = {
    initPlayer: function initPlayer(opts) {
      window.vgrPlayerJSLoad = true;
      window.vgrOptions = {
        videoElemId: "playerContainer",
        accountId: opts.accountId,
        videoId: opts.videoId,
        isAutoPlay: opts.isAutoPlay,
        isMute: opts.isMute,
        posterImageUrl: opts.posterImageUrl,
        taptounmute: opts.tapToUnmute,
        disableAds: opts.disableAds,
        pip: opts.pip || "0",
        piv: opts.piv || "0",
        pipconf: opts.pipconf || "r,20,5,180,320,180,320",
        gaTitle: opts.gaTitle || "Live TV",
      };
      var container = document.createElement("iframe");
      container.setAttribute("id", "vidgyor_iframe");
      container.setAttribute("frameborder", "0");
      container.setAttribute("allowfullscreen", "");
      container.setAttribute("allow", "autoplay; fullscreen");
      container.setAttribute("mozAllowFullScreen", "");
      container.setAttribute("webkitAllowFullScreen", "");
      container.setAttribute("scrolling", "no");
      container.style.minWidth = "200px";
      container.style.border = "none";
      container.height = "".concat(
        document.getElementById("vidgyor_container").parentElement.clientHeight,
        "px"
      );
      container.width = "".concat(
        document.getElementById("vidgyor_container").parentElement.clientWidth,
        "px"
      );
      document.getElementById("closeButtonContainer").appendChild(container);
      var myhtml =
        '<html>\n      <head data-cast-api-enabled="true">\n      <meta charset="utf-8" />\n      <meta\n      name="viewport"\n      content="width=device-width,height=device-height,initial-scale=1.0"\n      />\n   <script src="https://static.vidgyor.com/player/v12/js/vgr_dai_init.min.js"></script>\n      </head>\n      <link rel="icon" href="data:;base64,iVBORwOKGO=" />\n      <link rel="stylesheet" href="https://static.vidgyor.com/player/v10/css/vidgyor-vjs.css" />\n\n      <body>\n      <div style="height: 100%; width: 100%">\n      <div id="playerContainer" style="background: black; height: 100%; width: 100%" ></div>\n      </div>\n\n      <script>\n\n      window.recognisedDomains = [\n      "https://s3-ap-southeast-1.amazonaws.com",\n      "https://static.vidgyor.com",\n      "https://content.vidgyor.com",\n      "https://www.news18.com",\n      "http://backends.moneycontrol.com",\n      "https://moneycontrol.com",\n      "https://www.moneycontrol.com",\n      "http://www.news18odia.com"\n      ];\n\n\n      var options = '
          .concat(
            JSON.stringify(window.vgrOptions),
            "\n\n      let count = 0;\n      var interval;\n      window.pip = "
          )
          .concat(
            window.vgrOptions.pip,
            " == 1 ? true : false\n      console.log("
          )
          .concat(window.vgrOptions.piv, ', "piv")\n      if (')
          .concat(
            window.vgrOptions.piv,
            ' === 1) {\n      interval = setInterval(function() {\n        window.parent.postMessage("readyToRecieveProps", "*");\n      }, 1000);\n      window.addEventListener("message", function (event) {\n      if (window.recognisedDomains.indexOf(event.origin) > -1) {\n        messageFromParent = event.data;\n        if (messageFromParent === "init") {\n          if (count === 0) {\n            \n            clearInterval(interval);\n          }\n          count++;\n          parent.postMessage("myevent", "*");\n        }\n      }\n      });\n      } else {\n      console.log("running ++++")\n      }\n      </script>\n      </body>\n      </html>'
          );
      container.contentDocument.open();
      container.contentDocument.write(myhtml);
      container.contentDocument.close();
    },
  };
})();
