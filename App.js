
let count = 0;

const Value = document.getElementById('value');
const Btns = document.querySelectorAll('.btn');

Btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('dicrease')){
            count--;
        }else if (styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            Value.style.color="green";
        }
        Value.textContent = count;
    })
})