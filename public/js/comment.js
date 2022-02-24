const newComment = async (event) => {
    event.preventDefault();
  console.log("newpost")
    const postComment = document.querySelector('#addComemnt').value.trim();
    //const needed_funding = document.querySelector('#post-funding').value.trim();
    //const post = document.querySelector('#post-text').value.trim();
    const postID = document.querySelector('.card-title').value.trim();
    
    if (postTitle && postText) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ body:postComment,  }),
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


  console.log("newpost")

  document
    .querySelector('#comment-text', )
    .addEventListener('click', newComment);
  

