<?php
$entreprises = $_POST['entreprise'];
$villes = $_POST['ville'];
$pays = $_POST['pays'];
$sad = $_POST['sad'];
$motCle = $_POST['motCle'];

$nbMotsParLigne = 4;

$textes = [
    "Stage effectué chez",
    "à",
    "en",
    ". Nombre de stagiaires :",
];

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <title>Fichier PHP | Tests Cypress</title>

    <link rel="stylesheet" href="../css/portailStages.css" />
</head>

<body>
    <h1>Résultats de la recherche | Tests Cypress | Yoni SELHAOUI 3.1</h1>
    <div>
        <h2>Recherche par entreprise :</h2>

        <?php
        $compteur = 0;
        foreach ($entreprises as $entreprise) :
            echo $textes[$compteur] . " " . $entreprise . " ";
            $compteur++;
            if ($compteur % $nbMotsParLigne === 0) {
                echo "<br/>";
                $compteur = 0;
            }
        endforeach;
        ?>

        <h2>Recherche par ville :</h2>
        <?php
        $compteur = 0;
        foreach ($villes as $ville) :
            echo $textes[$compteur] . " " . $ville . " ";
            $compteur++;
            if ($compteur % $nbMotsParLigne === 0) {
                echo "<br/>";
                $compteur = 0;
            }
        endforeach;
        ?>

        <h2>Recherche par pays :</h2>
        <?php
        $compteur = 0;
        foreach ($pays as $pay) :
            echo $textes[$compteur] . " " . $pay . " ";
            $compteur++;
            if ($compteur % $nbMotsParLigne === 0) {
                echo "<br/>";
                $compteur = 0;
            }
        endforeach;
        ?>
        <h2>Recherche par Section, Année, Département :</h2>
        <?php
        $compteur = 0;
        foreach ($sad as $section) :
            echo $textes[$compteur] . " " . $section . " ";
            $compteur++;
            if ($compteur % $nbMotsParLigne === 0) {
                echo "<br/>";
                $compteur = 0;
            }
        endforeach;
        ?>

        <h2>Recherche par mot-clé :</h2>
        <?php
        $compteur = 0;
        foreach ($motCle as $motCles) :
            echo $textes[$compteur] . " " . $motCles . " ";
            $compteur++;
            if ($compteur % $nbMotsParLigne === 0) {
                echo "<br/>";
                $compteur = 0;
            }
        endforeach;
        ?>

    </div>
</body>

</html>