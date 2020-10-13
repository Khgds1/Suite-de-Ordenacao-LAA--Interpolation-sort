//Arrumação
Array.prototype.clean = function (deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};
function arrumador(value) {
    value = value.replace(/[^\d.,-]*|\.{2,}|\,{2,}/gm, "")
    value = value.split(",")
    value = value.clean("")
    value = value.map(Number)
    value = value.filter(function (value) {
        return !Number.isNaN(value);
    });
    return value
}
function maxMin(arr) {
    let min
    let max
    arr.forEach(element => {
        if (min == undefined && max == undefined) {
            min = element
            max = element
        } else {
            if (element < min) {
                min = element
            } else if (element > max) {
                max = element
            }
        }
    });
    let result = { min: min, max: max }
    return result
}
//Calculadora de complexidade
function insertionCalc(numeroDeElementos, instruçõesPorSegundo) {
    return (2 * Math.pow(numeroDeElementos, 2)) / instruçõesPorSegundo
}
function intercalationCalc(numeroDeElementos, instruçõesPorSegundo) {
    return (numeroDeElementos * Math.log10(numeroDeElementos)) / instruçõesPorSegundo
}
//Sort
function bubbleSort(arraio) {
    let n = arraio.length
    let trocar = true
    while (trocar) {
        console.log("runtime")
        trocar = false
        for (let i = 1; i < n; i++) {
            console.log(arraio)
            if (arraio[i] < arraio[i - 1]) {
                trocar = true
                let temp = arraio[i]
                arraio[i] = arraio[i - 1]
                arraio[i - 1] = temp
            }
        }
        n--
    }
    return arraio
}
function insertionSort(arraio) {
    //rodar um for loop entre todos os elementos do array
    for (let i = 1; i < arraio.length; i++) {
        console.log(`\n\n\narraio no indice ${i}`)
        console.log(arraio)
        //armazenar o indice do item anterior
        let indiceAnterior = i - 1
        //armazenar o valor no indice atual do loop
        let valor = arraio[i]
        //enquanto o indice do valor anterior for valido (-1 não é um indice valido) e o valor do elemento nesse indice for maior que o elemento avaliado no loop (o do "i")...
        let loopi = 0
        console.log(`debug: i=${i} | indiceAnterior=${indiceAnterior} | valor=${valor}`)
        while (indiceAnterior >= 0 && arraio[indiceAnterior] > valor) {
            //joga o elemento do indice anterior 1 indice pra cima, substituindo o valor atual (ta tudo bem, ele ta seguro na variavel valor)
            arraio[indiceAnterior + 1] = arraio[indiceAnterior]
            //altera o indice anterior pra o "anterior ao anterior", verificando o nosso valor novamente com o valor desse outro indice, e caso esse novo valor ainda seja superior ao nosso valor armazenado, repete
            indiceAnterior--
            console.log(`\narraio dentro do loop na posição ${i} loopado ${loopi + 1} vez`)
            loopi++
            console.log(arraio)
            console.log(`debug: i=${i} | indiceAnterior=${indiceAnterior} | valor=${valor}`)
        }
        console.log(`\narraio pos loop na posição ${i}`)
        console.log(arraio)
        console.log(`debug: i=${i} | indiceAnterior=${indiceAnterior} | valor=${valor}`)
        //após o loop, o indice anterior é indice do elemento que é menor do que o nosso valor armazenado, portanto colocamos o nosso valor no indice superior ao do indice anterior 
        //(como ele vai duplicando os valores no decorrer da verificação, ele só arruma o lugar certo onde tem que ficar)
        arraio[indiceAnterior + 1] = valor
        console.log(`\narraio final da posição ${i}`)
        console.log(arraio)
        console.log(`debug: i=${i} | indiceAnterior=${indiceAnterior} | valor=${valor}`)
    }
    //por fim retorna o resultado com o array arrumadinho
    return arraio
}

function countingSort(arraio) {

    let maxmin = maxMin(arraio)
    let max = maxmin.max
    let min = maxmin.min


    let contador = []

    for (let i = min; i <= max; i++) {
        contador[i] = 0
    }

    for (let i = 0; i < arraio.length; i++) {
        contador[arraio[i]]++
    }

    //console.log(contador)

    let reescritor = 0
    for (let i = min; i <= max; i++) {
        while (contador[i]-- > 0) {
            arraio[reescritor++] = i
        }
    }
    return arraio
}
//Busca
function linearSearch(arraio, elemento) {
    console.log(arraio)
    //passar por todos os elementos do array usando um for loop pelo tamanho do array
    for (let i = 0; i < arraio.length; i++) {
        //se o elemento no indice do nosso "i" for encontrado..
        console.log("ELEMENTO AVALIADO: "+arraio[i])
        console.log("ALVO: "+elemento)
        if (arraio[i] == elemento) {
            //usamos o return com o "i"(o indice do elemento), que ja para o loop
            return i;
        }
    }
    //caso o elemento não tenha sido encontrado, retornamos -1
    return -1;
}

function binarySearch(arraio, elemento) {
    //definimos uma variavel pra marcar nosso indice minimo
    let min = 0;
    //e uma pra marcar nosso indice maximo
    let max = arraio.length - 1;
    //enquanto o indice minimo foi menor ou igual ao maximo, sinal de que temos chance ainda
    while (min <= max) {
        //pegamos o valor no meio deles, mas se der virgula finge que não viu
        let chute = Math.floor((min + max) / 2);
        //se o item do nosso array que ta no indice do nosso chute for o elemento procurado..
        if (arraio[chute] == elemento) {
            //BINGO, retornamos o indice onde ele se encontra
            return chute;
        }
        //mas se não for, e o valor nesse indice for maior do que o nosso elemento, então...
        else if (arraio[chute] > elemento) {
            //o nosso alvo ta mais pra baixo, o nosso maximo tem que ser antes do nosso chute
            max = chute - 1;
        }
        //mas caso o valor nesse indice for menor do que o nosso elemento...
        //(dava pra ser um else, coloquei um else if por razões academicas)
        else if (arraio[chute] < elemento) {
            //então nosso alvo ta mais pra cima, o nosso minimo tem que ser depois do nosso chute
            min = chute + 1;
        }
    }
    //mas se o minimo passar do maximo, sinal de que algo de errado não está certo...
    //o nosso elemento NÃO EXISTE NO ARRAY :(
    //então retornamos -1
    return -1;
}

//InterpolationSort
function interpolationSort(arday) {
    var divideSize = []; //array vazio
    var end = arday.length; //end 
    divideSize[0] = end;
    console.log("tamanho do arday: " + end)
    let count = 0
    while (divideSize.length > 0) {
        count++
        console.log("\nSTART ITERAÇÃO " + count)
        console.log("\n    INICIO")
        console.log("    divideSize= " + JSON.stringify(divideSize))
        var size = divideSize.pop();
        console.log("    size= " + size)
        var start = end - size;
        console.log("    start= " + start)
        var min = arday[start];
        var max = arday[start];
        console.log("    max|min= " + max)
        for (var i = start + 1; i < end; i++) {
            if (arday[i] < min) {
                min = arday[i];
            }
            else if (arday[i] > max) {
                max = arday[i];
            }
        }
        console.log("\n    POS FOR 1")
        console.log("    min= " + min)
        console.log("    max= " + max)
        if (min == max) {
            end = end - size;
            console.log("\n    ENTROU NO IF")
            console.log("    end= " + end)
        } else {
            console.log("\n    CAIU NO ELSE")
            var p = 0;
            var bucket = [];
            for (var i = 0; i < size; i++) {
                bucket[i] = [];
            }
            console.log("\n    FOR DO ELSE 1")
            console.log("    opr2= " + (max - min))
            console.log("    opr3= " + (size - 1))
            for (var i = start; i < end; i++) {
                console.log(`        arday[${i}]= ` + arday[i])
                console.log("        opr1= " + (arday[i] - min))
                p = Math.floor(((arday[i] - min) / (max - min)) * (size - 1));
                console.log("        oprF= ((" + arday[i] + " - " + min + ") / (" + max + " - " + min + ")) * (" + size + " - 1))")
                console.log("        p=" + p)
                bucket[p].push(arday[i]);
            }
            console.log("    bucket= " + JSON.stringify(bucket))
            console.log("\n    FOR DO ELSE 2")
            for (var i = 0; i < size; i++) {
                if (bucket[i].length > 0) {
                    for (var j = 0; j < bucket[i].length; j++) {
                        console.log("\n        start= " + start)
                        console.log(`        bucket[${i}][${j}]= ` + bucket[i][j])
                        arday[start++] = bucket[i][j];
                    }
                    divideSize.push(bucket[i].length);
                }
            }
        }
        console.log("\n    FINAL")
        console.log("    divideSize= " + JSON.stringify(divideSize))
        console.log("\nEND ITERAÇÃO " + count)
        console.log("\narday atual= " + JSON.stringify(arday))
    }
    console.log("\nNumero de interações final: " + count)
    console.log("\narday= " + JSON.stringify(arday))
    return arday
}

//SelectionSort
function selectionSort(arday) {
    let n = arday.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arday[j] < arday[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arday[i];
            arday[i] = arday[min];
            arday[min] = tmp;
        }
    }
    return arday;
}

//Executores
function runCalc() {
    let nElementos = document.getElementById("nElementosCalc").value
    let instPerSecond = document.getElementById("instPerSecond").value
    document.getElementById("insertionCalc").innerText = "Resultado: " + insertionCalc(nElementos, instPerSecond)
    document.getElementById("intercalationCalc").innerText = "Resultado: " + intercalationCalc(nElementos, instPerSecond)
}
function runSort() {
    let listaSort = document.getElementById("listaSort").value;
    listaSort = arrumador(listaSort)
    //insertionSort
    let t0 = performance.now()
    let insertionSortado = insertionSort(listaSort)
    let t1 = performance.now()
    document.getElementById("insertionSort").innerText = "Ordenado: " + insertionSortado + "    |   " + (t1 - t0) + " ms."
    //bubbleSort
    t0 = performance.now()
    let bubbleSortado = bubbleSort(listaSort)
    t1 = performance.now()
    document.getElementById("bubbleSort").innerText = "Ordenado: " + bubbleSortado + "    |   " + (t1 - t0) + " ms."
    //SelectionSort
    t0 = performance.now()
    let selectionSortado = selectionSort(listaSort)
    t1 = performance.now()
    document.getElementById("selectionSort").innerText = "Ordenado: " + selectionSortado + "    |   " + (t1 - t0) + " ms."
    //interpolationSort
    t0 = performance.now()
    let interpolationSortado = interpolationSort(listaSort)
    t1 = performance.now()
    document.getElementById("interpolationSort").innerText = "Ordenado: " + interpolationSortado + "    |   " + (t1 - t0) + " ms."

}
function runSearch() {
    let listaSearch = document.getElementById("listaSearch").value;
    let valorSearch = document.getElementById("valorSearch").value;
    listaSearch = arrumador(listaSearch);
    //linearSearch
    let t0= performance.now();
    let linearbuscado = linearSearch(listaSearch, valorSearch);
    let t1= performance.now();
    document.getElementById("linearSearch").innerText = "LinearSearch: " + linearbuscado + "    |   " + (t1 - t0) + " ms."
    //binarySearchInsertion
    t0= performance.now();
    let insertionSortado = insertionSort(listaSearch);
    let binarybuscado = binarySearch(insertionSortado, valorSearch);
    t1= performance.now();
    document.getElementById("binarySearchInsertion").innerText = "BinarySearch-Insertion: " + binarybuscado + "    |   " + (t1 - t0) + " ms."
    //binarySearchBubble
    t0= performance.now();
    let bubbleSortado = bubbleSort(listaSearch)
    binarybuscado = binarySearch(bubbleSortado, valorSearch);
    t1= performance.now();
    document.getElementById("binarySearchBubble").innerText = "BinarySearch-Bubble: " + binarybuscado + "    |   " + (t1 - t0) + " ms."
    //binarySearchCounting
    t0= performance.now();
    let countingSortado = countingSort(listaSearch)  
    binarybuscado = binarySearch(countingSortado, valorSearch);
    t1= performance.now();
    document.getElementById("binarySearchCounting").innerText = "BinarySearch-Counting: " + binarybuscado + "    |   " + (t1 - t0) + " ms." 
}