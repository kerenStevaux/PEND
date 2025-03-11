const times = ['Flamengo', 'Palmeiras', 'São Paulo'];

times.push('Corinthians');
times.unshift('Grêmio');
times.pop('Corinthians');

console.log(times.indexOf('Palmeiras'));

times.reverse();

console.log(times);