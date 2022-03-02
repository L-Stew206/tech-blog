const newComment = async (event) => {
    event.preventDefault();
  console.log("newpost")
    const postComment = document.querySelector('#addComment').value.trim();
    //const needed_funding = document.querySelector('#post-funding').value.trim();
    //const post = document.querySelector('#post-text').value.trim();
    const postID = document.querySelector('.card-title').getAttribute("id").trim();
    
    if (postComment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body:postComment, post_id:postID  }),
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
    .querySelector('#comment-text' )
    .addEventListener('click', newComment);
  

