<?php

namespace App\Controller;

use App\Haml;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MicroController extends AbstractController
{

    public function randomNumber($limit, Haml $haml)
    {
        $number = random_int(0, $limit);
        return $haml->render('random.html.haml', [
            'number' => $number,
        ]);
    }
}