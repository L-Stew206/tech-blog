const newPostHandler = async (event) => {
  event.preventDefault();
console.log("newpost")
  const postTitle = document.querySelector('#post-title').value.trim();
  //const needed_funding = document.querySelector('#post-funding').value.trim();
  const postText = document.querySelector('#post-text').value.trim();

  if (postTitle && postText) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title: postTitle, body: postText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json()
    console.log(result)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};
console.log("newpost")
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
