<?php

include './db.php';

// Declare variable to avoid undefined value input errors
$email = $title = $ingredients = '';

$errors = [
    'email' => '',
    'title' => '',
    'ingredients' => ''
];

if (isset($_POST['submit'])) {

    // Check email
    if (empty($_POST['email'])) {
        $errors['email'] = 'An email is required.<br>';
    } else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'email must be a valid address';
        }
    }

    // Check title
    if (empty($_POST['title'])) {
        $errors['title'] = 'A title is required.<br>';
    } else {
        $title = $_POST['title'];
        if (!preg_match('/^[a-zA-Z\s]+$/', $title)) {
            $errors['title'] = 'Title must be letters and spaces only';
        }
        echo htmlspecialchars($_POST['title']);
    }

    // Check ingredients
    if (empty($_POST['ingredients'])) {
        $errors['ingredients'] = 'At least ine ingredient is required.<br>';
    } else {
        $ingredients = $_POST['ingredients'];
        if (!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/', $ingredients)) {
            $errors['ingredients'] = 'Ingredients must be a comma separated list';
        }
        echo htmlspecialchars($_POST['ingredients']);
    };

    // Check there are no errors
    if(array_filter($errors)) {
        echo 'errors in the form';
    } else {
        //echo 'Form is valid';
        header('Location: index.php');
    }
};

?>

<!DOCTYPE html>
<html lang="en">

<?php include 'templates/header.php'; ?>

<section class="container grey-text">
    <h4 class="center">Add a pizza</h4>
    <form class="white" action="add.php" method="POST">
        <label for="email">Your email:</label>
        <input type="text" name="email" id="email" value="<?= htmlspecialchars($email) ?>">
        <div class="red-text"><?= $errors['email'] ?></div>

        <label for="title">Pizza title:</label>
        <input type="text" name="title" id="title" value="<?= htmlspecialchars($title) ?>">
        <div class="red-text"><?= $errors['title'] ?></div>

        <label for="ingredients">Ingredients (comma separated):</label>
        <input type="text" name="ingredients" id="ingredients" value="<?= htmlspecialchars($ingredients) ?>">
        <div class="red-text"><?= $errors['ingredients'] ?></div>

        <div class="center">
            <button class="btn brand z-depth-0" type="submit" name="submit">Add pizza</button>
        </div>
    </form>
</section>

</html> 