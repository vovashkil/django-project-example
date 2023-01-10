document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#posts-view').style.display = 'none';
  document.querySelector('#post-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'none';

  load_posts;

});

function load_posts() {

  document.querySelector('#posts-view').style.display = 'block';
  document.querySelector('#post-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#posts-view').innerHTML = `<h3>It is a Posts View</h3>`;

}

function create_element(tagName, className, innerHTML) {

  const element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = innerHTML;

  return element;

}