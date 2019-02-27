<?php

use App\Kernel;
//use Doctrine\Common\Annotations\AnnotationRegistry;
use Symfony\Component\HttpFoundation\Request;

$loader = require __DIR__ . '/../vendor/autoload.php';
// auto-load annotations
//AnnotationRegistry::registerLoader([$loader, 'loadClass']);

$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();

$kernel   = new Kernel('dev', true);
$request  = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);