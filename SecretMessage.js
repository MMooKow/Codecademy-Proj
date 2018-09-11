let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 1, 'know');
secretMessage.splice(7, 1, 'know');
secretMessage.splice(8, 1, 'know');
secretMessage.splice(9, 1, 'know');
secretMessage.splice(10, 1, 'know');

console.log(secretMessage.join(' '));