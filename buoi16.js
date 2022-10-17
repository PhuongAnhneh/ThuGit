var arr = [
    {name:'lau nha', date:'10/4/2022', status:'todo'},
    {name:'quet nha', date:'12/4/2022', status:'doing'},
    {name:'don nha', date:'13/4/2022', status:'done'}
]
var html = ''
const HienThi = []
function render() {
    for (let i = 0; i < arr.length; i++) {
        html = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        document.querySelector(`.${arr[i].status}_list`).innerHTML += html
    }
}
render()