<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AnuncioController
{
    /**
     * @Route("/anuncios")
     */
    public function anunciosAction()
    {
        return new JsonResponse([
            [
                'titulo' => "Buscamos Programador",
                'contenido' => "Importante Banco Argentino busca Programador Java para importantes aplicaciones"
            ]
        ]);
    }
}