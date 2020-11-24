<style media="screen">
    body {
        background: purple;
        color: white;
    }

    .user, .action {

        font-size: 25px;
    }

    p {

        font-size: 18px;
        font-weight: bold;
    }

</style>

<body>
    
    <h1>E stato cancellato questo post!</h1>
    
    <span class="user">{{ $user -> name }}</span>: <span class="action">{{ $action }}</span> <br>
    <p>{{ $post -> name }}</p><br>
    {{ $post -> description }}

</body>