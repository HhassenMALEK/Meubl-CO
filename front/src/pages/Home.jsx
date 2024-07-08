// import la liste des produit du fichier ProductList.js
import ProductList from './ProductList';


const Home = () => {

  return (
    
    <div>
      <h2>Bienvenue sur MEUBLECO : la seconde main qu'il vous faut <span style={{fontSize:'14px'}}>(peut-être...)</span></h2>
      <ProductList />  {/* affichage de toutes la liste produits  */}   
    </div>

  );

};

export default Home;
