<?php

require_once './controller.php';

?>

<!DOCTYPE html>
<html lang="en">

    <?php include 'templates/header.php'; ?>

    <h2>User's ideal pizzas</h2>

    <div class="container">
        <div class="row">
            <?php foreach ($pizzas as $pizza) { ?>
                <div class="card z-depth-0">
                    <div class="card-content center">
                        <h3><?= htmlspecialchars($pizza['title']); ?></h3>
                        <ul>
                        <?php foreach ($ingredients as $ingredient) { ?>
                            <li><?= $ingredient ?></li>
                        <?php } ?>
                        </ul>
                        <div class="card-action right-align">
                            <a href="#" class="brand-text">More info</a>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>

    <?php include 'templates/footer.php'; ?>

</html>