document.getElementById('more-info-btn').addEventListener('click', function() {
  var moreInfo = document.getElementById('more-info');
  if (moreInfo.classList.contains('hidden')) {
    moreInfo.classList.remove('hidden');
  } else {
    moreInfo.classList.add('hidden');
  }
});
