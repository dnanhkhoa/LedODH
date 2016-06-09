function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function resizeIframe(ifrm) {
    //obj.style.height = 0;
    ifrm.style.height = ifrm.contentWindow.document.body.scrollHeight + 'px';

    // var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
    //
    // ifrm.style.visibility = 'hidden';
    // ifrm.style.height = "10px"; // reset to minimal height ...
    // // IE opt. for bing/msn needs a bit added or scrollbar appears
    // ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    // ifrm.style.visibility = 'visible';
}


function setChartPage(iframeID, url)
{
    var ifr = document.getElementById(iframeID);
    ifr.src = url;

    if (url == "")  {
        ifr.style.display = 'none';
    }
    else {
        ifr.style.display = '';
        //resizeIframe(ifr);
    }
}