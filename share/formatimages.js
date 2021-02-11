const formatImages = (rawimages, req) => {

  const url = req.protocol + '://' + req.get('host') + '/assets/images';

  const images = rawimages.split(',').map((r) => r = url + '/' + r);

  return images;
}

module.exports = formatImages;
