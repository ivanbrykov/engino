<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//use Symfony\Component\Routing\Annotation\Route;

class MicroController extends AbstractController
{
    /**
     * @Route("/random/{limit}")
     */
    public function randomNumber($limit)
    {
        $number = random_int(0, $limit);

        return $this->render('micro/random.html.twig', [
            'number' => $number,
        ]);
    }
}