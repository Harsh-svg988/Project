
let postbutton = document.querySelector("#post-button");
let board = document.querySelector(".right-container");
let text = document.querySelector("#text-area");
let wordcount = document.querySelector("#word-count");

text.addEventListener("input", function() {
    let count = text.value.length;
    wordcount.innerHTML = count + "/100";
});

postbutton.addEventListener("click", function(){
    if (text.value.length > 0){
    let post = document.createElement("div");
    post.id = "created-post";
    post.innerHTML = text.value;
    let count = 0;
    wordcount.innerHTML = 0 + "/100";
    text.value = "";
    let react = document.createElement("div");
    react.id = "react";
    let like = document.createElement("img");
    like.id = "like";
    like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
    let del = document.createElement("img");
    del.id = "del";
    del.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643";
    let comment = document.createElement("img");
    comment.id = "comment";
    comment.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619";
    react.appendChild(like);
    react.appendChild(del);
    react.appendChild(comment);
    post.appendChild(react);
    board.appendChild(post);
    
    let likewatcher = false;
    like.addEventListener("click", function(){
        if(likewatcher==false){
            like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
            likewatcher  = true;
        }
        else{
            like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
            likewatcher = false;
        }
    });

    del.addEventListener("click", function(){
        var result = confirm("Want to delete?");
        if (result) {
            post.remove();
        }
    });

    comment.addEventListener("click", function(){
        let commentbox = document.createElement("div");
        let textbox = document.createElement("textarea");
        textbox.id = "text-box";
        textbox.placeholder = "Write a comment...";
        let c_btn = document.createElement("button");
        c_btn.id = "c-btn";
        c_btn.innerText = "Comment";
        commentbox.appendChild(textbox);
        board.insertBefore(commentbox, post.nextSibling);


        c_btn.addEventListener("click",function(){
            let realcmt = document.createElement("div");
            realcmt.id = "real-cmt";
            realcmt.innerHTML = textbox.value;
            console.log(commentbox.innerHTML);
            commentbox.remove();
            board.appendChild(realcmt);
        });
    });
}
else{
    alert("Please write something before Posting");
}
});






 
  
  