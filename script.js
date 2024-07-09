const field = document.querySelector('#field')

const maruLists = [];
const batuLists = [];

for (let i = 1; i < 26; i++) {
    // マス目作成
    field.insertAdjacentHTML('beforeend', `
        <div class='areas' id=area${i}></div>
    `)
}

const areaLists = document.querySelectorAll('div div')
console.log(areaLists)

let count = 0
let winLists = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

for (let i = 0; i < areaLists.length; i++) {
    areaLists[i].addEventListener('click', () => {
        // すでにクリックした箇所を判定させない
        if (areaLists[i].textContent === '') {
            // count変数を増加
            count++;
            if (count % 2 === 0) {
                // 番地の表示を変更
                areaLists[i].textContent = "×";
                // 手番の表示を変更
                document.querySelector('#turn').textContent = '先手　〇'
                // 番地の見た目を変更
                areaLists[i].classList.add('batu')
                // 手番のリストに番地を追加
                batuLists.push(i)

                winLists = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
                // batuLists の中をループ
                for (let k = 0; k < batuLists.length; k++) {
                    let result = []
                    // winLists の中のリストをループ
                    for (let j = 0; j < winLists.length; j++) {

                        // batuLists の要素と一致したものをwinLists[][]から消したい
                        // winLists内j番目のリストをループ
                        // ↓の配列からの削除がうまくいかない
                        for (let l = 0; l < winLists[j].length; l++) {
                            result = winLists[j].filter(function (item) {
                                console.log(item)
                                return item != batuLists[k]
                            })
                        }
                    }
                }
                for (let j = 0; j < winLists.length; j++) {
                    if (winLists[j][0] === "") {
                        document.querySelector('#turn').textContent = '勝利！'
                    }
                }

            } else {
                areaLists[i].textContent = "〇"
                document.querySelector('#turn').textContent = '後手　×'
                areaLists[i].classList.add('maru')
                maruLists.push(i)

                const winLists = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
                for (let j = 0; j < winLists.length; j++) {
                    for (let k = 0; k < batuLists.length; k++) {
                        deleteIndex = winLists[j].findIndex(() => k === k);
                        winLists[j].slice(0, deleteIndex);
                    }
                }
                for (let j = 0; j < winLists.length; j++) {
                    if (winLists[j][0] === "") {
                        document.querySelector('#turn').textContent = '勝利！'
                    }
                }
            }
        }
    })
};