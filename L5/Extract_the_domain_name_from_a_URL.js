function domainName(url) {
  if (url.includes("http") || url.includes("www")) {
    let start = url.search(/(www|:)/i)
    console.log(url)
    console.log(start);
    // switch(start) {
    //   case 

    // }
  }
  //   }  return url.slice(url.search(/.]/)+1, url.lastIndexOf(/[.]/)-2);
  //   return url.slice(url.search("//")+2, url.search(/[.]/));
}

domainName("http://google.com")
domainName("http://google.co.jp")
domainName("https://www.rnm7np1o8p.io/default.html")

// console.log(domainName("http://google.com"));
// console.log(domainName("www.xakep.ru"));
