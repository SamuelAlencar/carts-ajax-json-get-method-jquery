$(document).ready(function() {
    $(document).ready(function() {
        var showData = $('#show-data');

        $.getJSON('example.json', function(data) {
            console.log(data);

            var items = data.items.map(function(item) {
                return '<img src="foto_perfil.jpg" class="foto">' +
                    '<p>nome: ' + item.nome + '</p>' +
                    '<p>idade:' + item.idade + '</p>' +
                    '<p>Empresa: ' + item.Empresa + '</p>' +
                    '<p>E-mail: <a href="mailto:' + item.email + '">' + item.email + '</a>' + '</p>' +
                    '<p>Endereco: ' + item.endereco + ' </p>' +
                    '<p></br>celular: ' + item.celular + '</p>';
            });

            showData.empty();

            if (items.length) {
                var content = '<div id="cart-pessoas">' + items.join('</div><div id="cart-pessoas">') + '</div>';
                showData.append(content);
            }
        });

        showData.text('CARREGANDO...');
    });
});