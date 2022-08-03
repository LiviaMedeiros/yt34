;new MutationObserver($ => {
 for (const { addedNodes: { length }, target } of $) if (length)
 for (const _ of target.getElementsByTagName('img')) if (_.src.startsWith('https://yt3.ggpht.com/'))
 _.src = _.src.replace('https://yt3.ggpht.com/', 'https://yt4.ggpht.com/');
}).observe(
 (document.getElementById('chatframe')?.contentDocument??document).body,
 { childList: true, subtree: true }
);
