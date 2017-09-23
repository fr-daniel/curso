/*
    Lista: [] corresponde a UM dos caracteres que estiverem dentro
    Grupo ou captura: () agrupamento e captura de partes da expressão
    Caracteres alfanuméricos: \w [a-zA-Z0-9] e _
    Digitos: \d [0-9]
    Espaço: \s
    OU: |
    Quebra de linha: \n
    Tab: \t
    Tudo menos o \n: .

    Negação
    [^abc] : o match vai ser feito com todos os itens menos os da lista
    \W : negação dos alfanuméricos, faz o march com todos os caracteres menos os alfanuméricos
    \D : só pega não digitos
    \S : qualquer caractere que não seja espaço em branco

    Repetidores
    Intervalo: {m, n} item anterior ao menos 'm' vezes e no máximo 'n' vezes
    Intervalo aberto: {m, } no mínimo uma vez, máximo não definido
    Exatamente n:   {n} item anterior exatamente n vezes
    Opcional: ? zero ou uma ocorrência do item anterior
    Uma ou mais: + uma ou mais ocorrências do item anterior
    Zero ou mais: * zero ou mais ocorrências do item anterior
    



*/