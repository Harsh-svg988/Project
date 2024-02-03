const postButton = document.getElementById("post-btn");
const postArea = document.getElementById("post-area");
const posts = document.querySelector(".posts");

postButton.addEventListener("click", function() {
    if (postArea.value) {
        const newPost = document.createElement("div");
        newPost.classList.add("post-main");
        newPost.innerHTML = `
            <div class="prof-img">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
            </div>
            <div class="post-right">
                <div class="post-det">
                    <h4>Name</h4>
                    <h5>@chay2203</h5>
                    <div class="post-right-btns">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
                    </div>
                </div>
                <div class="post-txt-area">
                    <p>${postArea.value}</p>
                </div>
                <div class="like-cmnt-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
                </div>
            </div>
        `;
        posts.appendChild(newPost);
        postArea.value = "";
    }
});
const PostArea = document.getElementById('post-area');
const charCount = document.querySelector('.count_of_char');

postArea.addEventListener('input', () => {
  const text = PostArea.value;
  charCount.textContent = text.length;

  if (text.length > 100) {
    PostArea.value = text.substring(0, 100);
  }
});

document.getElementById('post-btn').addEventListener('click', function() {
    const postAreaValue = document.getElementById('post-area').value;
  
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    const postUpper = document.createElement('div');
    postUpper.classList.add('post-upper');
  
    const userImage = document.createElement('img');
    // userImage.src = 'path/to/user/image';
    // userImage.alt = 'User Image';
  
    const postContent = document.createElement('p');
    postContent.textContent = postAreaValue;
  
    postUpper.appendChild(userImage);
    postUpper.appendChild(postContent);
  
    // Append the post upper element to the new post element
    newPost.appendChild(postUpper);

  
     const postLower = document.createElement('div');
       postLower.classList.add('post-lower');
    const likeBtn = document.createElement('button');
    const commentBtn = document.createElement('button');
  
    postLower.appendChild(likeBtn);
    postLower.appendChild(commentBtn);
  
    newPost.appendChild(postLower);
  
    document.querySelector('.post-box').appendChild(newPost);
  
    document.getElementById('post-area').value = '';
  });
  
  document.querySelectorAll('.like-cmnt-btns button').forEach(function(button) {
    button.addEventListener('click', function() {
      button.classList.toggle('liked');
      button.classList.toggle('commented');
    });
  });

  document.querySelectorAll('.like-cmnt-btns .heart').forEach(function(heartBtn) {
    heartBtn.addEventListener('click', function() {
      heartBtn.classList.toggle('liked');
      if (heartBtn.classList.contains('liked')) {
        heartBtn.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
      } else {
        heartBtn.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
      }
    });
  });
  
  