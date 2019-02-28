<?php

namespace App\Controller;

use App\Haml;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MicroController extends AbstractController
{
    private $haml;

    public function __construct(Haml $haml)
    {
        $this->haml = $haml;
    }

    public function randomNumber($limit)
    {
        $number = random_int(0, $limit);

        return $this->haml->render('random.html.haml', [
            'number' => $number,
        ]);
    }
}