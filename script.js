const field = document.querySelector('#field')
// const body = document.querySelector('body')
// console.log(body)

for (let i = 1; i < 26; i++) {
    field.insertAdjacentHTML('beforeend', `
        <div class='areas' id=area${i}></div>
    `)
    document.querySelector(`#area${i}`).addEventListener('click', () => {
        
    })
}

