<?php

namespace App;

use MtHaml\Environment;
use MtHaml\Support\Php\Executor;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;

class Haml
{
    private $executor;

    private $viewDir;

    public function __construct(KernelInterface $kernel)
    {
        $haml           = new Environment('php');
        $this->executor = new Executor($haml, [
            'cache' => $kernel->getCacheDir() . '/haml',
        ]);
        $this->viewDir  = $kernel->getProjectDir() . '/view';
    }

    public function render(string $view, array $args): Response
    {
        return new Response($this->executor->render($this->viewDir . '/' . $view, $args));
    }
}