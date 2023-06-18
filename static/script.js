const imgs = ['/static/images/bag.jpg','/static/images/bag1.jpg','/static/images/bag2.jpg','/static/images/bag3.jpg','/static/images/bag4.jpg','/static/images/bag5.jpg','/static/images/bag6.jpg','/static/images/bag6.jpg','/static/images/bag7.jpg','/static/images/bag8.jpg','/static/images/bag9.jpg','/static/images/bag10.jpg','/static/images/bag11.jpg','/static/images/bag12.jpg','/static/images/bag13.jpg','/static/images/bag14.jpg','/static/images/bag15.jpg'];

window.onload = function() {
  const random = Math.floor(Math.random() * imgs.length);
  document.body.style.backgroundImage = `url(${imgs[random]})`;
}

