var someCSS = ".pell{border:1px solid hsla(0,0%,4%,.1)}.pell,.pell-content{box-sizing:border-box}.pell-content{height:300px;outline:0;overflow-y:auto;padding:10px}.pell-actionbar{background-color:#fff;border-bottom:1px solid hsla(0,0%,4%,.1)}.pell-button{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px;vertical-align:bottom}.pell-button-selected{background-color:#f0f0f0} \
	#wp-nomthis-editor-container{ height: 375px; }";

var headTag = document.getElementsByTagName('head')[0];
var styleE = document.createElement('style');
styleE.setAttribute('id', 'nomthis-wysiwyg-css');
styleE.innerHTML = someCSS;
//window.pfnt.windows.styleBlocks.push(styleE);
headTag.prepend(styleE);