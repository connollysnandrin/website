const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const sharp = require('sharp');

const input = [];

for(let i = 1; i <= 16; i++) {
	input.push(`${__dirname}/assets/img/photos/images/original/Photos${i}.jpg`)
}

input.forEach((e, i) => {
	sharp(e)
		.resize({ height: 1024 })
		.toFile(`${__dirname}/assets/img/photos/images/compressed/Photos${i+1}.jpg`, function(err) {
			console.log('finished');
		});
})
