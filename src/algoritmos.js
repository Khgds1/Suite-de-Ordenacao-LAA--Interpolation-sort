//Bagunça
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

//Código da Página Complexidade
function insertionCalc(numeroDeElementos, instruçõesPorSegundo) {
    return (2 * Math.pow(numeroDeElementos, 2)) / instruçõesPorSegundo
}
function intercalationCalc(numeroDeElementos, instruçõesPorSegundo) {
    return (numeroDeElementos * Math.log10(numeroDeElementos)) / instruçõesPorSegundo
}

//Código da Página Ordenação
function bubbleSort(arday) {
    let n = arday.length
    let trocar = true
    while (trocar) {
        console.log("runtime")
        trocar = false
        for (let i = 1; i < n; i++) {
            console.log(arday)
            if (arday[i] < arday[i - 1]) {
                trocar = true
                let temp = arday[i]
                arday[i] = arday[i - 1]
                arday[i - 1] = temp
            }
        }
        n--
    }
    return arday
}
function insertionSort(arday) {
    for (let i = 1; i < arday.length; i++) {
        let indiceAnterior = i - 1
        let valor = arday[i]
        let loopi = 0
        while (indiceAnterior >= 0 && arday[indiceAnterior] > valor) {
            arday[indiceAnterior + 1] = arday[indiceAnterior]
            indiceAnterior--
            loopi++
        }
        arday[indiceAnterior + 1] = valor
    }
    return arday
}

function countingSort(arday) {

    let maxmin = maxMin(arday)
    let max = maxmin.max
    let min = maxmin.min


    let contador = []

    for (let i = min; i <= max; i++) {
        contador[i] = 0
    }

    for (let i = 0; i < arday.length; i++) {
        contador[arday[i]]++
    }


    let reescritor = 0
    for (let i = min; i <= max; i++) {
        while (contador[i]-- > 0) {
            arday[reescritor++] = i
        }
    }
    return arday
}
//Busca
function linearSearch(arday, elemento) {
    for (let i = 0; i < arday.length; i++) {
        if (arday[i] == elemento) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arday, elemento) {
    let min = 0;
    let max = arday.length - 1;
    while (min <= max) {
        let chute = Math.floor((min + max) / 2);
        if (arday[chute] == elemento) {
            return chute;
        }
        else if (arday[chute] > elemento) {
            max = chute - 1;
        }
        else if (arday[chute] < elemento) {
            min = chute + 1;
        }
    }
    return -1;
}

//InterpolationSort
function interpolationSort(arday) {
    var divideSize = []; //array vazio
    var end = arday.length; //end 
    divideSize[0] = end;
    let count = 0
    while (divideSize.length > 0) {
        count++
        var size = divideSize.pop();
        var start = end - size;
        var min = arday[start];
        var max = arday[start];
        for (var i = start + 1; i < end; i++) {
            if (arday[i] < min) {
                min = arday[i];
            }
            else if (arday[i] > max) {
                max = arday[i];
            }
        }
        if (min == max) {
            end = end - size;
        } else {
            var p = 0;
            var bucket = [];
            for (var i = 0; i < size; i++) {
                bucket[i] = [];
            }
            for (var i = start; i < end; i++) {
                p = Math.floor(((arday[i] - min) / (max - min)) * (size - 1));
                bucket[p].push(arday[i]);
            }
            for (var i = 0; i < size; i++) {
                if (bucket[i].length > 0) {
                    for (var j = 0; j < bucket[i].length; j++) {
                        arday[start++] = bucket[i][j];
                    }
                    divideSize.push(bucket[i].length);
                }
            }
        }
    }
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

//Função da Página Ordenação
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

//Função da Página Busca
function runSearch() {
    let listaSearch = document.getElementById("listaSearch").value;
    let valorSearch = document.getElementById("valorSearch").value;
    listaSearch = arrumador(listaSearch);
    //linearSearch
    let t0= performance.now();
    let linearbuscado = linearSearch(listaSearch, valorSearch);
    let t1= performance.now();
    document.getElementById("linearSearch").innerText = "Quantidade localizada: " + linearbuscado + "    |   " + (t1 - t0) + " ms." 
}

//Função da Página Complexidade
function runCalc() {
    let nElementos = document.getElementById("nElementosCalc").value
    let instPerSecond = document.getElementById("instPerSecond").value
    document.getElementById("insertionCalc").innerText = "Resultado: " + insertionCalc(nElementos, instPerSecond)
    document.getElementById("intercalationCalc").innerText = "Resultado: " + intercalationCalc(nElementos, instPerSecond)
}
