var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
$parameters.Id = '';
for (var i = 0; i < 10; i++) {
    $parameters.Id += characters.charAt(Math.floor(Math.random() * characters.length));
}
