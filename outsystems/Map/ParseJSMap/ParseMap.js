if ($parameters.MappingString === '"{}"' ||$parameters.MappingString === '"[{}]"' ) {
    $parameters.Mappings = JSON.stringify([]);
} else {
    const map = JSON.parse($parameters.MappingString);
    $parameters.Mappings = JSON.stringify(Object.entries(map).map(([key, value]) => ({
        key: key,
        value: value
    })));
}
