/* const formEl = {
    inputName: document.querySelector('#inp1'),
    inputText: document.querySelector('#inp2'),
    button: document.querySelector('#btn'),
    block: document.querySelector('#block2')
}

formEl.button.addEventListener('click', () => {
    const userName = formEl.inputName.value
    const text = formEl.inputText.value
    formEl.block.innerHTML += `
    <div class="forcent">
        <div class="forcent_block">
            <p class="forcent_block_username">User: ${userName}</p>
            <p class="forcent_block_text">Coment: ${text}</p>
        </div>
    </div>
    `
}) */

document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.querySelector('.postsContainer');
    const formEl = {
        name: document.querySelector('#form_name'),
        text: document.querySelector('#form_text'),
        date: document.querySelector('#form_date'),
        btn: document.querySelector('#form_btn')
    };

    let posts = [
        {
            name: "Alex",
            text: "Some text"
        }
    ];

    const renderPosts = () => {
        postsContainer.innerHTML = '';
        posts.forEach(postItem => {
            postsContainer.innerHTML += `
            <div class="postItem">
                <p>${postItem.name}</p>
                <p>${postItem.date}</p>
                <p>${postItem.text}</p>
            </div>
            `;
        });
    };

    if (formEl.btn) {
        formEl.btn.addEventListener('click', () => {
            posts = [
                ...posts,
                {
                    name: formEl.name.value,
                    date: formEl.date.value,
                    text: formEl.text.value
                }
            ];
            formEl.name.value = '';
            formEl.text.value = '';
            renderPosts();
        });
    }

    renderPosts();
});
