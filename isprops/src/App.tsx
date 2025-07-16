import './App.css'
import ProductList from './components/ProductList/ProductList.tsx'

function App() {
  return (
    <>
      <div className="container">
        <ProductList 
          title="Pearl Milk Tea" 
          imgURL="https://tse1.mm.bing.net/th/id/OIP.mKIjldaEBOlze2PTGQ9pjQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          description="This is some description"
          rating={10.5}
          price={150}
        />

        <ProductList 
          title="Caramel Milk Tea" 
          imgURL="https://entirelyelizabeth.com/wp-content/uploads/2022/11/IMG_4019-540x720.jpg"
          description="This is some description"
          rating={7.5}
          price={180}
        />

        <ProductList 
          title="Macha Red Bean Milk Tea" 
          imgURL="https://845552673155618687.weebly.com/uploads/1/3/1/2/131248217/s478381384635632615_p31_i1_w1920.jpeg"
          description="This is some description"
          rating={8.7}
          price={180}
        />
        <ProductList 
          title="Peach Bubble Milk Tea" 
          imgURL="https://frommybowl.com/wp-content/uploads/2022/08/Peach_Bubble_Tea_Vegan_DairyFree_FromMyBowl-10.jpg"
          description="This is some description"
          rating={10.5}
          price={250}
          />
      </div>
    </>
  );
}

export default App;
