<?php

use App\Kernel;
use Symfony\Component\HttpFoundation\Request;

if (php_sapi_name() === 'cli-server') {
    if ($_SERVER['SCRIPT_FILENAME'] !== __FILE__ &&
        (is_file($_SERVER['SCRIPT_FILENAME']) || is_dir($_SERVER['SCRIPT_FILENAME']))
    ) {
        return false;
    }
}

$loader = require __DIR__ . '/../vendor/autoload.php';

$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();

$kernel   = new Kernel('dev', true);
$request  = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);