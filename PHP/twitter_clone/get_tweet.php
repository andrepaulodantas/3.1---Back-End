<?php

session_start(); //para executar variáveis de sessão

//nível de controle
	if(!isset($_SESSION['usuario'])){
		header('Location: index.php?erro=1');
	}

    require_once('db.class.php');//classe de comunicação com o BD
    $id_usuario = $_SESSION['id_usuario'];//recuperar o usuario

    $objDb = new db();
    $link = $objDb->conecta_mysql();

    $sql = " SELECT DATE_FORMAT(t.data_inclusao, '%d %b %Y %T') AS data_inclusao_formatada, t.tweet, u.usuario ";
	$sql.= " FROM tweet AS t JOIN usuarios AS u ON (t.id_usuario = u.id) ";
	$sql.= " WHERE id_usuario = $id_usuario ";
	$sql.= " OR id_usuario IN (select seguindo_id_usuario from usuarios_seguidores where id_usuario = $id_usuario) ";
	$sql.= " ORDER BY data_inclusao DESC ";
 //junção entre as tabelas e correlacionando t.id_usuario = u.id
 //o ponto(.) está concatenando

    //echo $sql;

    $resultado_id = mysqli_query($link, $sql);

    if($resultado_id){

        while($registro = mysqli_fetch_array($resultado_id, MYSQLI_ASSOC)){//trás apenas sqls associativos
            //var_dump($resultado_id);
            //echo '<br /><br />';
            echo '<a href="#" class="list-group-item>';
                echo '<h4 class="list-group-item-heading">'.$registro['usuario'].' <small> - '.$registro['data_inclusao_formatada'].'</small></h4>';
                echo '<p class="list-group-item-text">' .$registro['tweet']. '</p>';
            echo '</a>';
        }

    }else{
        echo 'Erro na consulta de tweets no banco de dados!';
    }

?>