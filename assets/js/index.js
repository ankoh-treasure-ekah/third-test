var twitter = document.getElementById('twitter');
var twitter_white = document.getElementById('icon-twitter');

twitter.addEventListener('', function(){
    console.log('yeeeees');
    this.style.display = 'none';
    twitter_white.style.display = 'block';
});

twitter.addEventListener('mouseleave', function(){
    console.log('yeeeees');
    this.style.display = 'block';
    twitter_white.style.display = 'none';
});

