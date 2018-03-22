// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string

function domainName(url) {
  //remove period and ending and return domain name
  const cutDomainString = (str) => str.substr(0, str.search(/["."]/));
  // remove test case prefixes
  if (url.includes("www.")) {
    let str = url.slice(url.indexOf(".") + 1)
    return cutDomainString(str)
  } else if (url.includes("://")) {
    let str = url.slice(url.search(/:/) + 3)
    return cutDomainString(str)
  } else return cutDomainString(url)

}

//Test:
// domainName("http://google.com")
// domainName("http://google.co.jp")
// domainName("https://www.rnm7np1o8p.io/default.html")
// domainName("www.xakep.ru"),
// domainName("https://youtube.com")
// domainName("http://www.codewars.com/kata/")
// domainName("icann.org")
