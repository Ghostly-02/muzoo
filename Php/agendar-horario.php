<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Conectar ao banco de dados (ajuste os parâmetros conforme necessário)
    $conn = new mysqli("localhost", "usuario", "senha", "banco_de_dados");

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Preparar a declaração SQL para inserção
    $sql = "INSERT INTO agendamentos (nome, email, data_visita, hora_visita) VALUES ('$name', '$email', '$date', '$time')";

    if ($conn->query($sql) === TRUE) {
        echo "Agendamento realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fechar a conexão
    $conn->close();
}
?>
