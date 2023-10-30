const formEl = {
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
})