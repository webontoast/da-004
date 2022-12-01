window.onload = function () {
  var Shuffle = window.Shuffle;
  var shuffleContainer = document.querySelector('.shuffle-container');
  
  if (shuffleContainer) {
    var shuffleInstance = new Shuffle(shuffleContainer, {
      itemSelector: 'li'
    }); 
      
    $('.shuffle-filter a').on('click',function(e){
      e.preventDefault();
      $('.shuffle-filter a').removeClass('selected');
      $(this).addClass('selected'); 
      var keyword = $(this).attr('data-target');
      shuffleInstance.filter(keyword);
    });
  }
  
}