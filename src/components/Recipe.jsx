import image from "/image-omelette.jpeg";
export default function Recipe() {
  return (
    <>
      <main>
        <div className="container">
          <div className="image">
            <img src={image} alt="" />
          </div>

          <h1 className="header">Simple Omelette Recipe</h1>
          <div>
            <p className="header-body">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="preparation">
            <h3>Preparation time</h3>

            <ul>
              <li>
                <span>Total: </span>Approximately 10 minutes
              </li>
              <li>
                <span>Preparation:</span> 5 minutes
              </li>
              <li>
                <span>Cooking: </span>5 minutes
              </li>
            </ul>
          </div>
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li> 2-3 large eggs </li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr />
          <div className="intructions">
            <h2>Instructions</h2>

            <ul>
              <li>
                <span>Beat the eggs:</span> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed.
              </li>
              <li>
                <span>Cook the omelette:</span> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional):</span> When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>

              <li>
                <span>Fold and serve:</span> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>

              <li>
                <span>Enjoy:</span> Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <div className="nutrition">
              <h2>Nutrition</h2>
              <p>
                The table below shows nutritional values per serving without the
                additional fillings
              </p>

              <table>
                <tr>
                  <td>Calories</td>
                  <td>
                    <span>277cal</span>
                  </td>
                </tr>

                <hr />
                <tr>
                  <td>Carbs</td>
                  <td>
                    <span>0g</span>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td>Protein</td>
                  <td>
                    <span>20cal</span>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td>Fat</td>
                  <td>
                    <span>22cal</span>
                  </td>
                </tr>
                <hr />
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
