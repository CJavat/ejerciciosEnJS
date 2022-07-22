for(let i=1; i<=500; i++) {
    if(i % 4 === 0) {
        document.write(`${i} (Múltiplo de 4)<br>`);
    }
    else if(i % 9 === 0) {
        document.write(`${i} (Múltiplo de 9)<br>`);
    }
    else {
        document.write(`${i} <br>`);
    }

    if(i % 5 === 0) {
        document.write("<hr>");
    }
}