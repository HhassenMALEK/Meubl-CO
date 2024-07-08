<?php
//ici est une méthode qui permet de récupérer les éléments dans la BDD
namespace App\Repository;

use App\Entity\MeubleEco;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
//Constructeur de la table meuble_eco appelé dans le controller (MeubleEcoRepository $repository)
/**
 * @extends ServiceEntityRepository<MeubleEco>
 */
class MeubleEcoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MeubleEco::class);
    }

    //    /**
    //     * @return MeubleEco[] Returns an array of MeubleEco objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?MeubleEco
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
