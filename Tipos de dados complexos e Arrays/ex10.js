let times = ["Flamengo", "Palmeiras", "São Paulo"];

times.unshift("Corinthians");
console.log(times);//Corinthians,Flamengo,Palmeiras,São Paulo

times.push("Grêmio")
console.log(times);//Corinthians,Flamengo,Palmeiras,São Paulo,Grêmio

times.pop();
console.log(times);//Corinthians,Flamengo,Palmeiras,São Paulo


console.log(times.indexOf("Palmeiras"));//2

times.reverse();
console.log(times)//São Paulo,Palmeiras,Flamengo,Corinthians
