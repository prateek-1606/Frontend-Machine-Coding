const commentContainerElement = document.getElementById('comment-container');

const addInput = function(e){
    const allCommentElement = e.target.closest('.all-comments');
    const replyInput = document.createElement('div');
    replyInput.setAttribute('class','input-container');
    replyInput.innerHTML += `
    <input type='text' placeholder='add reply' />
    <button id='input-button' class='submit-btn' >Submit</button>
    `
    allCommentElement.appendChild(replyInput)
}

const addReply = function(e,text){
    const allCommentElement = e.target.closest('.all-comments');
    const replyContainerElement = document.createElement('div');
    replyContainerElement.setAttribute('class','all-comments');
    replyContainerElement.innerHTML += 
    `
        <div class="comment-card" >
            <div class="comment-text" >
                ${text}
            </div>
            <div class="comment-reply" >
                Add Reply
            </div>
        </div>
    `;
    allCommentElement.appendChild(replyContainerElement);
}

function addComment(e,text){
    const commentElement = document.createElement('div');
    commentElement.setAttribute('class','all-comments')
    commentElement.innerHTML += 
    `
    <div class="comment-card" >
        <div class="comment-text" >
            ${text}
        </div>
        <div class="comment-reply" >
            Add Reply
        </div>
    </div>
    `
    commentContainerElement.appendChild(commentElement)
}

commentContainerElement.addEventListener('click',(e) => {
    const replyClicked = e.target.classList.contains('comment-reply');
    const replySubmitClicked = e.target.classList.contains('submit-btn');
    const commentSubmitClicked = e.target.classList.contains('comment-submit-btn');

    if(replyClicked){
        addInput(e)
    }

    if(replySubmitClicked){
        const inputElement = document.querySelector('.input-container');
        addReply(e,inputElement.children[0].value)
        inputElement.remove();
    }

    if(commentSubmitClicked){
        const inputElement = document.querySelector('.comment-input-container');
        addComment(e,inputElement.children[0].value);
        inputElement.children[0].value = ''
    }
})
