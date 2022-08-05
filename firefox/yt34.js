'use strict';
browser.webRequest.onBeforeRequest.addListener(
  ({ url }) => ({ redirectUrl: url.replace('https://yt3.ggpht.com/', 'https://yt4.ggpht.com/') }),
  { urls: ['https://yt3.ggpht.com/*'], types: ['image'] },
  ['blocking']
);
