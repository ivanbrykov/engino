<?php

namespace App\Controller;

use App\Haml;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MicroController extends AbstractController
{

    public function randomNumber($limit, Haml $haml): Response
    {
        $number = random_int(0, $limit);
        return $haml->render('random.html.haml', [
            'number' => $number,
        ]);
    }

    public function admin(string $uri, Haml $haml): Response
    {
        return $haml->render('admin.html.haml', [
            'uri' => $uri,
        ]);
    }
}