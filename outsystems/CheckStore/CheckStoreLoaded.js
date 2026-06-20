function checkStore() {
    if (typeof window.Stores !== "undefined" && typeof window.Stores[$parameters.StoreName] !== "undefined") {
        $parameters.IsLoaded = true
    }
    else {
        $parameters.Retries = $parameters.Retries - 1
        if ($parameters.Retries <= 0) {
            $parameters.IsLoaded = false;
        } else {
            setInterval(checkStore, $parameters.IntervalRetrySeconds);
        }
    }
}
checkStore();
