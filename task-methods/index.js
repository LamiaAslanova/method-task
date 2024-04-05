let eded = parseInt(prompt("Ədədi daxil edin:"));
let faktorial = 1;

if (eded < 0) {
    alert(`Mənfi ədədin faktorialı hesablanmır`)
}
else if (eded == 0) {
    alert(`Ədədin faktorialı: 1`)
}
else {
    for (let i = 1; i <= eded; i++) {
        faktorial *= i
    }
    alert(`Ədədin faktorialı: ${faktorial}`)
}