const mappings = window.Stores[$parameters.StoreName].get();

if (Object.keys(mappings).length === 0) {
    $parameters.Mappings = JSON.stringify([]);
} else {
    $parameters.Mappings = JSON.stringify([mappings]);
}
