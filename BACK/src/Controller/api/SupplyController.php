<?php

namespace App\Controller\api;

use App\Repository\MeubleEcoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class SupplyController extends AbstractController
{
    #[Route('/api/{supply}')]
    public function index(MeubleEcoRepository $repository) //ici on traite toute la table meuble_eco
    {
        $supplies = $repository->findAll();
        //dd($supplies); //var_dump de $supplies
        return $this -> json($supplies, 200, [], [
            'groups' => ['supply.index']
        ]);
    }

    #[Route('/api/supply/product/{id}')]
    public function idOne(MeubleEcoRepository $repository, int $id) //ici on ne traite que l'information id
    {
        $furniture = $repository->findOneBy(['id' => $id]);
        //dd($furniture); //var_dump $furniture
        return $this -> json($furniture, 200, [], [
            'groups' => ['supply.idOne']
        ]);
    }

    #[Route('/api/supply/{category}')]
    public function category(MeubleEcoRepository $repository, string $category) //ici on ne traite que l'information category
    {
        $furniture = $repository->findBy(['category' => $category]);
        //dd($furniture); //var_dump $furniture
        return $this -> json($furniture, 200, [], [
            'groups' => ['supply.category']
        ]);
    }
}