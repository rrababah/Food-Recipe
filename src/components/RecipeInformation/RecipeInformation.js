import {Card} from "../../containers/Card/Card";
import {Markup} from 'interweave';
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecipeInformation = () => {

    const recipeInformation = useSelector(state => state.recipeInformationSlice.recipeInformation),
         isLoading = useSelector(state => state.spinner.isLoading),
        recipeSummary = recipeInformation.summary;

    if (isLoading) {
        return (
            <section>
                <p>Is Loading ..</p>
            </section>
        )
    }

    return <Card className="flexbox flexbox-col">
        {!isLoading &&  <figure>
            <LazyLoadImage className="responsive-img" id={recipeInformation.id} src={recipeInformation.image}
                 alt={recipeInformation.title}/>
            <figcaption className="spacing-top10">
                <h3>{recipeInformation.title}</h3>
                <p><Markup content={recipeSummary}/></p>
            </figcaption>
        </figure>}
    </Card>
}

export {RecipeInformation}
