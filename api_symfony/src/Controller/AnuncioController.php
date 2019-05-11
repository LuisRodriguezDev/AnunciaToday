<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use App\Entity\Anuncio;
use App\Form\AnuncioType;

/**
 * Anuncio controller.
 * @Route("/api", name="api_")
 */
class AnuncioController extends FOSRestController
{
    /**
     * Muestra todos los Anuncios.
     * @Rest\Get("/anuncios")
     * 
     * @return Response
     */
    public function getAnuncioAction()
    {
        $repository = $this->getDoctrine()->getRepository(Anuncio::class);
        $anuncios = $repository->findall();
        return $this->handleView($this->view($anuncios));
    }

    /**
     * Crear Anuncio.
     * @Rest\Post("/anuncios")
     * 
     * @return Response
     */
    public function postAnuncioAction(Request $request)
    {
        $anuncio = new Anuncio();
        $form = $this->CreateForm(AnuncioType::class, $anuncio);

        $data = json_decode($request->getContent(), true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($anuncio);
            $em->flush();
            return $this->handleView($this->view(['status' => 'ok'], Response::HTTP_CREATED));
        }

        return $this->handleView($this->view($form->getErrors()));
    }
}