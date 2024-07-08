<?php

namespace App\Entity; //Entité correspondant à la table meuble_eco de la BDD

use App\Repository\MeubleEcoRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;
//Fichier de Gestion de la BDD -- fichier de relation entre Symfony et le Gestionnaire BDD (héberger sur votre xAMP)
//Peut être modifié avec la ligne de commande "php bin/console make:entity MeubleEco"
#[ORM\Entity(repositoryClass: MeubleEcoRepository::class)]
class MeubleEco
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['supply.index','supply.idOne','supply.category'])] //GROUPS : nécessaire pour ajouter cette valeur au json
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])] //2 valeurs dans GROUPS pour les #Route "index" et "show"
    private ?string $name = null;

    #[ORM\Column(length: 100)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $category = null;

    #[ORM\Column(length: 100)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $material = null;

    #[ORM\Column(length: 100)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $color = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['supply.index', 'supply.idOne', 'supply.category'])]
    private ?string $width = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $height = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $depth = null;

    #[ORM\Column(type: Types::TEXT, length: 1000)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?float $price = null;

    #[ORM\Column(length: 255)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $picturl = null;

    #[ORM\Column(length: 100)]
    #[Groups(['supply.index', 'supply.idOne','supply.category'])]
    private ?string $status = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getMaterial(): ?string
    {
        return $this->material;
    }

    public function setMaterial(string $material): static
    {
        $this->material = $material;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getWidth(): ?string
    {
        return $this->width;
    }

    public function setWidth(string $width): static
    {
        $this->width = $width;

        return $this;
    }

    public function getHeight(): ?string
    {
        return $this->height;
    }

    public function setHeight(string $height): static
    {
        $this->height = $height;

        return $this;
    }

    public function getDepth(): ?string
    {
        return $this->depth;
    }

    public function setDepth(string $depth): static
    {
        $this->depth = $depth;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getPictures()
    {
        return $this->picturl;
    }

    public function setPictures($picturl): static
    {
        $this->picturl = $picturl;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getPicturl(): ?string
    {
        return $this->picturl;
    }

    public function setPicturl(string $picturl): static
    {
        $this->picturl = $picturl;

        return $this;
    }
}
