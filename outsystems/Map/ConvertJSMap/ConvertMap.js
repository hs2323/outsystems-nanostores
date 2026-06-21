const map = JSON.parse($parameters.Mappings).map(function(item) {
    return { key: item.key, value: item.value };
}).reduce(function(newMap, currentItem) {
    newMap[currentItem.key] = currentItem.value;
    return newMap;
}, {});

if (map === {}) {
    $parameters.MappingsString = ""
} else {
    $parameters.MappingsString = JSON.stringify(map);
}
