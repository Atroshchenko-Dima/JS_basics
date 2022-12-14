const roads = [
    "Дом Алисы-Дом Боба",
    "Дом Алисы-Склад",
    "Дом Алисы-Почта",
    "Дом Боба-Ратуша",
    "Дом Дарьи-Дом Эрни",
    "Дом Дарьи-Ратуша",
    "Дом Эрни-Дом Греты",
    "Дом Греты-Ферма",
    "Дом Греты-Магазин",
    'Рынок-Ферма',
    'Рынок-Почта',
    'Рынок-Магазин',
    'Рынок-Ратуша',
    'Магазин-Ратуша'
];


/*С массивом строк не очень легко работать. Что нас интересует, так это пункты назначения, до которых мы
 можем добраться из данного места. Давайте преобразуем список дорог в структуру данных, которая для каждого
  места сообщает нам, куда можно добраться оттуда.*/

/*Учитывая массив ребер, buildGraph создает объект словаря, который для каждого узла хранит массив связанных
узлов.Он использует этот split метод для перехода от строк дорог, которые имеют форму "Start-End",
к двухэлементным массивам, содержащим начало и конец в виде отдельных строк.*/

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);